import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IBasicInfo } from '../../models/basic-info';
import { IService } from '../../models/service';
import { MerchantService } from '../../service/merchant.service';

@Component({
  selector: 'merchant-basic-info',
  templateUrl: './merchant-basic-info.component.html',
  styleUrls: ['./merchant-basic-info.component.scss']
})
export class MerchantBasicInfoComponent implements OnInit {

  constructor(private merchantService: MerchantService, private router: Router) { }

  serviceSubscribe: Subscription = new Subscription();

  public serviceActive?: IService;
  ngOnInit(): void {
    this.serviceSubscribe = this.merchantService.eventServiceActive.subscribe({
      next: (serviceType: string) => {
        console.log(serviceType)
        this.serviceActive = this.SERVICES?.find(serv => serv.serviceType == serviceType)
      }
    })
  }

  ngOnDestroy() {
    this.serviceSubscribe.unsubscribe()
  }

  readonly RETURN: string = "return"
  readonly ICONS = {
    arrowLeft: {
      src: "assets/images/icons/arrow_return.svg",
      alt: "Arrow left"
    },
    shoppingBag: {
      src: "assets/images/icons/shopping-bag.png",
      alt: "Shopping bag"
    },
    ticketCurrency: {
      src: "assets/images/icons/ticket-currency.png",
      alt: "Ticket currency"
    },
    timer: {
      src: "assets/images/icons/timer.png",
      alt: "Timer"
    },
    location: {
      src: "assets/images/icons/location.svg",
      alt: "Location"
    },
    email: {
      src: "assets/images/icons/email.svg",
      alt: "Email"
    },
    phone: {
      src: "assets/images/icons/phone.svg",
      alt: "Phone"
    },
    whatsAppIconWithPhone: {
      src: "assets/images/icons/whatsapp_icon.svg",
      alt: "WhatsApp phone"
    },
    clock: {
      src: "assets/images/icons/clock.svg",
      alt: ""
    },
  }

  readonly ROOT_PATH: string = '/'
  readonly DEFAULT_CURRENCY_PIPE: string = "BRL"

  public readonly MERCHANT_ID?: string = this.merchantService.getMerchant?.id
  public readonly BASIC_INFO?: IBasicInfo = this.merchantService.getBasicInfo
  private readonly SERVICES?: IService[] = this.merchantService.getServices


  address: string = `${this.BASIC_INFO?.address?.street},${this.BASIC_INFO?.address?.number} - ${this.BASIC_INFO?.address?.district},${this.BASIC_INFO?.address?.state}, CEP: ${this.BASIC_INFO?.address?.postalCode}`

  navigateToRoot() {
    this.router.navigateByUrl(this.ROOT_PATH)
  }
}
