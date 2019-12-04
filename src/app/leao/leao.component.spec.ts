import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaoComponent } from './leao.component';

describe('LeaoComponent', () => {
  let component: LeaoComponent;
  let fixture: ComponentFixture<LeaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
