import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss']
})
export class CreateProductsComponent implements OnInit {
  @Input() activeModal!: NgbActiveModal;
  productForm: FormGroup;
  categories: any[] = []; // This would be populated from an API
  branches: any[] = []; // This would be populated from an API
  brands: any[] = []; // This would be populated from an API
  racks: any[] = []; // This would be populated from an API
  units: any[] = []; // This would be populated from an API
  
  // For image upload
  productImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  
  // Selected main unit
  selectedMainUnit: any = null;
  
  // Dropzone configuration
  dropzoneConfig: DropzoneConfigInterface = {
    maxFilesize: 2, // MB
    maxFiles: 1,
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };
  
  constructor(
    private fb: FormBuilder
  ) {
    // Initialize with empty arrays for demo
    this.categories = [{id: 1, name: 'Category 1'}, {id: 2, name: 'Category 2'}];
    this.branches = [{id: 1, name: 'Branch 1'}, {id: 2, name: 'Branch 2'}];
    this.brands = [{id: 1, name: 'Brand 1'}, {id: 2, name: 'Brand 2'}];
    this.racks = [{id: 1, name: 'Rack 1'}, {id: 2, name: 'Rack 2'}];
    this.units = [{id: 1, name: 'Unit 1'}, {id: 2, name: 'Unit 2'}];
    
    this.productForm = this.fb.group({
      // Product Details
      productNameEn: ['', Validators.required],
      productNameSi: [''],
      sortName: [''],
      description: [''],
      skuBarcode: ['', Validators.required],
      categoryId: [null, Validators.required],
      branchIds: [[]],
      brandId: [null],
      rackNo: [''],
      alertQty: [0],
      
      // Unit of Measure
      mainUnitId: [null, Validators.required],
      subUnitDetails: this.fb.array([]),
      
      // Other Details
      notForSale: [false],
      manageStock: [true],
      saleAsLeatesPrice: [false],
      customField1: [''],
      customField2: [''],
      customField3: [''],
      customField4: [''],
      
      // Cost & Prices
      cost: [0, [Validators.required, Validators.min(0)]],
      margin: [0, [Validators.min(0), Validators.max(100)]],
      labelPrice: [0, [Validators.required, Validators.min(0)]],
      defaultPrice: [0, [Validators.required, Validators.min(0)]]
    });
  }
  
  ngOnInit(): void {
    // Any initialization logic
    // Add an empty sub unit by default
    this.addSubUnit();
    
    // Subscribe to main unit changes
    this.productForm.get('mainUnitId')?.valueChanges.subscribe(unitId => {
      this.updateSelectedMainUnit(unitId);
    });
  }
  
  /**
   * Update the selected main unit when it changes
   * @param unitId The ID of the selected main unit
   */
  updateSelectedMainUnit(unitId: number | null): void {
    if (unitId) {
      this.selectedMainUnit = this.units.find(unit => unit.id === unitId);
    } else {
      this.selectedMainUnit = null;
    }
  }
  
  /**
   * Get the sub unit details form array
   */
  get subUnitDetailsArray(): FormArray {
    return this.productForm.get('subUnitDetails') as FormArray;
  }
  
  /**
   * Get the controls of the sub unit details form array
   */
  get subUnitDetailsControls() {
    return this.subUnitDetailsArray.controls;
  }
  
  /**
   * Add a new sub unit to the form array
   */
  addSubUnit(): void {
    const subUnitForm = this.fb.group({
      unitId: [null, Validators.required],
      conversionRate: [1, [Validators.required, Validators.min(0.01)]]
    });
    
    this.subUnitDetailsArray.push(subUnitForm);
  }
  
  /**
   * Remove a sub unit from the form array
   * @param index Index of the sub unit to remove
   */
  removeSubUnit(index: number): void {
    if (this.subUnitDetailsArray.length > 1) {
      this.subUnitDetailsArray.removeAt(index);
    }
  }
  
  onUploadSuccess(event: any): void {
    const [file, response] = event;
    this.productImage = file;
    
    // Create a preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
    
    console.log('File uploaded successfully:', response);
  }
  
  onUploadError(event: any): void {
    console.error('Error uploading file:', event);
  }
  
  calculateDefaultPrice(): void {
    const cost = this.productForm.get('cost')?.value || 0;
    const margin = this.productForm.get('margin')?.value || 0;
    
    if (cost > 0 && margin > 0) {
      const defaultPrice = cost + (cost * margin / 100);
      this.productForm.patchValue({
        defaultPrice: defaultPrice,
        labelPrice: defaultPrice
      });
    }
  }
  
  saveProduct(): void {
    if (this.productForm.valid) {
      // Here you would typically send the form data to your API
      const formData = new FormData();
      
      // Append form values
      Object.keys(this.productForm.value).forEach(key => {
        formData.append(key, this.productForm.value[key]);
      });
      
      // Append image if exists
      if (this.productImage) {
        formData.append('productImage', this.productImage);
      }
      
      console.log('Product data:', this.productForm.value);
      console.log('Product image:', this.productImage);
      
      // Close modal with form data
      this.activeModal.close(formData);
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.productForm.controls).forEach(key => {
        const control = this.productForm.get(key);
        control?.markAsTouched();
      });
    }
  }
  
  closeModal(): void {
    this.activeModal.dismiss('cancel');
  }
  
  /**
   * Opens a modal for adding a new category
   */
  openAddCategoryModal(): void {
    // Temporarily store current form values to prevent loss on modal interaction
    const currentFormValues = this.productForm.value;
    
    // Here you would typically open a modal dialog for adding a new category
    // For demonstration, we'll just add a new category directly
    const newCategoryName = prompt('Enter new category name:');
    
    if (newCategoryName && newCategoryName.trim() !== '') {
      // Generate a temporary ID (in a real app, this would come from the backend)
      const newId = Math.max(...this.categories.map(c => c.id), 0) + 1;
      
      // Add the new category to the list
      const newCategory = { id: newId, name: newCategoryName.trim() };
      this.categories = [...this.categories, newCategory];
      
      // Select the newly added category
      this.productForm.patchValue({ categoryId: newId });
    }
  }
  
  /**
   * Opens a modal for adding a new brand
   */
  openAddBrandModal(): void {
    // Temporarily store current form values to prevent loss on modal interaction
    const currentFormValues = this.productForm.value;
    
    // Here you would typically open a modal dialog for adding a new brand
    // For demonstration, we'll just add a new brand directly
    const newBrandName = prompt('Enter new brand name:');
    
    if (newBrandName && newBrandName.trim() !== '') {
      // Generate a temporary ID (in a real app, this would come from the backend)
      const newId = Math.max(...this.brands.map(b => b.id), 0) + 1;
      
      // Add the new brand to the list
      const newBrand = { id: newId, name: newBrandName.trim() };
      this.brands = [...this.brands, newBrand];
      
      // Select the newly added brand
      this.productForm.patchValue({ brandId: newId });
    }
  }
}
