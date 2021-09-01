import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Ropa {
  _id: string;
  tipo: string;
  cantidad: number;
  precio: number;
  descripcion: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  public Ropas!: Ropa[];
  private ropasURL = 'http://localhost:3000/api/clothing';

  constructor(private http: HttpClient) {}

  getAllRopasfromAPI(): Observable<any> {
    return this.http.get(this.ropasURL);
  }
  
  getRopaById(id: string): Observable<any> {
    return this.http.get(`${this.ropasURL}${id}`);
  }
  
  addRopafromAPI(
    tipo: string,
    cantidad: number,
    precio: number,
    descripcion: string
  ): Observable<any> {
    const bodyProducto = {tipo,cantidad,precio,descripcion};
    return this.http.post(this.ropasURL, bodyProducto);
  }
}