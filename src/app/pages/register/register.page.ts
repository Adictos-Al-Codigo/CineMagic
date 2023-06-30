import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemoviesdbService } from 'src/app/servicios/themoviesdb.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public _Form = new FormGroup({
    user : new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    typeusers_id : new FormControl('',Validators.required)
  })
  constructor(private themoviesdbService:ThemoviesdbService,private router:Router) { }

  ngOnInit() {
  }

  Registro(Form:any){
    this.themoviesdbService.Registration(Form).subscribe({
      next: (s) =>{
        console.log(s);
        this.router.navigate(['login']);
      },
      error: (err) =>{
        console.error(err);
      }
    })
  }

}
