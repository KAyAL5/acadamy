import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultImagePipe } from '../pipes/default-image.pipe';

import { HomeComponent } from '../components/common/home/home.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HomeComponent,
    DefaultImagePipe
  ],
  providers: [],
  exports: [HomeComponent]
})
export class HomeModule {}
