import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IProvince } from 'src/app/interfaces/province/iprovince';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  constructor(private http: HttpClient) { }

getAll(){
  return this.http.get(environment.APIurl +'api/province')
}
  
getProvinceByPage(page:number){
  return this.http.get<IProvince[]>(environment.APIurl + `api/province?page=${page}&size=20&sort=id,ASC`)
}

getProvinciaById(id:number) {
  return this.http.get<IProvince>(environment.APIurl + 'api/province/' + id)
}

deleteProvincia(province:IProvince){
  return this.http.delete(environment.APIurl +'api/province/' + province.id)
}

createProvincia(province:IProvince) {
  return this.http.post(environment.APIurl + 'api/province', province)
}

updateProvincia(province:IProvince){
  return this.http.put<IProvince>(environment.APIurl+ 'api/province/' + province.id, province)
}

}
