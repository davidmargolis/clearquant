import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import QuantumCircuit from 'quantum-circuit'

@Component({
  selector: 'app-evaluation-bar',
  templateUrl: './evaluation-bar.component.html',
  styleUrls: ['./evaluation-bar.component.scss'],
})
export class EvaluationBarComponent implements OnInit {
  stateForm: FormGroup = this._formBuilder.group({
    state: '',
  });
   _circuit: QuantumCircuit;
  @Input()
  set circuit(value: QuantumCircuit) {
    this._circuit = value;
  }
  get circuit(): QuantumCircuit {
    return this._circuit;
  }
  @Output() circuitUpdated: EventEmitter<QuantumCircuit> = new EventEmitter<QuantumCircuit>();

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() { }

  onSubmit(value: any): void {
    // var circuit = new QuantumCircuit(3);

    // QuantumCircuit.prototype.importQuil = function(quil, errorCallback, options, qubitNames, renamedGates, lineOffset)
    // QuantumCircuit.prototype.importQobj = function(qobj, errorCallback)
    // QuantumCircuit.prototype.importQASM = function(input, errorCallback)
    this.circuit.init();
    this.circuit.addGate("h",  0, 0);
    this.circuit.addGate("cx", 1, [0, 1]);
    this.circuit.run([0, 0]);

    // circuit.importQASM("OPENQASM 2.0;\ninclude \"qelib1.inc\";\n\nqreg q[5];\ncreg c[5];\n\nx q[4];\nh q[3];\nh q[4];\ncx q[3],q[4];\nh q[3];\nmeasure q[3] -> c[3];\n", function (errors) {
    //   console.log(errors);
    // });

    this.circuitUpdated.emit(this.circuit);
  }

}
