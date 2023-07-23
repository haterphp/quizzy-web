import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { InputDirective } from "./directives/input.directive";

import { FieldComponent } from "./components/field/field.component";
import { LabelComponent } from "./components/label/label.component";

const DIRECTIVES = [InputDirective]
const COMPONENTS = [FieldComponent, LabelComponent]

const DECLARATIONS = [...DIRECTIVES, ...COMPONENTS];

@NgModule({
  imports: [CommonModule],
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
})
export class UIInputModule {}
