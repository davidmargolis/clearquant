import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { GatesApiService } from './gates/gates-api.service';
import { Gate } from './gates/gate.model';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  gatesListSubs: Subscription;
  gatesList: Gate[];

  constructor(
    private gatesApi: GatesApiService, 
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
      this.matIconRegistry.addSvgIcon(
        `clearquant-logo`,
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/clearquant-logo.svg"));
    }

  onEvaluate(value: any): void {
    alert('you submitted value: ' + Object.keys(value));
  }

  ngOnInit() {
    this.gatesListSubs = this.gatesApi
      .getGates()
      .subscribe(res => {
          this.gatesList = res;
        },
        console.error
      );
  }

  ngOnDestroy() {
    this.gatesListSubs.unsubscribe();
  }
}
