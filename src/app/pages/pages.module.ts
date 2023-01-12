import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    AboutComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
   AboutComponent,
   FormComponent
  ]
})
export class PagesModule { }
