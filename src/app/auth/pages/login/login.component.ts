import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginPageComponent {

  public form = new FormGroup({
    login: new FormControl('hello world'),
    password: new FormControl(''),
  });

  public handleOnSubmit(e: SubmitEvent): void {
    e.preventDefault()
    console.log(this.form.getRawValue())
  }
}
