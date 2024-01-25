import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedFormComponent } from './embed-form.component';

describe('EmbedFormComponent', () => {
  let component: EmbedFormComponent;
  let fixture: ComponentFixture<EmbedFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmbedFormComponent]
    });
    fixture = TestBed.createComponent(EmbedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
