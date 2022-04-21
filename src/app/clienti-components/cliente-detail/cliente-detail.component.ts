import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from 'src/app/classes/clienti/clienti';
import { IClienti } from 'src/app/interfaces/clienti/iclienti';
import { IComuni } from 'src/app/interfaces/comuni/icomuni';
import { ClientiService } from 'src/app/services/clienti/clienti.service';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

  showCliente:boolean=true
  showOp:boolean=false
  showLg:boolean=false


  clienteDetail!:Clienti

  constructor(private clienteService:ClientiService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.clienteService.getClienteById(res['id']).subscribe(res => {
        this.clienteDetail = res;
      })
    })
 
  }

  selectToEdit(){
    this.router.navigate(["editClienti", this.clienteDetail.id])
  }

  addFattura(){
    this.router.navigate(["addFatture", this.clienteDetail.id])
 
  }



  //DISPLAY ELEMENTI

  displayCliente(){
    this.showCliente = true
    this.showLg = false
    this.showOp = false
  }
  displayLg(){
    this.showOp = true
    this.showCliente= false
    this.showLg = false
  }
  displayOp(){
    this.showLg = true
    this.showOp = false
    this.showCliente= false
  }

}
