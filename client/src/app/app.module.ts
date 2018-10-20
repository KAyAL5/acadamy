import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { ServiceWorkerModule, SwUpdate, SwPush } from '@angular/service-worker';

import { AppRoutingModule } from './modules/routing.module';
import { MaterialModule } from './modules/material.module';
import { HomeModule } from './modules/home.module';
import { ComponentModule } from './modules/Component.module';

 import { DialogService, SnackBarService } from './services/index';

import { AppComponent } from './app.component';
import { RegistrationDialogComponent, LoginDialogComponent, CourseDialogComponent, ConfirmDialogComponent } from './components/shared/dialog/index'

// import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
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
    RegistrationDialogComponent,
    LoginDialogComponent,
    ConfirmDialogComponent,
    CourseDialogComponent
 ],
 entryComponents: [
  RegistrationDialogComponent,
  LoginDialogComponent,
  ConfirmDialogComponent,
  CourseDialogComponent
],
  providers: [
    DialogService,
    SnackBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(update: SwUpdate, push: SwPush) {
  //   update.available.subscribe(ud => {
  //     console.log('update available');
  //   });
  // }
}
