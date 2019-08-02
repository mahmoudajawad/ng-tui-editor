import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgTuiEditorModule } from 'ng-tui-editor';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		NgTuiEditorModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
