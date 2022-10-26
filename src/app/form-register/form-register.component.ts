import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {
  registerForm: FormGroup | any;
  pwGroup: FormGroup | any;
  profileGroup: FormGroup | any;
  countries = ['Việt Nam', 'Nhật Bản', 'Mỹ', 'Hàn Quốc']

  constructor() {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pwGroup: this.pwGroup = new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
      }, comparePassword),
      profile: this.profileGroup = new FormGroup({
        country: new FormControl('', Validators.required),
        age: new FormControl('', [Validators.required, Validators.min(18)]),
        gender: new FormControl('', Validators.required),
        phone: new FormControl('', [Validators.required, Validators.pattern("^\\+84\\d{9,10}$")])
      })
    })
  }

  submit() {
    this.registerForm.patchValue({
      email: 'info@example.com'
    });
  }
}

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {passwordnotmatch: true}
}
