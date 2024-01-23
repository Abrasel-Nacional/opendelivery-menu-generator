import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MerchantBasicInfoComponent } from '../merchant-basic-info.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { routes } from 'src/app/app-routing.module';
import { Location } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { MerchantService } from 'src/app/module/service/merchant.service';


describe('MerchantBasicInfoComponent', () => {
  let router: Router
  let location: Location
  let component: MerchantBasicInfoComponent;
  let fixture: ComponentFixture<MerchantBasicInfoComponent>;


  let merchantService = jasmine.createSpyObj('MerchantService', {
  }, {
    eventServiceActive: new EventEmitter<string>()
  })


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [MerchantBasicInfoComponent],
      providers: [{ provide: MerchantService, useValue: merchantService }],
    })
      .compileComponents();

    router = TestBed.inject(Router)
    location = TestBed.inject(Location)
    fixture = TestBed.createComponent(MerchantBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
