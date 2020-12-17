import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { VentaService } from '../services/venta.service';

@Component({
  selector: 'app-vistaventa',
  templateUrl: './vistaventa.component.html',
  styleUrls: ['./vistaventa.component.css']
})
export class VistaventaComponent implements OnInit {

  constructor(private ventaService:VentaService,
    private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.listarClientes();
  }
  tabla = 'No';
  activarTabla(){
    this.tabla = 'Si';
  }
  ventas:any;
  listar(id:number): void {
    this.ventaService.getVentas(id).subscribe(
      (data) => {
        this.ventas = data['cursor_v'];
        console.log("Ventas", this.ventas);
      }, (err) => {
        console.log("Error en el vistaventacomponent- listarventa")
      }
    )
  }
  clientes:any;
  listarClientes():void{
    this.clienteService.getClientes().subscribe(
      (data)=>{
        this.clientes = data['cursor_c'];
        console.log("Clientes", this.clientes);
      }, (err) => {
        console.log("Error en el vistaventacomponent- listarclientes")
      }
    )
  }
  idp:number;
}
