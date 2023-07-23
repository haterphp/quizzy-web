import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FilledButtonDirective } from "./directives/filled-button.directive";
import { OutlinedButtonDirective } from "./directives/outlined-button.directive";

@NgModule({
    imports: [CommonModule],
    declarations: [FilledButtonDirective, OutlinedButtonDirective],
    exports: [FilledButtonDirective, OutlinedButtonDirective]
})
export class UIButtonModule { }
