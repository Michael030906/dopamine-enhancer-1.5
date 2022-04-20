import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavMomJokesComponent } from './fav-mom-jokes.component';

describe('FavMomJokesComponent', () => {
  let component: FavMomJokesComponent;
  let fixture: ComponentFixture<FavMomJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavMomJokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavMomJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
