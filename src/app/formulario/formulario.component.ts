import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() personaCreada = new EventEmitter<Persona>();

  // nombreInput: string = "";
  // apellidoInput: string = "";
  @ViewChild("nombreInput") nombreInput: ElementRef;
  @ViewChild("apellidoInput") apellidoInput: ElementRef;

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
      
  }

  agregarPersona() {
    if(!(this.nombreInput.nativeElement.value == "" || this.apellidoInput.nativeElement.value == "")) {
      // this.personas.push(new Persona(this.nombreInput, this.apellidoInput));
      let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
      this.loggingService.enviarMensajeAConsola("Enviamos persona con nombre: " + persona1.nombre + " apellido: " + persona1.apellido);
      this.personaCreada.emit(persona1);
      this.nombreInput.nativeElement.value = "";
      this.apellidoInput.nativeElement.value = "";
    } else {
      alert("Llene los campos");
    }
  }

}
