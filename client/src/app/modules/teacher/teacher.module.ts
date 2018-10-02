import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherService } from '../../services/teachers/teacher.service';

import { TeachersRoutingModule } from './teacher-routing.module';
import { CreateTeacherComponent } from '../../components/teacher/create-teacher/create-teacher.component';

@NgModule({
  imports: [
    CommonModule, TeachersRoutingModule
  ],
  declarations: [CreateTeacherComponent]
})
export class TeacherModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TeacherModule,
      providers: [TeacherService]
    };
  }
}
