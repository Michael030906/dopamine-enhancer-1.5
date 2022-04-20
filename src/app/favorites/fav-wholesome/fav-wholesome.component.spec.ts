import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavWholesomeComponent } from './fav-wholesome.component';

describe('FavWholesomeComponent', () => {
  let component: FavWholesomeComponent;
  let fixture: ComponentFixture<FavWholesomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavWholesomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavWholesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
