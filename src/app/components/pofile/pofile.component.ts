import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

// User interface
export class User {
  constructor(
    public name: String,
    public email: String,
  ){}
}

@Component({
  selector: 'app-pofile',
  templateUrl: './pofile.component.html',
  styleUrls: ['./pofile.component.css']
})
export class PofileComponent implements OnInit {
  
  //UserProfile: User ;

  constructor( public authService: AuthService
) { 
  this.authService.profileUser().subscribe((data:any) => {
    //this.UserProfile = data;
  })
}

  ngOnInit(): void {
  }

}
