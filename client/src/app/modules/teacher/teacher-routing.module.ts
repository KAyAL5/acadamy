import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateTeacherComponent } from '../../components/teacher/create-teacher/create-teacher.component';

const routes: Routes = [
    { path: '', component: CreateTeacherComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class TeachersRoutingModule { }
