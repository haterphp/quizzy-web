import { Directive, ElementRef, HostListener, OnInit, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[ui-input]',
})
export class InputDirective implements OnInit {
  constructor(
    protected el: ElementRef<HTMLInputElement>,
    protected viewContainer: ViewContainerRef
  ) {}

  public ngOnInit(): void {
    this.el.nativeElement.classList.add('field-input');
    if (this.el.nativeElement.value !== '')
      this.el.nativeElement.classList.add('focus');
  }

  @HostListener('focus')
  public onFocus(): void {
    this.el.nativeElement.parentElement?.classList.add('focus');
  }

  @HostListener('blur', ['$event'])
  public onBlur(e: FocusEvent): void {
    const element = e.target as HTMLInputElement
    if (element.value === '')
      this.el.nativeElement.parentElement?.classList.remove('focus');
  }
}
