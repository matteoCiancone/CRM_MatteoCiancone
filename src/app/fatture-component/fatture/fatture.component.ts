import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFatture } from 'src/app/interfaces/fatture/ifatture';
import { FattureService } from 'src/app/services/fatture/fatture.service';


@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {

  fatture: IFatture[] = [];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];
  filteredFatture:IFatture[] = [];
  _listFilter= '';


  constructor(private fattureService:FattureService, private router: Router, private route: ActivatedRoute) { 
    this.filteredFatture = this.fatture
    this.listFilter= '';
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fattureService.getFattureByPage(params["page"]).subscribe((fatture:any) => {
        this.fatture = fatture.content
        this.totalElements = fatture.totalElements
        this.filteredFatture = this.fatture
        this.size = fatture.size
        this.numberOfPages = (fatture.totalElements / fatture.size)
      for(let i = 0; i <= this.numberOfPages && i <=9 ; i++){
          console.log(i);
          this.pageNumbers.push(i);
        }
      });
    })
}



get listFilter(): string {
  return this._listFilter;
}
set listFilter(value: string) {
  this._listFilter = value;
  this.filteredFatture = this.listFilter ? this.doFilter(this.listFilter) : this.fatture;
}

doFilter(filterBy: string): IFatture[] {
filterBy = filterBy.toLocaleLowerCase();
 return this.fatture.filter((fatture: IFatture) =>
 fatture.cliente.ragioneSociale.toLocaleLowerCase().indexOf(filterBy) !== -1);
}


removeFattura(fatture:IFatture) {
  this.fattureService.deleteFattura(fatture).subscribe(res => {
    this.fatture = this.fatture.filter(fatture => fatture.id !== fatture.id) 
  });
}

fattureDetail(fatture:IFatture){
  this.router.navigate(['fattureDetail/', fatture.id])

}


}
