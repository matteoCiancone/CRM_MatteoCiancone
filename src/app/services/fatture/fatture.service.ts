import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IFatture } from 'src/app/interfaces/fatture/ifatture';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  constructor(private http: HttpClient) { }

  getFattureByPage(page:number) {
    return this.http.get<IFatture[]>(environment.APIurl + `api/fatture?page=${page}&size=20&sort=id,ASC`)
  }

  getFatturaById(id:number) {
    return this.http.get<IFatture>(environment.APIurl + 'api/fatture/' + id)
  }

  deleteFattura(fatture:IFatture){
    return this.http.delete(environment.APIurl +'api/fatture/' + fatture.id)
  }

  updateFatture(fatture:IFatture){
    return this.http.put<IFatture>(environment.APIurl+ 'api/fatture/' + fatture.id, fatture)
  }

  getByCliente(id:number){
    return this.http.get<IFatture>(environment.APIurl + `/api/fatture/cliente/${id}?page=0&size=20&sort=id,ASC`)
  }

  createFattura(fatture:IFatture) {
    return this.http.post(environment.APIurl + 'api/fatture', fatture)
  }

  getStatoFattura(){
    return this.http.get(environment.APIurl +'api/statifattura')
  }


}
