import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIButtonModule } from './button/button.module';


@NgModule({
  imports: [CommonModule, UIButtonModule],
  exports: [UIButtonModule]
})
export class UIModule {}
