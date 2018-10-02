import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { ServiceWorkerModule, SwUpdate, SwPush } from '@angular/service-worker';

import { AppRoutingModule } from './modules/routing.module';
import { MaterialModule } from './modules/material.module';
import { HomeModule } from './modules/home.module';
import { ComponentModule } from './modules/Component.module';

// import { ServiceModule } from './modules/service.module';
import { DialogService } from './services/utilities/dialog.service';
import { NotificationService } from './services/utilities/notification.service';
import { PushNotificationsService } from './services/utilities/push.notification.service';

import { AppComponent } from './app.component';
import { LoginDialogComponent } from './components/shared/dialog/login/login.component';
import { CourseDialogComponent } from './components/shared/dialog/course/course-dialog.component';
import { ConfirmDialogComponent } from './components/shared/dialog/confirm/confirm.component';
import { PushNotificationComponent } from './components/shared/pushnotifactions/push-notifactions.component';
// import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    ComponentModule,
    // environment.production ? ServiceWorkerModule.register('../ngsw-config.json') : []
  ],
  declarations: [
    AppComponent,
    LoginDialogComponent,
    ConfirmDialogComponent,
    CourseDialogComponent,
    PushNotificationComponent,
 ],
 entryComponents: [
  LoginDialogComponent,
  ConfirmDialogComponent,
  CourseDialogComponent
],
  providers: [
    DialogService,
    NotificationService,
    PushNotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(update: SwUpdate, push: SwPush) {
  //   update.available.subscribe(ud => {
  //     console.log('update available');
  //   });
  // }
}
