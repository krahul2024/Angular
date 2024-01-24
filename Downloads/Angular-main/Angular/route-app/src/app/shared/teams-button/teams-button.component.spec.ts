import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsButtonComponent } from './teams-button.component';

describe('TeamsButtonComponent', () => {
  let component: TeamsButtonComponent;
  let fixture: ComponentFixture<TeamsButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsButtonComponent]
    });
    fixture = TestBed.createComponent(TeamsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
