import { Component, OnInit } from '@angular/core';
import { ThemoviesdbService } from '../servicios/themoviesdb.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private themoviesdbService:ThemoviesdbService) {}

  public carteleras:any;

  ngOnInit(): void {
    this.GetAllBillboards();
  }

  GetAllBillboards(){
    this.themoviesdbService.GetAllBillboards().subscribe({
      next:(s) =>{
        this.carteleras = s;
      }, 
      error: (err) =>{
        debugger;
      }
    })
  }
}
