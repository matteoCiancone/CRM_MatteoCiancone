import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clienti } from 'src/app/classes/clienti/clienti';
import { Comuni } from 'src/app/classes/comuni/comuni';
import { Province } from 'src/app/classes/province/province';
import { Sede } from 'src/app/classes/sede/sede';
import { IClienti } from 'src/app/interfaces/clienti/iclienti';
import { IComuni } from 'src/app/interfaces/comuni/icomuni';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { Isede } from 'src/app/interfaces/sede/isede';

import { ClientiService } from 'src/app/services/clienti/clienti.service';
import { ComuniService } from 'src/app/services/comuni/comuni.service';
import { ProvinceService } from 'src/app/services/province/province.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {

  showOp:boolean=false
  showLg:boolean=false
  
  newCliente:IClienti = new Clienti();
  newSedeLg:Isede= new Sede
  newSedeOp:Isede = new Sede
  newComune:IComuni = new Comuni
  newProvincia:IProvince = new Province

  province:IProvince[] = []
  comuni:IComuni[] = []
  
  constructor(private clientiService:ClientiService ,private route : ActivatedRoute,
    private provinceService:ProvinceService, private comuniService:ComuniService) { }

  ngOnInit(): void {
      this.provinceService.getAll().subscribe((province:any) => {
        this.province = province.content
        console.log(this.province);
      })
      this.comuniService.getAll().subscribe((comuni:any) => {
        this.comuni = comuni.content
        console.log(this.comuni);
      })
  }


  //DISPLAY ELEMENTI
  showSedeOp(){
    if(this.showOp == false)
      this.showOp = true
    else
      this.showOp = false
  }

  showSedeLg(){
    if(this.showLg == false)
      this.showLg = true
    else
      this.showLg = false
  }

  cambioComune(){
    console.log(this.newCliente.indirizzoSedeOperativa);
    
  }


  addCliente(newCliente:IClienti) {

    //SEDE OPERATIVA
   /* this.newProvincia = this.newSedeOp.provincia
    this.newComune = this.newSedeOp.comune
    newCliente.indirizzoSedeOperativa= this.newSedeOp
    //SEDE LEGALE
    this.newProvincia = this.newSedeLg.provincia
    this.newComune = this.newSedeLg.comune
    newCliente.indirizzoSedeLegale= this.newSedeLg
    console.log(newCliente);*/
    
    
    this.clientiService.createCliente(newCliente).subscribe(res => Swal.fire(
      'Inserimento riuscito!',
      'Hai aggiunto un nuovo cliente!',
      'success'
    ))
    this.newCliente = new Clienti
  };



}
