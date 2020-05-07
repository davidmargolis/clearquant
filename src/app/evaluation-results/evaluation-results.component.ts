import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import QuantumCircuit from 'quantum-circuit';

@Component({
  selector: 'app-evaluation-results',
  templateUrl: './evaluation-results.component.html',
  styleUrls: ['./evaluation-results.component.scss']
})
export class EvaluationResultsComponent implements OnInit {
   _circuit: QuantumCircuit;
  @Input()
  set circuit(value: QuantumCircuit) {
    alert(value.numQubits);
    this._circuit = value;
    this.updateDrawing();
  }
  get circuit(): QuantumCircuit {
    return this._circuit;
  }
  @Output() circuitUpdated: EventEmitter<QuantumCircuit> = new EventEmitter<QuantumCircuit>();


  constructor() {
  }

  ngOnInit(): void {
  }

  updateDrawing() {
    document.getElementById("drawing").innerHTML = this._circuit.exportSVG(true);
  }

}
