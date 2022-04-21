import { Component, OnInit } from '@angular/core';
import { Clienti } from 'src/app/classes/clienti/clienti';
import { IClienti } from 'src/app/interfaces/clienti/iclienti';
import { ClientiService } from 'src/app/services/clienti/clienti.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})


export class ClientiComponent implements OnInit {
  clienti: IClienti[] = [];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];
  filteredClienti:IClienti[] = [];
  _listFilter= '';

  constructor(private clientiService: ClientiService, private router: Router, private route: ActivatedRoute) {
    this.filteredClienti = this.clienti
    this.listFilter= '';
    
  }

  ngOnInit(): void {
    this.getPage()
  }


  getPage(){
  this.route.params.subscribe(params => {
        this.clientiService.getPagedClienti(params["page"]).subscribe((clienti:any) => {
          this.clienti = clienti.content
          this.filteredClienti = this.clienti
          this.totalElements = clienti.totalElements
          this.size = clienti.size
          this.numberOfPages = (clienti.totalElements / clienti.size)
        for(let i = 0; i <= this.numberOfPages; i++){
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
    this.filteredClienti = this.listFilter ? this.doFilter(this.listFilter) : this.clienti;
 }

 doFilter(filterBy: string): IClienti[] {
   filterBy = filterBy.toLocaleLowerCase();
   return this.clienti.filter((clienti: IClienti) =>
     clienti.nomeContatto.toLocaleLowerCase().indexOf(filterBy) !== -1);
}
 

 removeCliente(cliente:IClienti) {
   this.clientiService.deleteCliente(cliente).subscribe(res => {
     this.clienti = this.filteredClienti.filter(cliente => cliente.id !== cliente.id) 
   });
 }



clienteDetail(cliente:IClienti){
  this.router.navigate(['clienteDetail/', cliente.id])
};





}

