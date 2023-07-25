import { Component, HostBinding } from "@angular/core";

@Component({
  selector: 'ui-form-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.styles.scss']
})
export class FieldComponent {

  @HostBinding('class.focus')
  private _isFocus: boolean = false

}
