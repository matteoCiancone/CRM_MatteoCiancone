import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFatture } from 'src/app/interfaces/fatture/ifatture';
import { FattureService } from 'src/app/services/fatture/fatture.service';

@Component({
  selector: 'app-fatture-detail',
  templateUrl: './fatture-detail.component.html',
  styleUrls: ['./fatture-detail.component.css']
})
export class FattureDetailComponent implements OnInit {

  fatturaDetail!:IFatture

  showFattura:boolean=true
  showCliente:boolean=false
  showOp:boolean=false
  showLg:boolean=false

  constructor(private fattureService:FattureService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.fattureService.getFatturaById(res['id']).subscribe(res => {
        this.fatturaDetail = res;
      })
    })
  }

  selectToEdit(){
    this.router.navigate(["editFatture", this.fatturaDetail.id])
  }



  //Display elementi

  displayFattura(){
    this.showFattura = true
    this.showCliente = false
    this.showLg = false
    this.showOp = false
  }
  displayCliente(){
    this.showCliente = true
    this.showLg = false
    this.showOp = false
    this.showFattura = false
  }
  displayLg(){
    this.showOp = true
    this.showCliente= false
    this.showLg = false
    this.showFattura = false
  }
  displayOp(){
    this.showLg = true
    this.showOp = false
    this.showCliente= false
    this.showFattura = false
  }

}
