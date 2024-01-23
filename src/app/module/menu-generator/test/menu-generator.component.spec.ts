import { Location } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MerchantService } from '../../service/merchant.service';
import { MenuGeneratorComponent } from '../menu-generator.component';
import { routes } from '../../../app-routing.module';
import { By } from '@angular/platform-browser';

describe('MenuGeneratorComponent', () => {
  let router: Router;
  let location: Location;
  let component: MenuGeneratorComponent;
  let fixture: ComponentFixture<MenuGeneratorComponent>;

  let merchantService = jasmine.createSpyObj('MerchantService', {
    setMerchant: null,
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [MenuGeneratorComponent],
      providers: [
        { provide: MerchantService, useValue: merchantService },
        FormBuilder,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(MenuGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router.initialNavigation();
  });

  function detectChanges(): void {
    fixture.detectChanges();
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should thrown error if json is invalid', () => {
    const JSON_INVALID: string = '{@!';
    component.formControls.json.setValue(JSON_INVALID);

    expect(() => {
      component.onSubmit();
    }).toThrowError();
  });

  it('button should be disabled if json is empty', () => {
    const EMPTY: string = '';
    component.formControls.json.setValue(EMPTY);
    detectChanges();

    const button: HTMLButtonElement = fixture.debugElement.query(
      By.css('.btn-validate')
    ).nativeElement;
    expect(button.disabled).toBeTrue();
  });

  it('button should be enable if not empty', () => {
    const CONTENT: string = '{}';
    component.formControls.json.setValue(CONTENT);
    detectChanges();

    const button: HTMLButtonElement = fixture.debugElement.query(
      By.css('.btn-validate')
    ).nativeElement;
    expect(button.disabled).toBeFalse();
  });

  it(`should navigate to Menu`, fakeAsync(() => {
    const menuPath: string = component.MENU_PATH;

    router.navigateByUrl(menuPath).then(() => {
      expect(location.path()).toBe(menuPath);
    });
  }));

  it('should json to be invalid if value is null or undefined', () => {
    const controlJson = component.form.get('json');
    controlJson?.setValue(null);
    detectChanges();
    expect(controlJson?.valid).toBeFalsy();

    controlJson?.setValue(undefined);
    detectChanges();
    expect(controlJson?.valid).toBeFalsy();
  });
});
