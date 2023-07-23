import { Directive, ElementRef, OnInit } from "@angular/core";
import { VARIANTS_BUTTON_CLASSNAMES } from "../button.classnames";
import { CommonButtonDirective } from "./common-button.directive";

@Directive({
    selector: '[ui-btn-outlined]'
})
export class OutlinedButtonDirective extends CommonButtonDirective {

    public override ngOnInit(): void {
        super.ngOnInit()
        this.el.nativeElement.classList.add(VARIANTS_BUTTON_CLASSNAMES.outlined)
    }
}
