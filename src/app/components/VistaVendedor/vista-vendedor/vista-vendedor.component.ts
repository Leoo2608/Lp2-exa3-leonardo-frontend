import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-vendedor',
  templateUrl: './vista-vendedor.component.html',
  styleUrls: ['./vista-vendedor.component.css']
})
export class VistaVendedorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clientes:any;
  
  ventas:any;
  listar(id:number):void{

  }
}
