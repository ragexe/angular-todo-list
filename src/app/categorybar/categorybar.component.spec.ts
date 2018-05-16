import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorybarComponent } from './categorybar.component';

describe('CategorybarComponent', () => {
  let component: CategorybarComponent;
  let fixture: ComponentFixture<CategorybarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorybarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorybarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
