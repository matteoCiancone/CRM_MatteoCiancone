import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clienti } from 'src/app/classes/clienti/clienti';
import { Fatture } from 'src/app/classes/fatture/fatture';
import { StatoFattura } from 'src/app/classes/stato-fattura/stato-fattura';
import { IClienti } from 'src/app/interfaces/clienti/iclienti';
import { IFatture } from 'src/app/interfaces/fatture/ifatture';
import { ClientiService } from 'src/app/services/clienti/clienti.service';
import { FattureService } from 'src/app/services/fatture/fatture.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-fatture',
  templateUrl: './add-fatture.component.html',
  styleUrls: ['./add-fatture.component.css']
})
export class AddFattureComponent implements OnInit {
  
  statoFattura:StatoFattura [] =[]
  newFattura:Fatture = new Fatture
  
  clientiFattura:Clienti = new Clienti
  
  
  constructor(private fattureService:FattureService,private clientiService:ClientiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.clientiService.getClienteById(params['id']).subscribe(res =>{
        this.clientiFattura= res
        console.log(this.clientiFattura);
        
      })
    })
    this.fattureService.getStatoFattura().subscribe((statoFattura:any) => {
      this.statoFattura = statoFattura.content
      console.log(this.statoFattura);
    })
  }

  saveFattura(newFattura:Fatture){
    
  newFattura.cliente = this.clientiFattura

  this.fattureService.createFattura(newFattura).subscribe(res =>Swal.fire(
    'Inserimento riuscito!',
    'Hai aggiunto una nuova fattura!',
    'success'
    ))
    this.newFattura = new Fatture
  }

}
