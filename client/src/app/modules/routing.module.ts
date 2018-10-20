import { NgModule, ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../shared/auth.guard';

import { HomeComponent } from '../components/common/home/home.component';
import { AboutComponent } from '../components/common/about/about.component';
import { ContactComponent } from '../components/common/contact/contact.component';
import { ResultComponent } from '../components/student/result/result.component';

const routes: Routes = [
  { path : '', component : HomeComponent },
  { path: 'home', component: HomeComponent },
  { path : 'about', component : AboutComponent },
  { path : 'contact', component : ContactComponent },
  { path: 'StudentResult', component: ResultComponent },
  { path: 'teacher', loadChildren: './teacher/teacher.module#TeacherModule'}
  // { path: 'login', loadChildren: './login.module#LoginModule'},
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
