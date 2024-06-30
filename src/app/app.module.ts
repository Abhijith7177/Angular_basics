import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteService } from './services/note.service';

@NgModule({
  declarations: [AppComponent, NoteFormComponent, NoteListComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule],
  providers: [NoteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
