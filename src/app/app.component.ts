import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import QuantumCircuit from 'quantum-circuit'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
   _circuit: QuantumCircuit;
  @Input()
  set circuit(value: QuantumCircuit) {
    this._circuit = value;
  }
  get circuit(): QuantumCircuit {
    return this._circuit;
  }
  @Output() needToUpdateExpressionBar: EventEmitter<QuantumCircuit> = new EventEmitter<QuantumCircuit>();
  @Output() needToUpdateDrawing: EventEmitter<QuantumCircuit> = new EventEmitter<QuantumCircuit>();

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
      this.matIconRegistry.addSvgIcon(
        `clearquant-logo`,
        this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/clearquant-logo.svg"));
        this.circuit = new QuantumCircuit();
    }

    onCircuitUpdatedByExpressionBar(value: QuantumCircuit): void {
      this.circuit = value;
      this.needToUpdateDrawing.emit(value);
    }

    onCircuitUpdatedByDrawing(value: QuantumCircuit): void {
      this.circuit = value;
      this.needToUpdateExpressionBar.emit(value);
    }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
