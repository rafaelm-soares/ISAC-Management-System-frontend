import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-toggle',
  templateUrl: './view-toggle.component.html',
  styleUrls: ['./view-toggle.component.css']
})
export class ViewToggleComponent {
  @Input() viewMode: 'card' | 'table' = 'card';
  @Output() viewModeChange = new EventEmitter<'card' | 'table'>();

  toggleView(): void {
    this.viewMode = this.viewMode === 'card' ? 'table' : 'card';
    this.viewModeChange.emit(this.viewMode);
  }
}
