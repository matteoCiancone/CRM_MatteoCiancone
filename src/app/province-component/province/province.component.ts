import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { ProvinceService } from 'src/app/services/province/province.service';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {

  province: IProvince[] = [];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];
  constructor(private provinceService:ProvinceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.provinceService.getProvinceByPage(params["page"]).subscribe((province:any) => {
        this.province = province.content
        this.totalElements = province.totalElements
        this.size = province.size
        this.numberOfPages = (province.totalElements / province.size)
      for(let i = 0; i <= this.numberOfPages; i++){
          console.log(i);
          this.pageNumbers.push(i);
        }
      });
    })
}


removeProvincia(province:IProvince) {
  this.provinceService.deleteProvincia(province).subscribe(res => {
    this.province = this.province.filter(province => province.id !== province.id) 
  });
}


selectProvincia(item:IProvince){
  this.router.navigate(["editProvincia", item.id])

}

}
