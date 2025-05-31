import {Component, EventEmitter, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-pos-invoice-payment',
  templateUrl: './pos-invoice-payment.component.html',
  styleUrls: ['./pos-invoice-payment.component.scss']
})
export class PosInvoicePaymentComponent {

  numberPad:string = '';
  showMore:boolean = false;
  @Output() fetchDataEvent = new EventEmitter<void>();
  @Output() closeEvent = new EventEmitter<void>();

  customers = [
    {
      id: 1,
      code: 'Cus-1',
      name: 'Customer 1',
      mobile: '077 180 1521'
    },
    {
      id: 2,
      code: 'Cus-2',
      name: 'Customer 2',
      mobile: '077 180 1521'
    },
    {
      id: 3,
      code: 'Cus-3',
      name: 'Customer 3',
      mobile: '077 180 1521'
    }
  ];

  constructor(
    private modalService: NgbModal,
  ) {
  }

  cashPatchNumber(number_string: string) {
    if(number_string != 'backspace'){
      this.numberPad += number_string;
    }else{
      this.numberPad = this.numberPad.slice(0, -1);
    }
  }

  toggleShowMore() {
    this.showMore = !this.showMore;
  }

  closeInvoicePaymentsModal() {
    this.closeEvent.emit();
  }

}
