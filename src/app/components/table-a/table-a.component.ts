import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-table-a',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatCardModule], // Adicione os módulos necessários aqui
  templateUrl: './table-a.component.html',
  styleUrls: ['./table-a.component.css']
})
export class TableAComponent {
  // Definindo a fonte de dados para a tabela
  dataSource = [
    { id: 1, name: 'Item A1', value: 10 },
    { id: 2, name: 'Item A2', value: 20 },
    // Adicione mais dados conforme necessário
  ];
  displayedColumns: string[] = ['id', 'name', 'value'];
}
