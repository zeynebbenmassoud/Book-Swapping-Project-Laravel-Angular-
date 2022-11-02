import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  resetForm: FormGroup;
  errors = null;
  //successMsg :any;
  
  
  constructor(public authService: AuthService, public fb: FormBuilder) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    }) }

  ngOnInit(): void {}

  onSubmit(){
     this.authService.sendPasswordResetLink(this.resetForm.value).subscribe(
      (data) => console.log(data),
      (error)=> console.log(error)
    );
      }
    //  (result) => { this.successMsg = result; },
    //  (error)=> {this.errors = error.error.message;

}
