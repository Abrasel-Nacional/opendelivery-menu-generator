import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemOfferDetailsComponent } from '../item-offer-details.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('ItemOfferDetailsComponent', () => {
  let component: ItemOfferDetailsComponent;
  let fixture: ComponentFixture<ItemOfferDetailsComponent>;
  const itemOfferId: string = ""

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ItemOfferDetailsComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: itemOfferId }, { provide: MatDialogRef, useValue: {} }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ItemOfferDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function detectChanges(): void {
    fixture.detectChanges();
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
