import { NgModule } from "@angular/core";
import { FilledButtonDirective } from "./directives/filled-button.directive";
import { OutlinedButtonDirective } from "./directives/outlined-button.directive";

@NgModule({
    declarations: [FilledButtonDirective, OutlinedButtonDirective],
    exports: [FilledButtonDirective, OutlinedButtonDirective]
})
export class UIButtonModule { }