import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, User } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  public error = null;

  constructor( public router: Router, public fb: FormBuilder, public authService: AuthService ,
    private token: TokenService) { 
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.min(6)]],
      password_confirmation: ['', Validators.required]
    })
  }

  onSubmit(){
    const formValue = this.registerForm.value;
    const newUser = new User(
       formValue['name'],
       formValue['email'],
       formValue['password'],
       formValue['password_confirmation'],
    );
    this.authService.register(newUser).subscribe(
      result => { //console.log(result)
                  this.responseHandler(result); },
      error => this.handleError(error),
      () => {
        this.registerForm.reset()
        this.router.navigate(['profile']);
      },
      );
   }

  handleError(error:any){
    this.error = error.error?.email;
   
   }

  ngOnInit(): void {
  }

  responseHandler(data: any){
    this.token.handleData(data.access_token);
  }
}
