import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  NgbAccordionDirective, 
  NgbAccordionItem, 
  NgbAccordionHeader, 
  NgbAccordionToggle,
  NgbAccordionBody,
  NgbAccordionCollapse
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-grid-settings',
  templateUrl: './grid-settings.component.html',
  styleUrls: ['./grid-settings.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    NgbAccordionDirective,
    NgbAccordionItem,
    NgbAccordionHeader,
    NgbAccordionToggle,
    NgbAccordionBody,
    NgbAccordionCollapse
  ]
})
export class GridSettingsComponent {

  @Input() gridFrom: any;
  @Output() fetchDataEvent = new EventEmitter<void>();
  @Output() closeEvent = new EventEmitter<void>();

  gridSettings = {
    id: 2,
    name: 'Grid View 2',
    employee_id: 1,
    employee_name: 'Mr.John Doe',
    grid_views: [
      {
        id: 1,
        name: 'Grid View 1',
        employee_id: 1,
        employee_name: 'Mr.John Doe',
        active: false,
        grid_headers: [
          {
            id: 1,
            is_active: true,
            name: 'Image',
            column: 'image',
            class_list: 'text-start',
          },
          {
            id: 2,
            is_active: false,
            name: 'Sort Name',
            column: 'sort_name',
            class_list: 'text-start',
          },
          {
            id: 3,
            is_active: true,
            name: 'Product Name',
            column: 'product_name',
            class_list: 'text-start',
          },
          {
            id: 4,
            is_active: true,
            name: 'Category',
            column: 'category',
            class_list: 'text-start',
          },
          {
            id: 5,
            is_active: false,
            name: 'Cost (Rs.)',
            column: 'cost',
            class_list: 'text-end',
          },
        ],
      },
      {
        id: 2,
        name: 'Grid View 2',
        employee_id: 1,
        employee_name: 'Mr.John Doe',
        active: true,
        grid_headers: [
          {
            id: 1,
            is_active: true,
            name: 'Image',
            column: 'image',
            class_list: 'text-start',
          },
          {
            id: 2,
            is_active: true,
            name: 'Sort Name',
            column: 'sort_name',
            class_list: 'text-start',
          },
          {
            id: 3,
            is_active: true,
            name: 'Product Name',
            column: 'product_name',
            class_list: 'text-start',
          },
          {
            id: 4,
            is_active: true,
            name: 'Category',
            column: 'category',
            class_list: 'text-start',
          },
          {
            id: 5,
            is_active: false,
            name: 'Cost (Rs.)',
            column: 'cost',
            class_list: 'text-end',
          },
        ],
      },
    ],
  };

  constructor(
    private modalService: NgbModal,
  ) {
    console.log(this.gridSettings);
  }

  closeGridSettingsModal() {
    this.closeEvent.emit();
  }

  protected readonly toString = toString;
}
