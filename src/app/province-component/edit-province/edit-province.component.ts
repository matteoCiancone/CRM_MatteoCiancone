import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Province } from 'src/app/classes/province/province';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { ProvinceService } from 'src/app/services/province/province.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-province',
  templateUrl: './edit-province.component.html',
  styleUrls: ['./edit-province.component.css']
})
export class EditProvinceComponent implements OnInit {

  editProvince:IProvince = new Province

  constructor(private route: ActivatedRoute,private provinceService:ProvinceService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(res =>{
      this.provinceService.getProvinciaById(res['id']).subscribe(res =>{
        this.editProvince= res
      })
    })
   } 

   saveProvincia(editProvince:Province) {
    this.provinceService.updateProvincia(editProvince).subscribe(data => {
     Swal.fire(
       'Modifica riuscita!',
       'Hai modificato una provincia!',
       'success'
     )
     this.router.navigate(["province/page/:page"])
    })
  }
  
  back(){
    this.router.navigate(["province/page/:page"])
  }

}
