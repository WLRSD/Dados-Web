import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-filtro-tabela',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  template: `
    <mat-form-field appearance="outline">
      <mat-label>Filtro</mat-label>
      <input matInput (input)="onFilterChange($event)" placeholder="Digite o filtro" />
    </mat-form-field>
  `
})
export class FiltroTabelaComponent {
  @Output() filtroChange = new EventEmitter<string>();

  onFilterChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.filtroChange.emit(input.value);
  }
}
