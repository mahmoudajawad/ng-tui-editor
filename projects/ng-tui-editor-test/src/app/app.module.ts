import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgTuiEditorModule } from 'ng-tui-editor';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		NgTuiEditorModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
