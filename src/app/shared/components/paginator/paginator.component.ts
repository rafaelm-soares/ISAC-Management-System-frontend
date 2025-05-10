import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() pageSize: number = 10;
  @Output() pageChanged = new EventEmitter<any[]>();

  currentPage: number = 0;
  paginatedItems: any[] = [];

  ngOnInit(): void {
    this.updatePaginatedItems();
    this.pageChanged.emit(this.paginatedItems);
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedItems();
  }

  updatePaginatedItems(): void {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedItems = this.items.slice(start, end);
    this.pageChanged.emit(this.paginatedItems);
  }
}
