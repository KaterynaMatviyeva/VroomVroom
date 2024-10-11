import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auto3Component } from './auto3.component';

describe('Auto3Component', () => {
  let component: Auto3Component;
  let fixture: ComponentFixture<Auto3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Auto3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Auto3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
