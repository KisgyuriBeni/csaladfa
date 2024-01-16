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

  constructor(public base:BaseService){

    this.base.getTagok('csaladtagok').subscribe(
      (adatok)=>{
        console.log(adatok),
        this.csaladtagok=adatok
      })

  }

}
