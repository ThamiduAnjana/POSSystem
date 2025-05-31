import { Injectable } from '@angular/core';
import {GlobalService} from "../../core/services/global.service";

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor(
    private globalService: GlobalService,
  ) { }

  gridDataHandler(gridData: unknown){
    try {
      // Validate input data structure
      if (!gridData) {
        throw new Error('Grid data is not available');
      }

      if (!Array.isArray(gridData)) {
        throw new Error('Grid data must be an array');
      }

      if (gridData.length === 0) {
        throw new Error('Grid data is empty');
      }

      // Type guard for GridDataItem
      const isGridDataItem = (item: any): item is GridDataItem => {
        return typeof item.id === 'number' &&
          typeof item.name === 'string' &&
          typeof item.employee_id === 'number' &&
          typeof item.employee_name === 'string' &&
          Array.isArray(item.grid) &&
          item.grid.every(isGridHeaderItem);
      };

      // Type guard for GridHeaderItem
      const isGridHeaderItem = (item: any): item is GridHeaderItem => {
        const validColumnTypes = ['text', 'image', 'number', 'boolean', 'currency'];
        return typeof item.id === 'number' &&
          typeof item.name === 'string' &&
          typeof item.column === 'string' &&
          validColumnTypes.includes(item.column_type);
      };

      // Validate each item in the array
      if (!gridData.every(isGridDataItem)) {
        throw new Error('Grid data is not in the correct format');
      }

      // Transform data with proper typing
      const transformedData: GridDataItem[] = gridData.map((item: GridDataItem) => ({
        id: item.id,
        name: item.name,
        employee_id: item.employee_id,
        employee_name: item.employee_name,
        grid_header: item.grid_header.map((gridItem: GridHeaderItem) => ({
          id: gridItem.id,
          name: gridItem.name,
          column: gridItem.column,
          column_type: gridItem.column_type
        }))
      }));

      return this.globalService.massageHandler(transformedData, false,'Grid data fetched successfully');

    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      return this.globalService.massageHandler([], true, errorMessage);
    }
  }

  gridPatchValues(gridData: any, data: any) {
    const returnGridData = this.gridDataHandler(gridData);

    if(returnGridData.is_error){
      return this.globalService.massageHandler([], true, returnGridData.message);
    }

    if(!Array.isArray(data) || data.length === 0){
      return this.globalService.massageHandler([], true, 'Data is not available');
    }

    return this.globalService.massageHandler(returnGridData.data, false, 'Grid data patched successfully');
  }
}

interface GridHeaderItem {
  id: number;
  name: string;
  column: string;
  column_type: 'text' | 'image' | 'number' | 'boolean' | 'currency';
}

interface GridDataItem {
  id: number;
  name: string;
  employee_id: number;
  employee_name: string;
  grid_header: GridHeaderItem[];
}
