import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TopBarComponent } from './top-bar/top-bar.component';
import { EvaluationBarComponent } from './evaluation-bar/evaluation-bar.component';
import { EvaluationResultsComponent } from './evaluation-results/evaluation-results.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    EvaluationBarComponent,
    EvaluationResultsComponent,
    FooterComponent,
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
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatRippleModule,
    MatToolbarModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
