import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { EventService } from '../../core/services/event.service';

import { LAYOUT_MODE } from "../layouts.model";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})


export class TopbarComponent implements OnInit {

  mode: string = LAYOUT_MODE;
  element: any;
  time = new Date();
  intervalId;
  showToggleBar = true;

  constructor(
    public _cookiesService: CookieService,
    private eventService: EventService,
    private router: Router,
  ) {
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }


  @Output() settingsButtonClicked = new EventEmitter();
  @Output() mobileMenuButtonClicked = new EventEmitter();

  layoutMode!: string;

  ngOnInit(): void {
    this.mode = this._cookiesService.get('layoutMode') != '' ? this._cookiesService.get('layoutMode') : LAYOUT_MODE;
    this.changeMode(this.mode);
    this.element = document.documentElement;

    this.router.events.subscribe(event => {
      this.checkUrl();
    });
  }

  changeMode(mode: string) {
    this.layoutMode = mode;
    this.mode = mode;
    this.eventService.broadcast('changeMode', mode);
    this._cookiesService.set('layoutMode', mode);
  }

  toggleMobileMenu(event: any) {
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

  toggleRightSidebar() {
    this.settingsButtonClicked.emit();
  }

  logout() {}

  checkUrl(){
    if(this.router.url.includes('simple-pos') || this.router.url.includes('advance-pos')){
      document.body.classList.add('pos-screen');
      this.showToggleBar = false;
    } else {
      document.body.classList.remove('pos-screen');
      this.showToggleBar = true;
    }
  }

}
