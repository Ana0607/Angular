import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscorpiaoComponent } from './escorpiao.component';

describe('EscorpiaoComponent', () => {
  let component: EscorpiaoComponent;
  let fixture: ComponentFixture<EscorpiaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscorpiaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscorpiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
