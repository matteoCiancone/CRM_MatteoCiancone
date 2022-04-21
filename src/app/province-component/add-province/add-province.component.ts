import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Province } from 'src/app/classes/province/province';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { ProvinceService } from 'src/app/services/province/province.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-province',
  templateUrl: './add-province.component.html',
  styleUrls: ['./add-province.component.css']
})
export class AddProvinceComponent implements OnInit {
 
 
  newProvince:IProvince = new Province
  province:IProvince[] = []
  
  constructor(private provinceService:ProvinceService,private route: ActivatedRoute,) { }

  ngOnInit(): void {
   
}

addProvince(newProvince:IProvince) {
  this.provinceService.createProvincia(newProvince).subscribe(res =>
    Swal.fire(
      'Inserimento riuscito!',
      'Hai aggiunto una nuova provincia!',
      'success'
    ))
    this.newProvince = new Province
}

}
