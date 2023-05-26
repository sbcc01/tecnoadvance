import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  formRegister: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]],
    });

    this.formRegister = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  saveLogin() {
    if (this.formLogin.valid) {
      let formData = new FormData();
      formData.append('email', this.formLogin.get('email')!.value);
      formData.append('password', this.formLogin.get('password')!.value);
    }
  }

  saveRegister() {
    if (this.formRegister.valid) {
      let formData = new FormData();
      formData.append('name', this.formRegister.get('name')!.value);
      formData.append('phone', this.formRegister.get('phone')!.value);
      formData.append('email', this.formRegister.get('email')!.value);
      formData.append('password', this.formRegister.get('password')!.value);
    }
  }
}
