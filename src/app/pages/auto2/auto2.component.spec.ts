import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auto2Component } from './auto2.component';

describe('Auto2Component', () => {
  let component: Auto2Component;
  let fixture: ComponentFixture<Auto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Auto2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Auto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
