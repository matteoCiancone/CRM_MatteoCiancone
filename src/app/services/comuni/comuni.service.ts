import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IComuni } from 'src/app/interfaces/comuni/icomuni';
import { Comuni } from 'src/app/classes/comuni/comuni';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Comuni[]>(environment.APIurl +'api/comuni')
  }

  getComuniByPage(page:number) {
    return this.http.get<IComuni[]>(environment.APIurl + `api/comuni?page=${page}&size=20&sort=id,ASC`)
  }

  getComuniById(id:number) {
    return this.http.get<IComuni>(environment.APIurl +'api/comuni/' + id)
  }


  deleteComune(comuni:IComuni){
    return this.http.delete(environment.APIurl +'api/comuni/' + comuni.id)
  }

  createComune(comuni:IComuni) {
    return this.http.post(environment.APIurl + 'api/comuni', comuni)
  }

  updateComuni(comuni:IComuni){
    return this.http.put<IComuni>(environment.APIurl+ 'api/comuni/' + comuni.id, comuni)
  }




}
