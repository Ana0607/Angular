import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriesComponent } from './aries.component';

describe('AriesComponent', () => {
  let component: AriesComponent;
  let fixture: ComponentFixture<AriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
