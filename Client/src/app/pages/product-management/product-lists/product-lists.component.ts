import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.scss']
})
export class ProductListsComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  isLoading = true;
  page: any = 1;
  pageSize: number = 10;
  totalProducts: number = 0;
  gridFrom: any = {
    code: 'product-lists',
    title: 'Product Lists Grid Settings',
  };
  modalGridSettingsRef!: any;
  modalCreateProductRef!: any;

  gridData =
    {
      id: 1,
      name: 'Grid View 1',
      employee_id: 1,
      employee_name: 'Mr.John Doe',
      grid_header: [
        {
          id: 1,
          name: 'Image',
          column: 'image',
          class_list: 'text-start',
        },
        {
          id: 2,
          name: 'Sort Name',
          column: 'sort_name',
          class_list: 'text-start',
        },
        {
          id: 3,
          name: 'Product Name',
          column: 'product_name',
          class_list: 'text-start',
        },
        {
          id: 4,
          name: 'Category',
          column: 'category',
          class_list: 'text-start',
        },
        {
          id: 5,
          name: 'Cost (Rs.)',
          column: 'cost',
          class_list: 'text-end',
        },
        {
          id: 7,
          name: 'Retail Price (Rs.)',
          column: 'retail_price',
          class_list: 'text-end',
        },
        {
          id: 9,
          name: 'Wholesale Price (Rs.)',
          column: 'wholesale_price',
          class_list: 'text-end',
        },
        {
          id: 10,
          name: 'Quantity',
          column: 'quantity',
          class_list: 'text-end',
        },
        {
          id: 11,
          name: 'Payment Status',
          column: 'payment_status',
          class_list: 'text-center',
        },
        {
          id: 12,
          name: 'Status',
          column: 'is_active',
          class_list: 'text-center',
        }
      ],
      grid_data: [
        [
          {
            column: 'image',
            column_type: 'image',
            color_code: '',
            class_list: '',
            is_link: false,
            ref: null,
            value: 'assets/images/noimage-lrg.png',
          },
          {
            column: 'sort_name',
            column_type: 'text',
            color_code: '',
            class_list: '',
            is_link: false,
            ref: null,
            value: 'A',
          },
          {
            column: 'product_name',
            column_type: 'text',
            color_code: '',
            class_list: '',
            is_link: true,
            ref: null,
            value: 'Product 1',
          },
          {
            column: 'category',
            column_type: 'text',
            color_code: '',
            class_list: '',
            is_link: false,
            ref: null,
            value: 'Category 1',
          },
          {
            column: 'cost',
            column_type: 'currency',
            color_code: '',
            class_list: '',
            is_link: false,
            ref: null,
            value: null,
          },
          {
            column: 'retail_price',
            column_type: 'currency',
            color_code: '',
            class_list: '',
            is_link: false,
            ref: null,
            value: 20,
          },
          {
            column: 'wholesale_price',
            column_type: 'currency',
            color_code: '',
            class_list: '',
            is_link: false,
            ref: null,
            value: 25,
          },
          {
            column: 'quantity',
            column_type: 'number',
            color_code: '',
            class_list: '',
            is_link: false,
            ref: null,
            value: 100,
          },
          {
            column: 'payment_status',
            column_type: 'status',
            color_code: '#2ecc71',
            class_list: 'text-center',
            is_link: false,
            ref: null,
            value: 'Paid',
          }
          ,
          {
            column: 'is_active',
            column_type: 'boolean',
            color_code: '',
            class_list: 'text-center',
            is_link: false,
            ref: null,
            value: 1,
          }
        ],
        [
          {
            column: 'image',
            column_type: 'image',
            color_code: '',
            class_list: '',
            is_link: false,
            ref: null,
            value: 'assets/images/noimage-lrg.png',
          },
          {
            column: 'sort_name',
            column_type: 'text',
            color_code: '',
            class_list: '',
            is_link: false,
            ref: null,
            value: 'B',
          },
          {
            column: 'product_name',
            column_type: 'text',
            color_code: '',
            class_list: '',
            is_link: true,
            ref: null,
            value: '',
          },
          {
            column: 'category',
            column_type: 'text',
            color_code: '',
            class_list: '',
            is_link: false,
            ref: null,
            value: 'Category 2',
          },
          {
            column: 'cost',
            column_type: 'currency',
            color_code: '',
            class_list: '',
            is_link: false,
            ref: null,
            value: 12,
          },
          {
            column: 'retail_price',
            column_type: 'currency',
            color_code: '',
            class_list: '',
            is_link: false,
            ref: null,
            value: 22,
          },
          {
            column: 'wholesale_price',
            column_type: 'currency',
            color_code: '',
            class_list: '',
            is_link: false,
            ref: null,
            value: 28,
          },
          {
            column: 'quantity',
            column_type: 'number',
            color_code: '',
            class_list: '',
            is_link: false,
            ref: null,
            value: 200,
          },
          {
            column: 'payment_status',
            column_type: 'status',
            color_code: '#e74c3c',
            class_list: 'text-center',
            is_link: false,
            ref: null,
            value: 'Unpaid',
          }
          ,
          {
            column: 'is_active',
            column_type: 'boolean',
            color_code: '',
            class_list: 'text-center',
            is_link: false,
            ref: null,
            value: 0,
          }
        ]
      ]
    };

  products = [
    {
      id: 1,
      image: 'assets/images/products/01.jpg',
      sort_name: 'A',
      product_name: 'Product 1',
      category: 'Category 1',
      cost: 10,
      label_price: 15,
      retail_price: 20,
      wholesale_price: 25,
      quantity: 100
    },
    {
      id: 2,
      image: 'assets/images/products/02.jpg',
      sort_name: 'B',
      product_name: 'Product 2',
      category: 'Category 2',
      cost: 12,
      label_price: 18,
      retail_price: 22,
      wholesale_price: 28,
      quantity: 200
    }
  ];

  constructor(
    private modalService: NgbModal,
  ) {
  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      {label: 'Products'},
      {label: 'Product Lists', active: true}
    ];
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  onPageChange(pageNumber: number) {
    this.page = pageNumber;
  }

  openGridSettingsModal(modal:any) {
    this.modalGridSettingsRef =  this.modalService.open(modal, {size: '2md', keyboard: false, backdrop: 'static'});
  }

  closeGridSettingsModal() {
    this.modalGridSettingsRef.close();
  }

  openCreateProductModal(modal: any) {
    this.modalCreateProductRef = this.modalService.open(modal, {
      size: 'xl',
      keyboard: false,
      backdrop: 'static',
      centered: true
    });

    // Handle modal result when closed
    this.modalCreateProductRef.result.then((result: any) => {
      if (result) {
        console.log('Product created:', result);
        // Here you would typically refresh the product list or add the new product to the list
      }
    }, (reason: any) => {
      console.log('Modal dismissed:', reason);
    });
  }

  closeCreateProductModal() {
    this.modalCreateProductRef.close();
  }
}
