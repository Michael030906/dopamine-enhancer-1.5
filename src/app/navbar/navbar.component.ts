import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuththenticated = false;
  private userSub: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuththenticated = !!user;
    })
  }
  ngOnDestroy(): void {
      this.userSub.unsubscribe()
  }
}
