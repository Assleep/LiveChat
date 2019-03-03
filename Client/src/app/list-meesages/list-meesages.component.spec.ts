import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMeesagesComponent } from './list-meesages.component';

describe('ListMeesagesComponent', () => {
  let component: ListMeesagesComponent;
  let fixture: ComponentFixture<ListMeesagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMeesagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMeesagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
