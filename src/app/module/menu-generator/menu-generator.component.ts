import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IFormSubmit } from '../models/form-submit';
import { IMerchant } from '../models/merchant';
import { IExample } from '../models/example';
import { MerchantService } from '../service/merchant.service';

@Component({
  selector: 'app-menu-generator',
  templateUrl: './menu-generator.component.html',
  styleUrls: ['./menu-generator.component.scss']
})
export class MenuGeneratorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private merchantService: MerchantService, private router: Router) {
    this.form = this.formBuilder.group({
      json: [undefined, [Validators.nullValidator, Validators.required]],
      example: [undefined, []]
    })
  }

  private examples?: IExample[];
  get getExamples(): IExample[] | undefined { return this.examples; }


  ngOnInit() {
    this.populateExamples()
  }

  public readonly EXAMPLE_LABEL: string = "EXAMPLES:"
  public readonly FORM_LABEL: string = "COPY YOUR JSON TEXT HERE:"
  public readonly BUTTON_GENERATE_MENU: string = "Generate Menu"
  public readonly MENU_PATH: string = '/menu';

  public readonly JSON_INVALID_MESSAGE: string = "Error parsing JSON, JSON data is incomplete. Please, try again.";

  public showError: boolean = false;

  readonly form: FormGroup<IFormSubmit>;
  get formControls() { return this.form.controls; }
  
  selectedExample: { name: string, text: string } = {
    name: "",
    text: ""
  };

  onSubmit(): void {
    try {
      const jsonString = this.formControls.json.value

      const merchant: IMerchant = JSON.parse(jsonString)
      this.merchantService.setMerchant(merchant)
      this.navigateToMenu();
    }
    catch (error: any) {
      this.showError = true;
      throw Error(error)
    }
  }

  navigateToMenu(): void {
    this.router.navigateByUrl(this.MENU_PATH)
  }

  populateExamples(): void {
    this.examples = this.merchantService.getExamples()
  }

  setSelectedExample(example: IExample): void {
    this.selectedExample = {
      name: example.name,
      text: example.text
    }
    this.setExampleText(this.selectedExample.text);
  }
  setExampleText(text: string):void{
    this.formControls.json.setValue(text)
  }

  clearTextArea():void{
    this.formControls.json.reset()
  }
}
