import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import QuantumCircuit from 'quantum-circuit'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  circuit: QuantumCircuit;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
      this.matIconRegistry.addSvgIcon(
        `clearquant-logo`,
        this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/clearquant-logo.svg"));
    }

    onInputEvaluated(circuit: QuantumCircuit): void {
      this.circuit = circuit;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
