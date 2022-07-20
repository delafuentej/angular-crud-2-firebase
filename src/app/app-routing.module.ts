import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './pages/items/items.component';
import { ItemComponent } from './pages/item/item.component';

const routes: Routes=[
  { path:'employees', component: ItemsComponent },
  { path:'employee/:id', component: ItemComponent },
  { path: '**', pathMatch:'full', redirectTo:'employees'}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
