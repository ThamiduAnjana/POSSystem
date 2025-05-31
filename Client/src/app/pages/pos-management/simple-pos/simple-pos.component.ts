import {AfterViewChecked, AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-simple-pos',
  templateUrl: './simple-pos.component.html',
  styleUrls: ['./simple-pos.component.scss']
})
export class SimplePosComponent implements OnInit, AfterViewInit, AfterViewChecked {

  elem: any;
  isFullscreen:boolean = false;
  invoicePrefix:string = 'INV-';
  returnPrefix:string = 'RTN-';
  animationSet:boolean = false;
  invoiceDiscountType:number = 2;
  modalInvoicePaymentsRef!:any;
  modalProductUpdateRef!:any;

  @ViewChild('marqueeContent') marqueeContent!: ElementRef;

  holding = [
    {
      id: 1,
      name: 'Holding 1',
      status: 'active'
    },
    {
      id: 2,
      name: 'Holding 2',
      status: 'inactive'
    },
    {
      id: 3,
      name: 'Holding 3',
      status: 'active'
    }
  ];

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

  newsAlerts = [
    {
      id: 1,
      title: 'New Product Launch',
      description: 'We are excited to announce the launch of our new product line!'
    },
    {
      id: 2,
      title: 'System Maintenance',
      description: 'Scheduled maintenance will occur on Saturday from 2 AM to 4 AM.'
    },
    {
      id: 3,
      title: 'Holiday Sale',
      description: 'Get ready for our upcoming holiday sale with discounts up to 50% off!'
    }
  ];

  constructor(
    private modalService: NgbModal,
    @Inject(DOCUMENT) private document: any
  ) {
  }

  ngOnInit() {
    this.elem = document.documentElement;
  }

  ngAfterViewInit() {
    this.setMarqueeAnimation();
  }

  ngAfterViewChecked() {
    if (!this.animationSet && this.marqueeContent) {
      this.setMarqueeAnimation();
    }
  }

  private setMarqueeAnimation(): void {
    if (!this.marqueeContent?.nativeElement) {
      return;
    }

    // Calculate the content width and parent width
    const contentWidth = this.marqueeContent.nativeElement.scrollWidth;
    const parentWidth = this.marqueeContent.nativeElement.parentElement.offsetWidth;

    // Set animation duration dynamically (e.g., 10px per second)
    const duration = Math.max(parentWidth / 20, 50); // Minimum 50 seconds for short content
    this.marqueeContent.nativeElement.style.setProperty('--scroll-duration', `${duration}s`);

    this.animationSet = true; // Prevent re-execution
  }

  toggleFullscreen() {
    if (!this.isFullscreen) {
      this.openFullscreen();
    } else {
      this.closeFullscreen();
    }
  }

  openInvoicePaymentsModal(modal:any) {
    this.modalInvoicePaymentsRef =  this.modalService.open(modal, {size: '2md', keyboard: false, backdrop: 'static'});
  }

  closeInvoicePaymentsModal() {
    this.modalInvoicePaymentsRef.close();
  }

  openProductUpdateModal(modal:any) {
    this.modalProductUpdateRef =  this.modalService.open(modal, {size: '2md', keyboard: false, backdrop: 'static'});
  }

  closeProductUpdateModal() {
    this.modalProductUpdateRef.close();
  }

  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
    this.isFullscreen = true;
  }

  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
    this.isFullscreen = false;
  }

}
