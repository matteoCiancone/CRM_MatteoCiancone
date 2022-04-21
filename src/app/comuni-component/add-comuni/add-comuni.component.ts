import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comuni } from 'src/app/classes/comuni/comuni';
import { IComuni } from 'src/app/interfaces/comuni/icomuni';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { ComuniService } from 'src/app/services/comuni/comuni.service';
import { ProvinceService } from 'src/app/services/province/province.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-comuni',
  templateUrl: './add-comuni.component.html',
  styleUrls: ['./add-comuni.component.css']
})
export class AddComuniComponent implements OnInit {

  newComune:IComuni = new Comuni
  province:IProvince[] = []

  constructor(private comuniService:ComuniService,private route: ActivatedRoute, private provinceService:ProvinceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.provinceService.getProvinceByPage(params ["page"]).subscribe((province:any) => {
        this.province = province.content
        console.log(this.province);
      })
    })

}

  addComune(newComune:IComuni) {
    this.comuniService.createComune(newComune).subscribe(res =>Swal.fire(
      'Inserimento riuscito!',
      'Hai aggiunto un nuovo comune!',
      'success'
    ))
    this.newComune = new Comuni
  }


}
