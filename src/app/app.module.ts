import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';

import { WordReducer } from './store/reducers/word.reducer';

import { AppComponent } from './app.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WordComponent } from './word/word.component';
import { CounterComponent } from './counter/counter.component';
import { HyphenPipe } from './hyphen.pipe';
import { HangedManComponent } from './hanged-man/hanged-man.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    WordComponent,
    CounterComponent,
    HyphenPipe,
    HangedManComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ wordStore: WordReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
