import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  formRegister: FormGroup  = new FormGroup({});

  selectedForm: string = 'login'; // aparesca login por defecto

  selectForm(form: string) {
    this.selectedForm = form;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.formRegister = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitLogin() {
    if (this.formLogin.valid) {
      const formData = this.formLogin.value;
      // Se debe implementar la funcion para que se lleve acabo el login
      console.log('Ingresar:', formData);
    }
  }

  submitRegistration() {
    if (this.formRegister.valid) {
      const formData = this.formRegister.value;
      // Codigo para que los datos se almacenen en la base de datos
      console.log('Registrarse:', formData);
    }
  }
}