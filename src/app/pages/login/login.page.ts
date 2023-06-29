import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public LoginForm = new FormGroup({
    user: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Login(Form:any){
    this.router.navigate(['home']);
  }

}
