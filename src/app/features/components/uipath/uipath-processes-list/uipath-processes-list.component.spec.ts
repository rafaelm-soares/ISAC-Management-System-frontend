import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UipathProcessesListComponent } from './uipath-processes-list.component';

describe('UipathProcessesListComponent', () => {
  let component: UipathProcessesListComponent;
  let fixture: ComponentFixture<UipathProcessesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UipathProcessesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UipathProcessesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
