import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // use for ngmodel used in component
// import { FormBuilder, Validators,  } from '@angular/forms';

import { MaterialModule } from './material.module';

// import { CourseDialogComponent } from '../components/shared/dialog/course/course-dialog.component';
// import { ConfirmDialogComponent } from '../components/shared/dialog/confirm/confirm.component';


@NgModule({
    declarations: [ ],
     imports: [CommonModule, FormsModule, MaterialModule, ReactiveFormsModule],
     exports: [ReactiveFormsModule],

})
export class DialogModule { }
