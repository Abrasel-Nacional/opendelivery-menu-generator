import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuGeneratorComponent } from './module/menu-generator/menu-generator.component';
import { ViewMenuComponent } from './module/menu-generator/view-menu/view-menu.component';

export const routes: Routes = [
  { path: '', component: MenuGeneratorComponent, title: "Open Delivery - Menu Generator" },
  { path: 'menu', component: ViewMenuComponent, title: "Open Delivery - Menu Generator" },
  { path: '**', redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
