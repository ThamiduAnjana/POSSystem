import {Component, EventEmitter, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-pos-products-update',
  templateUrl: './pos-products-update.component.html',
  styleUrls: ['./pos-products-update.component.scss']
})
export class PosProductsUpdateComponent {

  @Output() fetchDataEvent = new EventEmitter<void>();
  @Output() closeEvent = new EventEmitter<void>();

  employees = [
    {
      id: 1,
      code: 'EMP-1',
      name: 'Employee 1',
    },
    {
      id: 2,
      code: 'EMP-2',
      name: 'Employee 2',
    },
    {
      id: 3,
      code: 'EMP-3',
      name: 'Employee 3',
    }
  ];

  constructor(
    private modalService: NgbModal,
  ) {
  }

  closeProductUpdateModal() {
    this.closeEvent.emit();
  }
}
