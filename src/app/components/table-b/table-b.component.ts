import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

interface DataItem {
  id: number;
  name: string;
  value: number;
}

@Component({
  selector: 'app-table-b',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule], // Inclua MatToolbarModule aqui
  templateUrl: './table-b.component.html',
  styleUrls: ['./table-b.component.css']
})
export class TableBComponent {
  dataSource = new MatTableDataSource<DataItem>([
    { id: 1, name: 'Item B1', value: 100 },
    { id: 2, name: 'Item B2', value: 200 },
    { id: 3, name: 'Item B3', value: 300 },
  ]);
  displayedColumns = ['id', 'name', 'value'];
}
