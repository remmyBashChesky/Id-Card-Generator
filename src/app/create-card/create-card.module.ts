import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule, Routes } from '@angular/router'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { CreateCardComponent } from './create-card.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CardPreviewComponent } from './card-preview/card-preview.component';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
 {
     path:'',
     component: CreateCardComponent
 } 
];

@NgModule({
  declarations: [CreateCardComponent, CardPreviewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatSelectModule,
    MatSnackBarModule,
    MatCardModule
  ],
  exports:[CreateCardComponent]
})
    export class  CreateCardModule { }
