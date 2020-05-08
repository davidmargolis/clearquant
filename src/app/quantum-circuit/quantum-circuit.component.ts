import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { QasmValidatorDirective } from "./qasm-validator.directive";
import { DownloaderService } from "./../downloader.service";
import QuantumCircuit from "quantum-circuit";

const EXAMPLE_CIRCUITS_LINK: string =
  "https://raw.githubusercontent.com/Qiskit/openqasm/master/examples/";

export class CircuitRef {
  constructor(name: string, description: string, type: string) {
    this.name = name;
    this.description = description;
    this.href = EXAMPLE_CIRCUITS_LINK + type + "/" + name + ".qasm";
  }

  name: string;
  description: string;
  href: string;
}

@Component({
  providers: [DownloaderService],
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
  exampleCircuits: CircuitRef[] = [
    new CircuitRef("adder", "Adds two four-bit numbers.", "generic"),
    new CircuitRef(
      "bigadder",
      "Quantum ripple-carry adder. 8-bit adder made out of 2 4-bit adders from adder.qasm.",
      "generic"
    ),
    new CircuitRef(
      "inverseqft1",
      "Inverse quantum Fourier transform using 4 qubits.",
      "generic"
    ),
    new CircuitRef(
      "inverseqft2",
      "Another version of the inverse quantum Fourier transform using 4 qubits.",
      "generic"
    ),
    new CircuitRef(
      "ipea_3_pi_8",
      "4-bit Iterative Phase Estimation algorithm for phase 3pi/8 using two qubits.ss",
      "generic"
    ),
    new CircuitRef(
      "pea_3_pi_8",
      "4-bit Phase Estimation algorithm for a phase 3pi/8 using 5 qubits.",
      "generic"
    ),
    new CircuitRef(
      "qec",
      "Repetition code to correct quantum errors.",
      "generic"
    ),
    new CircuitRef("qft", "Quantum Fourier transform on 4 qubits.", "generic"),
    new CircuitRef("qpt", "Quantum Process Tomography example.", "generic"),
    new CircuitRef(
      "rb",
      "Example of a single instance of two-qubits randomized benchmarking.",
      "generic"
    ),
    new CircuitRef("teleport", "Quantum Teleportation example.", "generic"),
    new CircuitRef(
      "teleportv2",
      "Quantum Teleportation example (one classical register).",
      "generic"
    ),
    new CircuitRef(
      "W-state",
      "Generating a 3-qubit W-state using Toffoli gates.",
      "generic"
    ),
    new CircuitRef(
      "Deutsch_Algorithm",
      "A two-qubit example of Deutsch to determine whether a function is constant (in which case the algorithm returns 0) or balanced (returns 1). In this example the algorithm looks at the function f(x) = x, which is balanced.",
      "ibmqx2"
    ),
  ];

  constructor(private downloaderService: DownloaderService) {}

  ngOnInit() {
    this.textInput.valueChanges.subscribe((value) => {
      if (this.textInput.valid) {
        this.updateDrawing();
        this.circuit.run();
      }
    });
    this.updateExpressionBar();
  }

  onExampleCircuitClick(href: string) {
    this.downloaderService
      .getTextFile(href)
      .subscribe((results) => this.textInput.setValue(results));
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
