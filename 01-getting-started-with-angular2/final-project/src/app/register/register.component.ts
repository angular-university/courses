import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {


  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
      confirm: ['',Validators.required]
    });
  }


  signUp() {

  }

  isPasswordMatch() {
    const val = this.form.value;
    return val && val.password && val.password == val.confirm;
  }

}
