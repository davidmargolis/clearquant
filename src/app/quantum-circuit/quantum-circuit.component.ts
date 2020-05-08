import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { FormControl } from "@angular/forms";
import { QasmValidatorDirective } from "./qasm-validator.directive";
import QuantumCircuit from "quantum-circuit";

@Component({
  selector: "app-quantum-circuit",
  templateUrl: "./quantum-circuit.component.html",
  styleUrls: ["./quantum-circuit.component.scss"],
})
export class QuantumCircuitComponent implements OnInit {
  circuit: QuantumCircuit = new QuantumCircuit(0);
  textInput: FormControl = new FormControl(
    "",
    QasmValidatorDirective(this.circuit)
  );
  @ViewChild("drawing") drawing: ElementRef;

  constructor() {}

  ngOnInit() {
    this.textInput.valueChanges.subscribe((value) => {
      if (this.textInput.valid) {
        this.updateDrawing();
        this.circuit.run();
      }
    });
    this.updateExpressionBar();
  }

  update() {
    this.circuit.run();
    console.log("Measurements: " + JSON.stringify(this.circuit.measureAll()));
    this.updateDrawing();
    this.updateExpressionBar();
  }

  updateDrawing() {
    document.getElementById("drawing").innerHTML = this.circuit.exportSVG(
      document.getElementById("drawing")
    );
  }

  updateExpressionBar() {
    this.textInput.setValue(this.circuit.exportQASM());
  }
}
