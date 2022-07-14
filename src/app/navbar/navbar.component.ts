import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  constructor() {  }

  ngOnInit(): void {  }
  ngOnDestroy(): void {  }
}
