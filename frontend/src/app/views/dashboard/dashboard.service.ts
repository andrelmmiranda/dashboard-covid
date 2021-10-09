import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService{
  private dados = [];

  constructor(private http: HttpClient) { }

  // deObjetoParaArray(){
  //   this.listaObjetos = this.listarDados()
  //   this.listaArray = this.listaObjetos.map(item=><[number, string]>Object.values(item))
  //   return this.listaArray;
  // }

  getData(): Observable<any> {
		return new Observable(observable => {
			observable.next(this.dados);
			observable.complete();
		});
	}
}
