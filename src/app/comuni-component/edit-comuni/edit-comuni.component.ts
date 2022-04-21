import { Component, OnInit } from '@angular/core';
import { Comuni } from 'src/app/classes/comuni/comuni';
import { Province } from 'src/app/classes/province/province';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { IComuni } from 'src/app/interfaces/comuni/icomuni';
import { ActivatedRoute, Router } from '@angular/router';
import { ComuniService } from 'src/app/services/comuni/comuni.service';
import { Observable } from 'rxjs';
import { ProvinceService } from 'src/app/services/province/province.service';
import { IClienti } from 'src/app/interfaces/clienti/iclienti';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-comuni',
  templateUrl: './edit-comuni.component.html',
  styleUrls: ['./edit-comuni.component.css']
})
export class EditComuniComponent implements OnInit {
 
  editComuni:IComuni = new Comuni
  province:IProvince[]=[]

  constructor(private router: Router, private comuniService:ComuniService,
    private provinceService:ProvinceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.comuniService.getComuniById(params['id']).subscribe(res =>{
        this.editComuni= res
        console.log(this.editComuni);
        
      })
    })
    this.provinceService.getAll().subscribe((province:any) => {
      this.province = province.content
      console.log(this.province);
    })
   } 
  


   saveComune(editComune:Comuni) {
     this.comuniService.updateComuni(editComune).subscribe(data => {
      Swal.fire(
        'Modifica riuscita!',
        'Hai modificato un cliente!',
        'success'
      )
      this.router.navigate(["comuni/page/:page"])
     })
   }
   back(){
    this.router.navigate(["comuni/page/:page"])
 
   }
}
