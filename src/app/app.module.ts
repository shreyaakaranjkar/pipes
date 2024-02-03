import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { FileSize } from './pipes/filesize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    FileSize
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
