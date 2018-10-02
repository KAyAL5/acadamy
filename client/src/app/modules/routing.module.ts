import { NgModule, ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../components/common/home/home.component';
import { AboutComponent } from '../components/common/about/about.component';
import { PushNotificationComponent } from '../components/shared/pushnotifactions/push-notifactions.component';
import { ContactComponent } from '../components/common/contact/contact.component';
import { ResultComponent } from '../components/student/result/result.component';

const routes: Routes = [
  { path : '', component : HomeComponent },
  { path: 'home', component: HomeComponent },
  { path : 'about', component : AboutComponent },
  { path : 'contact', component : ContactComponent },
  { path: 'StudentResult', component: ResultComponent },
  { path: 'notification', component: PushNotificationComponent},
  { path: 'teacher', loadChildren: './teacher/teacher.module#TeacherModule'}
  // { path: 'login', loadChildren: './login.module#LoginModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
