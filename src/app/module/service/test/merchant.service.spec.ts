import { TestBed } from '@angular/core/testing';
import { ICategory } from '../../models/category';
import { IItem } from '../../models/item';
import { IItemOffer } from '../../models/item-offer';
import { IMenu } from '../../models/menu';
import { IMerchant } from '../../models/merchant';
import { IOptionGroup } from '../../models/option-group';
import { MerchantService } from '../merchant.service';
import { merchant } from './merchant'

const itemId: string = "732bd31e-77fc-47ee-88ee-a0437f97b198"
let itemMock: IItem = {
  "id": itemId,
  "name": "Medium - 2 flavors",
  "description": "Medium two-flavored pizza.",
  "externalCode": "23",
  "image": {
    "URL": "https://t2.rg.ltmcdn.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_600.jpg",
    "CRC-32": "09345UIHF98"
  },
  "serving": 8,
  "unit": "unit"
}

const itemOfferId: string = "f080cfb3-5c4a-4eb7-907d-2de3bbb5dfb9"
let itemOfferMock: IItemOffer = {
  "id": itemOfferId,
  "itemId": "732bd31e-77fc-47ee-88ee-a0437f97b198",
  "index": 0,
  "price": {
    "value": 43,
    "originalValue": 43,
    "currency": "BRL"
  },
  "availabilityId": [
    "11d063c4-73a7-4f87-a0eb-71636cc02029"
  ],
  "optionGroupsId": [
    "fe67e551-f42f-499a-8afb-0ed893c71fa3",
    "c524c066-96fa-458d-b78c-3712661529b3"
  ]
}

const categoryId: string = "92fad022-2c28-4239-a026-989f5b555cb7"
let categoryMock: ICategory = {
  "id": categoryId,
  "index": 0,
  "name": "Salted Pizza",
  "description": "Salted pizza flavors.",
  "image": {
    "URL": "https://food-company.com/category1.png",
    "CRC-32": "09345UIHF98"
  },
  "externalCode": "13",
  "status": "AVAILABLE",
  "availabilityId": [
    "11d063c4-73a7-4f87-a0eb-71636cc02029"
  ],
  "itemOfferId": [
    "f080cfb3-5c4a-4eb7-907d-2de3bbb5dfb9",
    "377b99ba-5413-43d1-b875-7cdcaa72860e",
    "1080cfb3-5c4a-4eb7-907d-2de3bbb5dfb9",
    "1080cfb3-5c4a-4eb7-907d-2de3bbb5dfb9"

  ]
}

const menuId: string = "f627ccdc-6789-456f-a782-148538d5035b"
let menuMock: IMenu = {
  "id": menuId,
  "name": "Menu Principal",
  "description": "Pizza menu",
  "externalCode": "123",
  "disclaimer": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "categoryId": [
    "92fad022-2c28-4239-a026-989f5b555cb7",
    "6bb71850-1d40-49f9-8046-b13e068c0cca",
    "6bb71850-1d40-49f9-8046-b13e068c0cab"
  ]
}

const optionGroupId = "fe67e551-f42f-499a-8afb-0ed893c71fa3"
let optionGroupMock: IOptionGroup = {
  "id": optionGroupId,
  "index": 0,
  "name": "Choose your salted pizza flavor",
  "description": "Choose your salted pizza flavor.",
  "externalCode": "12",
  "status": "AVAILABLE",
  "minPermitted": 2,
  "maxPermitted": 2,
  "options": [
    {
      "id": "e5232f14-430c-4a94-8ff6-289d5a16a87a",
      "itemId": "502ecf11-0509-48ed-b63c-6211c48fd9b9",
      "index": 0,
      "price": {
        "value": 50,
        "originalValue": 50,
        "currency": "BRL"
      },
      "maxPermitted": 1
    },
    {
      "id": "e5232f14-430c-4a94-8ff6-289d5a16a87b",
      "itemId": "7e507cab-7235-4f75-a0c2-e955fb2f2048",
      "index": 1,
      "price": {
        "value": 43,
        "originalValue": 43,
        "currency": "BRL"
      },
      "maxPermitted": 1
    }
  ]
}

describe('Merchant Service', () => {
  let service: MerchantService;
  let merchantTest: IMerchant = merchant
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new MerchantService();

    service.setMerchant(merchantTest)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getMerchant return correct data', () => {
    expect(service.getMerchant).toBe(merchantTest)
  });

  it('should getBasicInfo return correct data', () => {
    expect(service.getBasicInfo).toBe(merchantTest.basicInfo)
  });

  it('should getMenus return correct data', () => {
    expect(service.getMenus).toBe(merchantTest.menus)
  });

  it('should getServices return correct data', () => {
    expect(service.getServices).toBe(merchantTest.services)
  });

  it('should getItemById return correct data', () => {
    expect(service.getItemById(itemId)).toEqual(itemMock)
  });

  it('should getItemOfferById return correct data', () => {
    expect(service.getItemOfferById(itemOfferId)).toEqual(itemOfferMock)
  });

  it('should getCategoryById return correct data', () => {
    expect(service.getCategoryById(categoryId)).toEqual(categoryMock)
  });

  it('should getMenuById return correct data', () => {
    expect(service.getMenuById(menuId)).toEqual(menuMock)
  });

  it('should getOptionGroupById return correct data', () => {
    expect(service.getOptionGroupById(optionGroupId)).toEqual(optionGroupMock)
  });

});
