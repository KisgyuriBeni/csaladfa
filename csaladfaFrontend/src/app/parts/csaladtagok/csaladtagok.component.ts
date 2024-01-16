import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-csaladtagok',
  templateUrl: './csaladtagok.component.html',
  styleUrls: ['./csaladtagok.component.css']
})
export class CsaladtagokComponent {
  
  csaladtagok:any
  oszlopok=[
    {key:"nev", text:"Név"},
    {key:"szul_datum", text:"Születési dátum"},
    {key:"szul_hely", text:"Születési helye"},
    {key:"anyja_neve", text:"Anyja neve"},
    {key:"apja_neve", text:"Apja neve"},
    {key:"halal_hely", text:"Halál helye"},
    {key:"halal_datum", text:"Halál Dátuma"}
  ]

  constructor(public base:BaseService){

    this.base.getTagok('csaladtagok').subscribe(
      (adatok)=>{
        console.log(adatok),
        this.csaladtagok=adatok
      })

  }

}
