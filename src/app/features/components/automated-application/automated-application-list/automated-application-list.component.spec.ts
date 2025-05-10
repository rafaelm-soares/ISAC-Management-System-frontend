import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatedApplicationListComponent } from './automated-application-list.component';

describe('AutomatedApplicationListComponent', () => {
  let component: AutomatedApplicationListComponent;
  let fixture: ComponentFixture<AutomatedApplicationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutomatedApplicationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomatedApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
