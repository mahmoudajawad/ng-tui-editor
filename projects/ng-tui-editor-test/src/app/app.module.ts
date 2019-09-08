import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgTuiEditorModule } from 'projects/ng-tui-editor/src/public-api';

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
