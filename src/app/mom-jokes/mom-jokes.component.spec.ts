import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomJokesComponent } from './mom-jokes.component';

describe('MomJokesComponent', () => {
  let component: MomJokesComponent;
  let fixture: ComponentFixture<MomJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomJokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
