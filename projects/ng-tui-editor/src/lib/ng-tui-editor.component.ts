import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

import tuiEditor from 'tui-editor';

@Component({
	selector: 'tui-ng-tui-editor',
	template: `<div #tuiEditor></div>`,
	styles: ['']
})
export class NgTuiEditorComponent implements OnInit {

	private editor!: tuiEditor;
	@ViewChild('tuiEditor') private EditorElement: ElementRef<HTMLDivElement>;
	@Input('value') private value: string;
	@Input('initialEditType') private initialEditType: 'markdown' | 'wysiwyg';
	@Input('previewStyle') private previewStyle: 'vertical' | 'tab';
	@Input('height') private height: string;
	@Input('dir') private dir: 'ltr' | 'rtl' = 'ltr';

	@Output('change') private change: EventEmitter<NgTuiEditorComponent> = new EventEmitter();

	constructor() {}

	ngOnInit() {
		this.editor = new tuiEditor({
			el: this.EditorElement.nativeElement,
			initialValue: this.value,
			initialEditType: this.initialEditType || 'wysiwyg',
			previewStyle: this.previewStyle || 'vertical',
			height: this.height || '300px',
			events: ({
				change: (change) => { this.change.emit(this); }
			} as any)
		});
		this.EditorElement.nativeElement.querySelector('.tui-editor-contents').setAttribute('dir', this.dir);
	}

	public getMarkdown() {
		if (this.dir == 'rtl')
			return `<section dir="rtl">${this.editor.getMarkdown()}</section>`
		else
			return this.editor.getMarkdown();
	}
	public getHTML() {
		if (this.dir == 'rtl')
			return `<section dir="rtl">${this.editor.getHtml()}</section>`
		else
			return this.editor.getHtml();
	}
	public getValue() {
		if (this.dir == 'rtl')
			return `<section dir="rtl">${this.editor.getValue()}</section>`
		else
			return this.editor.getValue();
	}

}
