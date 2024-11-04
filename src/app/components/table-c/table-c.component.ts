import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-table-c',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatCardModule],
  templateUrl: './table-c.component.html', // Certifique-se de que o template é o correto para C
  styleUrls: ['./table-c.component.css']
})
export class TableCComponent {
  dataSource = [
    { id: 1, name: 'Item C1', value: 50 },
    { id: 2, name: 'Item C2', value: 60 },
  ];
  displayedColumns: string[] = ['id', 'name', 'value'];
}
