import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Header } from './header/header';

@NgModule({
  declarations: [
    Header
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Header
  ]
})
export class CoreModule { }
