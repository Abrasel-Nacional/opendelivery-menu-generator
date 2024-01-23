import { Component, OnInit } from '@angular/core';
import { IMerchant } from '../../models/merchant';
import { MerchantService } from '../../service/merchant.service';

@Component({
  selector: 'view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.scss']
})
export class ViewMenuComponent implements OnInit {

  constructor(private merchantService: MerchantService) { }

  ngOnInit(): void {
  }

}
