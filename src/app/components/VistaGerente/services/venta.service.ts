import { Injectable } from '@angular/core';
import {Observable, of , throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { Router } from '@angular/router';
import {catchError,  map} from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Venta } from '../models/venta';
import { AuthService } from 'src/app/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
  private Url:string = 'http://localhost:8085/ventas';//endpoint
  constructor(private http: HttpClient, private router:Router,
    private authService: AuthService) { }
    private isNoAutorization(e): boolean{
      if(e.status==401 || e.status==403){
        this.router.navigate(['/login'])
        return true;
      }
      return false;
    }
    getVentas(id:number):Observable<any>{
      return this.http.get(this.Url+'/all/'+id);
    }
}
