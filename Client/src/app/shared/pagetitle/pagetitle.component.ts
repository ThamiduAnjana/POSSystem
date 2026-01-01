import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagetitle',
  templateUrl: './pagetitle.component.html',
  styleUrls: ['./pagetitle.component.scss'],
  standalone: true,
  imports: [CommonModule]
})

/**
 * Page Title Component
 */
export class PagetitleComponent implements OnInit {

  @Input()
  breadcrumbItems!: Array<{
    active?: boolean;
    label?: string;
  }>;

  @Input() title: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  goBack(){
    window.history.back();
  }
}
