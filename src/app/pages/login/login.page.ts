import { ResponseI } from './../../modelo/response.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemoviesdbService } from 'src/app/servicios/themoviesdb.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public LoginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  constructor(private router:Router, private themoviesdbService:ThemoviesdbService) { }

  ngOnInit() {
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if (localStorage.getItem("token")) {
     this.router.navigate(['home']);
    }
  }

  Login(Form:any){
    this.themoviesdbService.Login(Form).subscribe({
      next:(s) =>{        
        localStorage.setItem("token",s.token);
        localStorage.setItem("id_user",s.dataUser.id);
        this.router.navigate(['home']);
      },
      error:(err) =>{
        console.error(err);
      }
    });
  }

}
