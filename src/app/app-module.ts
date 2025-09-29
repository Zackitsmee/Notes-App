import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Notes } from './notes/notes/notes';
import { CreateNote } from './notes/create-note/create-note';
import { EditNote } from './notes/edit-note/edit-note';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    App,
    Notes,
    CreateNote,
    EditNote,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    AppRoutingModule,
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [App]
})
export class AppModule {}
