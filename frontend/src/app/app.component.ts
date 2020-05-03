import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {GatesApiService} from './gates/gates-api.service';
import {Gate} from './gates/gate.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  gatesListSubs: Subscription;
  gatesList: Gate[];

  constructor(private gatesApi: GatesApiService) {
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
