import { NgModule } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  exports: [
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule,
    MatTreeModule,
    MatButtonModule,
  ]
})
export class MaterialModule { }
