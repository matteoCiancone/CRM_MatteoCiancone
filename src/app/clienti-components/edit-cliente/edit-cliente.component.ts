import { Component, OnInit } from '@angular/core';
import { Clienti } from 'src/app/classes/clienti/clienti';
import { IClienti } from 'src/app/interfaces/clienti/iclienti';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientiService } from 'src/app/services/clienti/clienti.service';
import Swal from 'sweetalert2';
import { ProvinceService } from 'src/app/services/province/province.service';
import { ComuniService } from 'src/app/services/comuni/comuni.service';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { IComuni } from 'src/app/interfaces/comuni/icomuni';


@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {
  showOp:boolean=false
  showLg:boolean=false
  
  editCliente:IClienti = new Clienti
  

  province:IProvince[] = []
  comuni:IComuni[] = []
 


  constructor(private route: ActivatedRoute, private clientiService:ClientiService, private router:Router,
    private provinceService:ProvinceService,private comuniService:ComuniService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.clientiService.getClienteById(params['id']).subscribe(res =>{
        this.editCliente= res
      })
    })
    this.provinceService.getAll().subscribe((province:any) => {
      this.province = province.content
      console.log(this.province);
    })
    this.comuniService.getAll().subscribe((comuni:any) => {
      this.comuni = comuni.content
      console.log(this.comuni);
    })
   } 

  
   saveCliente(editCliente:IClienti) {



     this.clientiService.updateClienti(editCliente).subscribe(data => {
      Swal.fire(
        'Modifica riuscita!',
        'Hai modificato un cliente!',
        'success'
      )
      this.router.navigate(["clienteDetail", this.editCliente.id])
     })
   }
  
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

  back(){
    this.router.navigate(["clienteDetail", this.editCliente.id])
  }

}
