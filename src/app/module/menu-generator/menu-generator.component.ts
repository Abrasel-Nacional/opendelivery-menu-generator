import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
  loading = false;
  selectedOption: FormControl = new FormControl('useSchema');
  isJsonEnabled: boolean = true;
  showError: boolean = false;
  isFormValid: boolean = false; // Adicionado

  constructor(private formBuilder: FormBuilder, private merchantService: MerchantService, private router: Router, private http: HttpClient) {
    this.form = this.formBuilder.group({
      json: [{ value: '', disabled: false }, [Validators.required]],
      example: [undefined, []],
      menuURL: [{ value: '', disabled: true }],
      selectedOption: this.selectedOption
    }) as FormGroup<IFormSubmit>;
  }

  private examples?: IExample[];
  get getExamples(): IExample[] | undefined { return this.examples; }

  ngOnInit() {
    this.populateExamples();
    this.selectedOption.valueChanges.subscribe(value => this.onOptionSelect(value));
    this.formControls.json.valueChanges.subscribe(() => this.checkJsonValidity());
  }

  public readonly EXAMPLE_LABEL: string = "EXEMPLOS:";
  public readonly FORM_LABEL: string = "COLE SEU TEXTO JSON AQUI:";
  public readonly URL_LABEL: string = "COLE A URL DO SEU MENU AQUI:";
  public readonly BUTTON_GENERATE_MENU: string = "Gerar Menu";
  public readonly MENU_PATH: string = '/menu';
  public readonly JSON_INVALID_MESSAGE: string = "Erro ao analisar JSON, os dados do JSON estão incompletos. Por favor, tente novamente.";

  readonly form: FormGroup<IFormSubmit>;
  get formControls() { return this.form.controls; }

  selectedExample: { name: string, text: string } = {
    name: "",
    text: ""
  };

  onSubmit(): void {
    const jsonString = this.formControls.json.value;

    if (jsonString) {
      try {
        const merchant: IMerchant = JSON.parse(jsonString);
        this.merchantService.setMerchant(merchant);
        this.navigateToMenu();
      } catch (error: any) {
        this.showError = true;
        console.error("Error parsing JSON:", error);
      }
    } else {
      this.showError = true;
      console.error("JSON string is null or empty");
    }
  }

  navigateToMenu(): void {
    this.router.navigateByUrl(this.MENU_PATH);
  }

  populateExamples(): void {
    this.examples = this.merchantService.getExamples();
  }

  setSelectedExample(example: IExample): void {
    this.selectedExample = {
      name: example.name,
      text: example.text
    };
    this.setExampleText(this.selectedExample.text);
  }

  setExampleText(text: string): void {
    this.formControls.json.setValue(text);
  }

  clearTextArea(): void {
    this.formControls.json.reset();
  }

  onOptionSelect(value: string): void {
    this.showError = false; // Limpar mensagem de erro
    this.isJsonEnabled = value === 'useSchema';

    if (value === 'useSchema') {
      this.formControls.json.enable();
      this.formControls.menuURL.disable();
      this.formControls.json.setValue(''); // Limpa a textarea
    } else if (value === 'useURL') {
      this.formControls.json.disable();
      this.formControls.menuURL.enable();
      this.formControls.json.setValue(''); // Limpa a textarea
    } else if (value === 'useExample') {
      this.formControls.json.disable();
      this.formControls.menuURL.disable();
      this.formControls.json.setValue(''); // Limpa a textarea
    }
    this.checkJsonValidity(); // Verifica a validade do JSON
  }

  onExampleSelect(event: any): void {
    const selectedValue = event.value;
    const selectedExample = this.examples?.find(example => example.name === selectedValue);
    if (selectedExample) {
      this.setSelectedExample(selectedExample);
    }
  }

  async generateJson(): Promise<void> {
    const menuURL = this.formControls.menuURL.value;

    if (!menuURL) {
      console.error("menuURL is null or empty");
      return;
    }

    this.loading = true;

    try {
      const response = await this.http.post<{ json: string }>('http://127.0.0.1:5000/api/generate-json', { menuURL }).toPromise();
      if (response && response.json) {
        this.setExampleText(response.json);
        this.checkJsonValidity(); // Verifica a validade do JSON após receber a resposta
      } else {
        console.error("No content returned from server");
      }
    } catch (error) {
      console.error("Error generating JSON:", error);
      this.showError = true;
    } finally {
      this.loading = false;
    }
  }

  checkJsonValidity(): void {
    this.isFormValid = !!this.formControls.json.value;
  }
}
