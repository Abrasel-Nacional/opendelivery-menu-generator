import { EventEmitter, Injectable, Output } from '@angular/core';
import { IBasicInfo } from '../models/basic-info';
import { ICategory } from '../models/category';
import { IItem } from '../models/item';
import { IItemOffer } from '../models/item-offer';
import { IMenu } from '../models/menu';
import { IMerchant } from '../models/merchant';
import { IOptionGroup } from '../models/option-group';
import { IService } from '../models/service';
import { IExample } from "../models/example";
import { resource } from '../../resources/routes'

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor() { }

  eventServiceActive = new EventEmitter<string>()

  private merchant?: IMerchant;
  setMerchant(merchant: IMerchant | undefined) { this.merchant = merchant; }
  get getMerchant() {
    return this.merchant;
  }

  get getBasicInfo(): IBasicInfo | undefined {
    return this.merchant?.basicInfo
  }

  get getServices(): IService[] | undefined {
    return this.merchant?.services
  }

  get getMenus(): IMenu[] | undefined {
    return this.merchant?.menus;
  }

  getItemById(itemId: string | undefined): IItem | undefined {
    return this.merchant?.items?.find(item => item.id == itemId)
  }

  getItemOfferById(itemOfferId: string | undefined): IItemOffer | undefined {
    return this.merchant?.itemOffers?.find(itemOffer => itemOffer.id == itemOfferId)
  }

  getCategoryById(categoryId: string | undefined): ICategory | undefined {
    return this.merchant?.categories?.find(category => category.id == categoryId)
  }

  getMenuById(menuId: string | undefined): IMenu | undefined {
    return this.getMenus?.find(menu => (menu.id == menuId))
  }

  getOptionGroupById(optionGroupId: string): IOptionGroup | undefined {
    return this.getMerchant?.optionGroups?.find(optionGroup => (optionGroup.id == optionGroupId))
  }

  getExample(exampleId: number): IExample | undefined {
    return resource.examples.find(example => example.id == exampleId);
    
  }

  getExamples(): IExample[] {
    let examples = [];

    for (let index = 0; index < resource.examples.length; index++) {
      examples[index] = resource.examples[index];
    }
    return examples;
}

}
