import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IItem } from '../../models/item';
import { IItemOffer } from '../../models/item-offer';
import { MerchantService } from '../../service/merchant.service';

@Component({
  selector: 'app-item-offer-details',
  templateUrl: './item-offer-details.component.html',
  styleUrls: ['./item-offer-details.component.scss']
})
export class ItemOfferDetailsComponent implements OnInit {

  constructor(private merchantService: MerchantService, @Inject(MAT_DIALOG_DATA) private itemOfferId: string, public dialogRef: MatDialogRef<ItemOfferDetailsComponent>) { }
  readonly DEFAULT_NOT_AVAILABLE: string = "N/A"
  readonly DEFAULT_CURRENCY_PIPE: string = "BRL"

  readonly ICONS = {
    close: {
      src: "assets/images/icons/x-circle.svg",
      alt: "Close"
    },
    blackCircle: {
      src: "assets/images/icons/black-circle.svg",
      alt: "black-circle"
    }
  }

  public readonly ITEM_OFFER?: IItemOffer = this.merchantService.getItemOfferById(this.itemOfferId)
  public readonly ITEM?: IItem = this.merchantService.getItemById(this.ITEM_OFFER?.itemId)

  ngOnInit(): void {}

  closeItemOfferDetails() {
    this.dialogRef.close()
  }

  getOptionGroupById(optionGroupId: string) {
    return this.merchantService.getOptionGroupById(optionGroupId);
  }

  getItemById(itemId: string | undefined) {
    return this.merchantService.getItemById(itemId)
  }

  verifyExistsContent(contentToVerify: string | boolean | undefined): string | boolean {
    if (!contentToVerify) {
      return this.DEFAULT_NOT_AVAILABLE
    }
    return contentToVerify
  }

  isValidImage(url: string | undefined | null): boolean {
    return url != null && url !== '' && url !== 'N/A';
  }
}
