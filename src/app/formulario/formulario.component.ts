import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  // @Output() personaCreada = new EventEmitter<Persona>();

  // nombreInput: string = "";
  // apellidoInput: string = "";
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService
  ) {}

  ngOnInit(): void {}

  agregarPersona() {
    if (
      !(
        this.nombreInput.nativeElement.value == '' ||
        this.apellidoInput.nativeElement.value == ''
      )
    ) {
      // this.personas.push(new Persona(this.nombreInput, this.apellidoInput));
      let persona1 = new Persona(
        this.nombreInput.nativeElement.value,
        this.apellidoInput.nativeElement.value
      );
      this.personasService.agregarPersona(persona1);
      // this.loggingService.enviarMensajeAConsola("Enviamos persona con nombre: " + persona1.nombre + " apellido: " + persona1.apellido);
      // this.personaCreada.emit(persona1);
      this.nombreInput.nativeElement.value = '';
      this.apellidoInput.nativeElement.value = '';
    } else {
      alert('Llene los campos');
    }
  }
}
