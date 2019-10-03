import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSortable } from './test.component';

describe('TestComponent', () => {
  let component: TableSortable;
  let fixture: ComponentFixture<TableSortable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSortable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSortable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
