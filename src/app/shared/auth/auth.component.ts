import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { MedicineService } from 'src/app/Services/medicine.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  signUpForm: FormGroup;
  signInForm: FormGroup;

  signInObj = { email: '', password: '' };
  signUpObj = {
    Name: '',
    Email: '',
    Password: '',
    Age: null,
    Address: { government: '', city: '', street: '', building: '' },
  };

  constructor(
    private medicineService: MedicineService,
    private authService: AuthService,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      Name: new FormControl(null, [
        Validators.required,
        this.medicineService.stringInput.bind(this),
      ]),
      Email: new FormControl(null, [Validators.required, Validators.email]),
      Password: new FormControl(null, [Validators.required]),
      Age: new FormControl(null, [Validators.required]),

      government: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      street: new FormControl(null, [Validators.required]),
      building: new FormControl(null, [Validators.required]),
    });
    this.signInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSubmitLogin() {
    this.signInObj.email = this.signInForm.get('email').value;
    this.signInObj.password = this.signInForm.get('password').value;
    this.authService.login(this.signInObj).subscribe((Response) => {
      if (Response.data == 'Authorized')
        this.authService.authTokenSubject.next(Response.token);
    });
  }
  onSubmitSignUp() {
    this.signUpObj.Name = this.signUpForm.get('Name').value;
    this.signUpObj.Email = this.signUpForm.get('Email').value;
    this.signUpObj.Password = this.signUpForm.get('Password').value;
    this.signUpObj.Age = this.signUpForm.get('Age').value;
    this.signUpObj.Address.government = this.signUpForm.get('government').value;
    this.signUpObj.Address.city = this.signUpForm.get('city').value;
    this.signUpObj.Address.street = this.signUpForm.get('street').value;
    this.signUpObj.Address.building = this.signUpForm.get('building').value;
    this.authService.signUp(this.signUpObj).subscribe(
      (Response) => {
        console.log(Response);
      },
      (errorRes) => {
        if (errorRes.error.message.indexOf('Email_1 dup key') != -1)
          console.log('duplicated Email');
      }
    );
  }
  onModeChanges() {
    this.isLoginMode = !this.isLoginMode;
  }
}
