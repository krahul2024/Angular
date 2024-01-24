import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdFormComponent } from './md-form.component';

describe('MdFormComponent', () => {
  let component: MdFormComponent;
  let fixture: ComponentFixture<MdFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdFormComponent]
    });
    fixture = TestBed.createComponent(MdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
