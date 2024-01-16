import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-ujtagok',
  templateUrl: './ujtagok.component.html',
  styleUrls: ['./ujtagok.component.css']
})
export class UjtagokComponent {
  tag:any={}

  constructor(public base:BaseService, public router:Router){
    
  }
 
  kuldApi(){
    this.base.addTagok(this.tag).subscribe(
    {
      next:()=> this.router.navigate(['/csaladtagok']),
      error:(e)=>console.log(e)
    }
    )
  }
}
