import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actions-bar',
  templateUrl: './actions-bar.component.html',
  styleUrl: './actions-bar.component.css'
})
export class ActionsBarComponent {
  @Input() addRoute: string = '';
  @Output() viewModeChange = new EventEmitter<'card' | 'table'>();
  @Output() toggleSearch = new EventEmitter<void>();
  showSearch: boolean = false;

  constructor(private router: Router) { }

  navigateToAdd() {
    console.info([this.addRoute])
    this.router.navigate([this.addRoute]);
  }

  toggleSearchHandler() {
    this.showSearch = !this.showSearch;
    this.toggleSearch.emit();
  }

  exportData() {
    console.log('Export data clicked');
  }

  setViewMode(mode: 'card' | 'table'): void {
    this.viewModeChange.emit(mode);
  }
}