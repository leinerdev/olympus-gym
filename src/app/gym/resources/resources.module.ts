import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgAuthComponent } from './svg-auth/svg-auth.component';
import { InputComponent } from './input/input.component'
import { ReactiveFormsModule } from '@angular/forms';
import { SpecialCardComponent } from './special-card/special-card.component';
import { BCardComponent } from './b-card/b-card.component';

@NgModule({
  declarations: [
    SvgAuthComponent,
    InputComponent,
    SpecialCardComponent,
    BCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SvgAuthComponent,
    InputComponent,
    SpecialCardComponent,
    BCardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ResourcesModule { }
