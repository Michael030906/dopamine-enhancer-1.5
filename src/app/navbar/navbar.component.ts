import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuththenticated = false;
  private userSub: Subscription;

  constructor(private authService: AuthService,private dataStorageService: DataStorageService) { }

  onSaveData(){
    this.dataStorageService.storeFavorites();
  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuththenticated = !!user;
    })
  }
  ngOnDestroy(): void {
      this.userSub.unsubscribe()
  }
}
