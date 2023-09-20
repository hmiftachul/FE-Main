import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacarComponent } from './pacar.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CardComponent } from './card/card.component';
import { FormModule } from '../form/form.module';



@NgModule({
  declarations: [
    PacarComponent,
    ListComponent,
    DetailComponent,
    CardComponent
  ],
  exports: [
    PacarComponent
  ],
  imports: [
    CommonModule,
    FormModule
  ]
})
export class PacarModule { }
