import { MyServiceService } from './../../my-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router,
    private myService: MyServiceService) {
    // console.log('in registration comp');
    this.gender = this.myService.gender;

  }

  gender;
  selected = ''
  registerForm!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      dob: ['', Validators.required],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      invitecode: ['', Validators.required],
      checkbox: ['', Validators.required],
    })
  }

  changegender(gender: string) {
  }

  get f() {
    /**returns the form credentials */
    return this.registerForm.controls;
  }

  submitForm(form: FormGroup) {
    // console.log(form);

  }

  login() {
    this.router.navigateByUrl('/register/login');
  }

}
