import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgAuthComponent } from './svg-auth/svg-auth.component';
import { InputComponent } from './input/input.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SvgAuthComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SvgAuthComponent,
    InputComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ResourcesModule { }
