import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
      this.matIconRegistry.addSvgIcon(
        `clearquant-logo`,
        this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/img/clearquant-logo.svg"));
    }

  onEvaluate(value: any): void {
    alert('you submitted value: ' + Object.keys(value));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
