import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auto1Component } from './auto1.component';

describe('Auto1Component', () => {
  let component: Auto1Component;
  let fixture: ComponentFixture<Auto1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Auto1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Auto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
