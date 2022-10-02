import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['leinerdev@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
    });
  }

  login() {
    const { email, password } = this.loginForm.value;
    if (email === 'leinerdev@gmail.com' && password === '123456') {
      this.router.navigateByUrl('/dashboard');
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'El usuario no se encuentra registrado en el sistema',
        icon: 'error',
      });
    }
  }
}
