import { Component } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component'; 
import { FiltroTabelaComponent } from './components/filtro/filtro.component'; 


interface DataItem {
  id: number;
  name: string;
  value: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    NavbarComponent,
    FiltroTabelaComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  query: string = '';
  selectedTable: 'A' | 'B' | 'C' | null = null; 
  displayedColumns: string[] = ['id', 'name', 'value'];

  tableData: Record<'A' | 'B' | 'C', { label: string; dataSource: MatTableDataSource<DataItem> }> = {
    A: {
      label: 'X',
      dataSource: new MatTableDataSource<DataItem>([
        { id: 1, name: 'Item A1', value: 100 },
        { id: 2, name: 'Item A2', value: 200 },
      ]),
    },
    B: {
      label: 'Y',
      dataSource: new MatTableDataSource<DataItem>([
        { id: 1, name: 'Item B1', value: 150 },
        { id: 2, name: 'Item B2', value: 250 },
      ]),
    },
    C: {
      label: 'Z',
      dataSource: new MatTableDataSource<DataItem>([
        { id: 1, name: 'Item C1', value: 50 },
        { id: 2, name: 'Item C2', value: 60 },
      ]),
    },
  };


  isQueryValid(): boolean {
    return this.query.trim().toUpperCase() === 'SELECT * FROM';
  }


  addQueryPart(part: string) {
    this.query += `${part} `;
    this.query = this.query.trim(); 
  }


  showTable(table: 'A' | 'B' | 'C') {
    this.selectedTable = table;
  }


  get selectedTableData() {
    return this.selectedTable
      ? this.tableData[this.selectedTable]
      : { label: 'Tabela Padrão', dataSource: new MatTableDataSource<DataItem>([]) };
  }
  applyFilter(filtro: string) {
    const dataSource = this.selectedTableData.dataSource;
    dataSource.filter = filtro.trim().toLowerCase();
  }
}


