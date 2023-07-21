import { Directive, ElementRef, Input, OnInit } from "@angular/core";
import { ButtonSize } from "../button.interfaces";
import { BASE_BUTTON_CLASSNAME, ICON_BUTTON_CLASSNAME, SIZES_BUTTON_CLASSNAMES } from "../button.classnames";

@Directive({})
export class CommonButtonDirective implements OnInit {
    @Input() size: ButtonSize ='default'
    
    @Input('is-icon') isIcon: boolean = false

    constructor(protected el: ElementRef<HTMLButtonElement>) {}

    public ngOnInit(): void {
        this.el.nativeElement.classList.add(BASE_BUTTON_CLASSNAME)
        this.el.nativeElement.classList.add(SIZES_BUTTON_CLASSNAMES[this.size])
        if(this.isIcon) this.el.nativeElement.classList.add(ICON_BUTTON_CLASSNAME)
    }
}