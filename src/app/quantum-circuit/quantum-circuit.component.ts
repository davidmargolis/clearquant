import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QasmValidatorDirective } from './qasm-validator.directive';
import QuantumCircuit from 'quantum-circuit';

@Component({
  selector: 'app-quantum-circuit',
  templateUrl: './quantum-circuit.component.html',
  styleUrls: ['./quantum-circuit.component.scss']
})
export class QuantumCircuitComponent implements OnInit {
  circuit = new QuantumCircuit();
  textInput = new FormControl('', QasmValidatorDirective(this.circuit));

  parseErrors = [];
  submitted = false;

  constructor() { }

  ngOnInit() {
    this.update();
  }

  onSubmit(value: string) {
    this.circuit.importQASM(value, function (errors) {
      console.log(errors);
    });
    this.updateDrawing();
  }

  update() {
    this.updateDrawing();
    this.updateExpressionBar();
  }

  updateDrawing() {
    document.getElementById("drawing").innerHTML = this.circuit.exportSVG(true);
  }

  updateExpressionBar() {
    this.textInput.setValue(this.circuit.exportQASM());    
  }

  // QuantumCircuit.prototype.exportQASM = function(comment, decompose, exportAsGateName, circuitReplacement, compatibilityMode, insideSubmodule)
  saveCircuit(comment: string) {
    this.circuit.exportQASM(name);
  }

}
