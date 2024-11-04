import { Routes } from '@angular/router';
import { TableAComponent } from './components/table-a/table-a.component';
import { TableBComponent } from './components/table-b/table-b.component';
import { TableCComponent } from './components/table-c/table-c.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'table-a', component: TableAComponent },
  { path: 'table-b', component: TableBComponent },
  { path: 'table-c', component: TableCComponent },
  { path: 'home', component: TableAComponent } 
];
