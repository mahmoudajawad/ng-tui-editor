import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

import tuiEditor from 'tui-editor';

@Component({
	selector: 'tui-editor',
	template: `<div #tuiEditor></div>`,
	providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgTuiEditorComponent),
        multi: true
    }]
})
export class NgTuiEditorComponent implements ControlValueAccessor {

    onChange: (_: any) => void = (_: any) => {};
	onTouched: () => void = () => {};
	
	private editor!: tuiEditor;
	@ViewChild('tuiEditor') private EditorElement: ElementRef<HTMLDivElement>;
	@Input('initialEditType') private initialEditType: 'markdown' | 'wysiwyg';
	@Input('ngModel') value: string;
	@Input('previewStyle') private previewStyle: 'vertical' | 'tab';
	@Input('height') private height: string;
	@Input('dir') private dir: 'ltr' | 'rtl' = 'ltr';
	@Input('format') private format: 'markdown' | 'html' = 'markdown';
	@Output('change') private change: EventEmitter<NgTuiEditorComponent> = new EventEmitter();

	constructor() {}

    updateChanges(): void {
		this.onChange(this.value);
		if (this.value && !this.editor) {
			this.editor = new tuiEditor({
				el: this.EditorElement.nativeElement,
				initialValue: this.value,
				initialEditType: this.initialEditType || 'wysiwyg',
				previewStyle: this.previewStyle || 'vertical',
				height: this.height || '300px',
				events: ({
					change: ($event) => {
						this.writeValue(this.getMarkdown());
						this.change.emit(this);
					}
				} as any)
			});
			this.EditorElement.nativeElement.querySelector('.tui-editor-contents').setAttribute('dir', this.dir);
		}
    }
    writeValue(value: string): void {
        this.value = value;
        this.updateChanges();
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

	public getMarkdown(): string {
		return this.editor.getMarkdown();
	}
	public getHTML(): string {
		return this.editor.getHtml();
	}
	public getValue(): string {
		if (this.format == 'markdown') {
			return this.getMarkdown();
		} else if (this.format == 'html') {
			return this.getHTML();
		}
	}

}
