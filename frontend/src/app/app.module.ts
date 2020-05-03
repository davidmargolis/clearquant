import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GatesApiService } from './gates/gates-api.service';


import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from "@angular/material/icon";
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TopBarComponent } from './top-bar/top-bar.component';
import { EquationEditorComponent } from './equation-editor/equation-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    EquationEditorComponent,
  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragDropModule,
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
