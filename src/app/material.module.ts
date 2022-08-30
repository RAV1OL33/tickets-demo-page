import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  exports: [
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule,
    MatTreeModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
    MatToolbarModule,
    MatExpansionModule,
  ]
})
export class MaterialModule { }
