import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(15)]],
      last_name: ['', [Validators.required, Validators.maxLength(15)]],
      phone_number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]],
      email: ['', [Validators.required, Validators.email]],
      id_number: ['', [Validators.required], Validators.minLength(6), Validators.maxLength(10)],
      password: ['', [Validators.required]],
      re_password: ['', [Validators.required]],
    })
  }

  register() {
    console.log(this.registerForm.value);
  }

}
