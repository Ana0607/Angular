import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GemeosComponent } from './gemeos.component';

describe('GemeosComponent', () => {
  let component: GemeosComponent;
  let fixture: ComponentFixture<GemeosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemeosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GemeosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
