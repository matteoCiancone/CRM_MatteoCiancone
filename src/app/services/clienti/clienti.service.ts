import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IClienti } from 'src/app/interfaces/clienti/iclienti';
import { IFatture } from 'src/app/interfaces/fatture/ifatture';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(environment.APIurl +'api/clienti')
  }
  
  getPagedClienti(page: number){
    return this.http.get<IClienti[]>(environment.APIurl +`api/clienti?page=${page}&size=20&sort=id,ASC`)
  }

  deleteCliente(cliente:IClienti){
    return this.http.delete(environment.APIurl +'api/clienti/' + cliente.id)
  }

  createCliente(cliente:IClienti) {
    return this.http.post(environment.APIurl + 'api/clienti',cliente)
  }

  getClienteById(id:number) {
    return this.http.get<IClienti>(environment.APIurl + 'api/clienti/' + id)
  }

  getClienteIdperFattura(id:number) {
    return this.http.get<IFatture>(environment.APIurl + 'api/clienti/' + id)

  }

  updateClienti(clienti:IClienti){
    return this.http.put<IClienti>(environment.APIurl+ 'api/clienti/' + clienti.id, clienti)
  }


}
