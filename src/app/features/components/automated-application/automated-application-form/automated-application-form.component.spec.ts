import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatedApplicationFormComponent } from './automated-application-form.component';

describe('AutomatedApplicationFormComponent', () => {
  let component: AutomatedApplicationFormComponent;
  let fixture: ComponentFixture<AutomatedApplicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutomatedApplicationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomatedApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
