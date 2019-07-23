import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBasic } from './inventaire.component';

describe('TableBasic', () => {
  let component: TableBasic;
  let fixture: ComponentFixture<TableBasic>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBasic ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
