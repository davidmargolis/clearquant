import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GatesApiService } from './gates/gates-api.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatIconModule } from "@angular/material/icon";
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TopBarComponent } from './top-bar/top-bar.component';
import { EvaluationBarComponent } from './evaluation-bar/evaluation-bar.component';
import { EvaluationResultsComponent } from './evaluation-results/evaluation-results.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    EvaluationBarComponent,
    EvaluationResultsComponent,
  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    MatToolbarModule,
  ],
  providers: [GatesApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
