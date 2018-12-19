import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

function mustBeginByA(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (!/^[aA]/.test(control.value)) {
      return { 'mustStartWithA': { value: control.value } };
    }
    return null;
  };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  beforeSubmit = true;

  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required, mustBeginByA()]),
    password: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit() {
  }

  goBack() {
    this.beforeSubmit = true;
  }

  onSubmit() {
    this.beforeSubmit = false;
  }

}
