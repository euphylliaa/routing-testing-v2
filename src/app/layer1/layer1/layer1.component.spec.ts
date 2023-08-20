import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layer1Component } from './layer1.component';

describe('Layer1Component', () => {
  let component: Layer1Component;
  let fixture: ComponentFixture<Layer1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Layer1Component]
    });
    fixture = TestBed.createComponent(Layer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
