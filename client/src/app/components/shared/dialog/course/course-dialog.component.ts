import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// import * as moment from 'moment';

import { ICourse } from '../../../../interfaces/course';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

  form: FormGroup;
  description: string;

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) { description, longDescription,
      category }: ICourse) {
    this.description = description;

    this.form = fb.group({
      description: [description, Validators.required],
      category: [category, Validators.required],
      // releasedAt: [moment(), Validators.required],
      longDescription: [longDescription, Validators.required]
    });
  }

  ngOnInit() {
  }

  save() {
    console.log(this.form.value);
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
