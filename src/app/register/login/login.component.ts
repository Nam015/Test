import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    // console.log('in login');
  }


  loginForm!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      checkbox: ['', Validators.required],
    })
  }

  submitForm(form: FormGroup) {

  }

  forgotPass() {

  }

  get f() {
    /**returns the form credentials */
    return this.loginForm.controls;
  }

}
