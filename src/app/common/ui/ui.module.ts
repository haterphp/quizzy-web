import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIButtonModule } from './button/button.module';
import { UIInputModule } from './input/input.module';


@NgModule({
  imports: [CommonModule, UIButtonModule, UIInputModule],
  exports: [UIButtonModule, UIInputModule]
})
export class UIModule {}
