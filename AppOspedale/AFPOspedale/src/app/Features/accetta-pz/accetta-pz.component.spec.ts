/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AccettaPzComponent } from './accetta-pz.component';

describe('AccettaPzComponent', () => {
  let component: AccettaPzComponent;
  let fixture: ComponentFixture<AccettaPzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccettaPzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccettaPzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
