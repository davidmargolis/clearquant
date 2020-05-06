import { Component, Input, OnInit } from '@angular/core';
import QuantumCircuit from 'quantum-circuit'
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-evaluation-results',
  templateUrl: './evaluation-results.component.html',
  styleUrls: ['./evaluation-results.component.scss']
})
export class EvaluationResultsComponent implements OnInit {
  public drawing;

  @Input()
  set circuit(value: QuantumCircuit) {
    if (value !== undefined) {
      alert('you submitted value: ' + Object.keys(value));
      this.drawing = value.exportSVG(true);  
    }
  }

  constructor() {
   }

  ngOnInit(): void {
  }

}
