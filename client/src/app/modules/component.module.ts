import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // use for ngmodel used in component

import { MaterialModule } from './material.module';

 import { ResultComponent } from '../components/student/result/result.component';
 import { AboutComponent } from '../components/common/about/about.component';
 import { ContactComponent } from '../components/common/contact/contact.component';


@NgModule({
    declarations: [
        AboutComponent, ContactComponent, ResultComponent
     ],
     imports: [CommonModule, FormsModule, MaterialModule],
     exports: [AboutComponent, ContactComponent, ResultComponent],

})
export class ComponentModule { }
