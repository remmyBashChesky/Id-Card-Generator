import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule, Routes } from '@angular/router'; 
import { ReactiveFormsModule } from '@angular/forms';  
import { CardsListComponent } from './cards-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [{
    path:'',
    component: CardsListComponent
}
];

@NgModule({
  declarations: [CardsListComponent, DialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes), 
    MatTableModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents:[DialogComponent]
})
    export class  CardsListModule { }
