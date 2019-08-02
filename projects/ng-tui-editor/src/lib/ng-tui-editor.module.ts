import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgTuiEditorComponent } from './ng-tui-editor.component';

@NgModule({
	declarations: [NgTuiEditorComponent],
	imports: [
		FormsModule
	],
	exports: [NgTuiEditorComponent]
})
export class NgTuiEditorModule { }
