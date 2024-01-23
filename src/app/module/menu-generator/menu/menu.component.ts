import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IItem } from '../../models/item';
import { IMenu } from '../../models/menu';
import { IService } from '../../models/service';
import { MerchantService } from '../../service/merchant.service';
import { ItemOfferDetailsComponent } from '../item-offer-details/item-offer-details.component';

@Component({
  selector: 'menu-itens',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private merchantService: MerchantService, private dialog: MatDialog) { }


  ngOnInit(): void {
    this.setMenuActiveByServiceType(this.TYPE_DELIVERY)
  }

  readonly DEFAULT_NOT_AVAILABLE: string = "N/A"
  readonly TYPE_DELIVERY: string = "DELIVERY";
  readonly TYPE_TAKEOUT: string = "TAKEOUT";
  readonly TYPE_INDOOR: string = "INDOOR";

  private readonly WIDTH_ITEM_OFFER_DETAILS_DIALOG: string = '500px'
  private readonly MAX_HEIGHT_ITEM_OFFER_DETAILS_DIALOG: string = '98vh'
  private readonly CUSTOM_CLASS_DIALOG: string = 'custom-modal';

  readonly MENUS?: IMenu[] = this.merchantService.getMenus
  readonly SERVICES?: IService[] = this.merchantService.getServices

  menuActive?: IMenu;
  deliveryTypeSelected: string = this.TYPE_DELIVERY;

  getCategoryById(categoryId: string | undefined) {
    return this.merchantService.getCategoryById(categoryId)
  }

  getItemById(itemId: string | undefined) {
    return this.merchantService.getItemById(itemId)
  }

  getItemOfferById(itemOfferId: string | undefined) {
    return this.merchantService.getItemOfferById(itemOfferId)
  }

  getMenuById(menuId: string | undefined) {
    return this.merchantService.getMenuById(menuId)
  }

  openItemOfferDetailsDialog(itemOfferId: string) {
    this.dialog.open(ItemOfferDetailsComponent,
      {
        data: itemOfferId,
        width: this.WIDTH_ITEM_OFFER_DETAILS_DIALOG,
        maxHeight: this.MAX_HEIGHT_ITEM_OFFER_DETAILS_DIALOG,
        panelClass: this.CUSTOM_CLASS_DIALOG
      });
  }

  setMenuActiveByServiceType(serviceType: string) {
    this.merchantService.eventServiceActive.emit(serviceType)

    let serviceActive = this.SERVICES?.find(serv => serv.serviceType == serviceType)
    this.menuActive = this.getMenuById(serviceActive?.menuId)
  }

  onToggleChange(deliveryType: string) {
    this.deliveryTypeSelected = deliveryType;
  }

  existProperty(property: any): string {
    if (property) { return property }
    return this.DEFAULT_NOT_AVAILABLE
  }

}

