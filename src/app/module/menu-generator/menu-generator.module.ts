import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MenuGeneratorComponent } from './menu-generator.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './menu/menu.component';
import { MerchantBasicInfoComponent } from './merchant-basic-info/merchant-basic-info.component';
import { ItemOfferDetailsComponent } from './item-offer-details/item-offer-details.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    MenuGeneratorComponent,
    MenuComponent,
    MerchantBasicInfoComponent,
    ItemOfferDetailsComponent,
    ViewMenuComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRadioModule
  ]
})
export class MenuGeneratorModule { }
