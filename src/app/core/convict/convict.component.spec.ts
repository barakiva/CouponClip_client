import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvictComponent } from './convict.component';

describe('ConvictComponent', () => {
  let component: ConvictComponent;
  let fixture: ComponentFixture<ConvictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
