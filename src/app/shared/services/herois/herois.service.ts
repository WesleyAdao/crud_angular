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

  public async listar(){
    var value = this.http.get<Heroi[]>(`${API_PATH}Herois`);
    return await lastValueFrom(value);
  }
  
  public async listarPorId(id: number){
    var value = this.http.get<Heroi>(`${API_PATH}Herois/${id}`);
    return await lastValueFrom(value);
  }

  public async adicionar(heroi: Heroi) {
    var value = this.http.post<Heroi>(`${API_PATH}Herois`, heroi);
    return await lastValueFrom(value);
  }
  
  public async editar(heroi: Heroi) {
    var value = this.http.put<Heroi>(`${API_PATH}Herois/${heroi.id}`, heroi);
    return await lastValueFrom(value);
  }
  
}
