import { Heroi } from './../../models/herois/heroi';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class HeroisService {

  constructor(private http: HttpClient) { }

  public async listarHerois(){
    var value = this.http.get<Heroi[]>(`${API_PATH}Herois`);
    return await lastValueFrom(value);
  }
  
  public async listarHeroisPorId(id: number){
    var value = this.http.get<Heroi>(`${API_PATH}Herois/${id}`);
    return await lastValueFrom(value);
  }
  
}
