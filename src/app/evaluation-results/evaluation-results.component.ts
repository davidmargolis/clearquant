import { Component, OnInit } from '@angular/core';
import { QuantumCircuit } from 'quantum-circuit'

@Component({
  selector: 'app-evaluation-results',
  templateUrl: './evaluation-results.component.html',
  styleUrls: ['./evaluation-results.component.scss']
})
export class EvaluationResultsComponent implements OnInit {

  constructor() {
    var circuit = new QuantumCircuit(3);
    // circuit.addGate(gateName, column, wire);
    // circuit.addGate(gateName, column, arrayOfWires);
    circuit.addGate("h", 0, 1);
    circuit.addGate("cx", 1, [1, 2]);
    var svg = circuit.exportSVG(true);
    circuit.run();
   }

  ngOnInit(): void {
  }

  

}
