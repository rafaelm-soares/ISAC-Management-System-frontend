import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AutomatedApplicationService } from '../../../services/automated-application.service';
import { EApplicationType } from '../../../models/enums/EApplicationType';
import { EAutomationType } from '../../../models/enums/EAutomationType';
import { IAutomatedApplication } from '../../../models/IAutomatedApplication';

@Component({
  selector: 'app-automated-application-form',
  templateUrl: './automated-application-form.component.html',
  styleUrl: './automated-application-form.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AutomatedApplicationFormComponent implements OnInit {
  applicationForm: FormGroup;
  isEditMode: boolean = false;
  applicationId: number | null = null;
  applicationTypes = Object.keys(EApplicationType) as Array<keyof typeof EApplicationType>;
  automationTypes = Object.keys(EAutomationType) as Array<keyof typeof EAutomationType>;
  applicationTypeDescriptions = EApplicationType;
  automationTypeDescriptions = EAutomationType;

  constructor(
    private fb: FormBuilder,
    private applicationService: AutomatedApplicationService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.applicationForm = this.fb.group({
      name: ['', Validators.required],
      applicationType: ['', Validators.required],
      automationType: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.applicationId = +id;
      this.isEditMode = true;
      this.loadApplicationData();
    }
  }

  loadApplicationData(): void {
    if (this.applicationId !== null) {
      this.applicationService.getById(this.applicationId).subscribe(application => {
        this.applicationForm.patchValue(application);
      });
    }
  }

  onSubmit(): void {
    if (this.applicationForm.valid) {
      const formValue: IAutomatedApplication = this.applicationForm.value;

      const applicationData: IAutomatedApplication = {
        ...formValue,
        applicationType: formValue.applicationType,
        automationType: formValue.automationType
      };

      if (this.isEditMode && this.applicationId !== null) {
        this.applicationService.update(this.applicationId, applicationData).subscribe(() => {
          this.snackBar.open('Application updated successfully!', '', { duration: 3000 });
          this.router.navigate(['/automated-applications']);
        }, (error) => {
          this.snackBar.open('Failed to update application.', '', { duration: 3000 });
        });
      } else {
        this.applicationService.create(applicationData).subscribe(() => {
          this.snackBar.open('Application created successfully!', '', { duration: 3000 });
          this.router.navigate(['/automated-applications']);
        }, (error) => {
          this.snackBar.open('Failed to create application.', '', { duration: 3000 });
        });
      }
    }
  }

  cancel(): void {
    this.router.navigate(['/automated-applications']);
  }
}