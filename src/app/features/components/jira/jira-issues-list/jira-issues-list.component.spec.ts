import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraIssuesListComponent } from './jira-issues-list.component';

describe('JiraIssuesListComponent', () => {
  let component: JiraIssuesListComponent;
  let fixture: ComponentFixture<JiraIssuesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JiraIssuesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JiraIssuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
