import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavDadJokesComponent } from './fav-dad-jokes.component';

describe('FavDadJokesComponent', () => {
  let component: FavDadJokesComponent;
  let fixture: ComponentFixture<FavDadJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavDadJokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavDadJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
