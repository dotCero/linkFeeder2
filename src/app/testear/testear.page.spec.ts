import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestearPage } from './testear.page';

describe('TestearPage', () => {
  let component: TestearPage;
  let fixture: ComponentFixture<TestearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestearPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
