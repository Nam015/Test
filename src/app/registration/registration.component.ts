import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }


  registerForm!: FormGroup;

  ngOnInit(): void {
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

  get f() {
    /**returns the form credentials */
    return this.registerForm.controls;
  }

}
