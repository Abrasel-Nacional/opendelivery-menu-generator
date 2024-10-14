import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { IFormSubmit } from '../models/form-submit';
import { IMerchant } from '../models/merchant';
import { IExample } from '../models/example';
import { MerchantService } from '../service/merchant.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu-generator',
  templateUrl: './menu-generator.component.html',
  styleUrls: ['./menu-generator.component.scss']
})
export class MenuGeneratorComponent implements OnInit
{
  loading = false;
  selectedOption: FormControl = new FormControl('useSchema');
  imageOption: FormControl = new FormControl('');
  isJsonEnabled: boolean = true;
  showError: boolean = false;
  isFormValid: boolean = false;
  isImageSelected: boolean = false;
  selectedFile: File | null = null;
  fileName = '';

  constructor(private formBuilder: FormBuilder, private merchantService: MerchantService, private router: Router, private http: HttpClient)
  {
    this.form = this.formBuilder.group({
      json: [{ value: '', disabled: false }, [Validators.required]],
      example: [undefined, []],
      menuURL: [{ value: '', disabled: true }],
      selectedOption: this.selectedOption,
      imageOption: this.imageOption,
      selectedFile: this.selectedFile
    }) as FormGroup<IFormSubmit>;
  }

  private examples?: IExample[];
  get getExamples(): IExample[] | undefined { return this.examples; }

  ngOnInit()
  {
    this.populateExamples();
    this.selectedOption.valueChanges.subscribe(value => this.onOptionSelect(value));
    this.imageOption.valueChanges.subscribe(value => this.onImageOptionSelect(value));
    this.formControls.json.valueChanges.subscribe(() => this.checkJsonValidity());
  }

  public readonly EXAMPLE_LABEL: string = "EXEMPLOS:";
  public readonly FORM_LABEL: string = "COLE SEU TEXTO JSON AQUI:";
  public readonly URL_LABEL: string = "COLE A URL DO SEU MENU AQUI:";
  public readonly BUTTON_GENERATE_MENU: string = "Gerar Menu";
  public readonly MENU_PATH: string = '/menu';
  public readonly NO_FILE_TEXT: string = "Nenhum arquivo selecionado";
  public readonly JSON_INVALID_MESSAGE: string = "Erro ao analisar JSON, os dados do JSON estão incompletos. Por favor, tente novamente.";
  public readonly IMAGE_INVALID_MESSAGE: string = "NOT_MENU_INFO";

  readonly form: FormGroup<IFormSubmit>;
  get formControls() { return this.form.controls; }

  selectedExample: { name: string, text: string } = {
    name: "",
    text: ""
  };

  onSubmit(): void
  {
    const jsonString = this.formControls.json.value;

    if (jsonString)
    {
      try
      {
        const merchant: IMerchant = JSON.parse(jsonString);
        this.merchantService.setMerchant(merchant);
        this.navigateToMenu();
      } catch (error: any)
      {
        this.showError = true;
        console.error("Error parsing JSON:", error);
      }
    } else
    {
      this.showError = true;
      console.error("JSON string is null or empty");
    }
  }

  navigateToMenu(): void
  {
    this.router.navigateByUrl(this.MENU_PATH);
  }

  populateExamples(): void
  {
    this.examples = this.merchantService.getExamples();
  }

  setSelectedExample(example: IExample): void
  {
    this.selectedExample = {
      name: example.name,
      text: example.text
    };
    this.setExampleText(this.selectedExample.text);
  }

  setExampleText(text: string): void
  {
    this.formControls.json.setValue(text);
  }

  clearTextArea(): void
  {
    this.formControls.json.reset();
  }

  onOptionSelect(value: string): void
  {
    this.showError = false; // Limpar mensagem de erro
    this.isJsonEnabled = value === 'useSchema';

    if (value === 'useSchema')
    {
      this.formControls.json.enable();
      this.formControls.menuURL.disable();
      this.formControls.imageOption.setValue('');
      this.formControls.selectedFile.reset();
      this.selectedFile = null;
      this.fileName = this.NO_FILE_TEXT;
      this.formControls.json.setValue(''); // Limpa a textarea
    } else if (value === 'useExample')
    {
      this.formControls.json.disable();
      this.formControls.menuURL.disable();
      this.formControls.imageOption.setValue('');
      this.formControls.selectedFile.reset();
      this.selectedFile = null;
      this.fileName = this.NO_FILE_TEXT;
      this.formControls.json.setValue(''); // Limpa a textarea
    } else if (value === 'useImage')
    {
      this.formControls.json.disable();
      this.formControls.menuURL.disable();
      this.formControls.imageOption.enable();
      this.formControls.json.setValue(''); // Limpa a textarea
    }
  }

  onImageOptionSelect(value: string): void
  {
    this.showError = false; // Limpar mensagem de erro

    if (value === 'uploadImage')
    {
      this.formControls.menuURL.reset();
      this.formControls.menuURL.disable();
    } else if (value === 'insertURL')
    {
      this.formControls.selectedFile.reset();
      this.selectedFile = null;
      this.fileName = this.NO_FILE_TEXT;
      this.formControls.menuURL.enable();
    }

    this.checkImageSelection();
  }

  onExampleSelect(event: any): void
  {
    const selectedValue = event.value;
    const selectedExample = this.examples?.find(example => example.name === selectedValue);
    if (selectedExample)
    {
      this.setSelectedExample(selectedExample);
    }
  }

  onFileSelected(event: any): void
  {
    const file: File = event.target.files[0];
    if (file)
    {
      this.fileName = file.name;
      this.selectedFile = file;
      this.checkImageSelection();
    }
  }

  onMenuURLChange(event: any): void
  {
    this.checkImageSelection();
  }

  async generateJson(): Promise<void>
  {
    const menuURL = this.formControls.menuURL.value;

    if (this.selectedFile)
    {
      const formData = new FormData();
      formData.append('image', this.selectedFile);

      this.loading = true;
      try
      {
        const apiURL = environment.apiURL + '/generate-json-from-image';
        const headers = { 'app': `${environment.apiKey}` };
        const response = await firstValueFrom(this.http.post<{ json: string }>(apiURL, formData, { headers }));
        if (response && response.json)
        {
          if (response.json == this.IMAGE_INVALID_MESSAGE)
          {
            this.setExampleText("Não foi possível gerar o JSON a partir da imagem fornecida. Verifique se: \n- A imagem está legível; \n- A imagem contém um menu de restaurante; \n- A imagem não está corrompida. \n- Caso o menu seja muito grande, recomenda-se dividir a imagem em partes menores.");
            this.checkJsonValidity(); // Verifica a validade do JSON após receber a resposta
          }
          else
          {
            window.scrollTo(0, document.body.scrollHeight); // Adicionado para rolar para o fim da página
            this.setExampleText(response.json);
            this.checkJsonValidity(); // Verifica a validade do JSON após receber a resposta
          }
        } else
        {
          this.setExampleText("Não foi possível gerar o JSON a partir da imagem fornecida. Verifique se: \n- A imagem está legível; \n- A imagem contém um menu de restaurante; \n- A imagem não está corrompida. \n- Caso o menu seja muito grande, recomenda-se dividir a imagem em partes menores.");
          console.error("No content returned from server");
        }
      } catch (error)
      {
        this.setExampleText("Não foi possível gerar o JSON a partir da imagem fornecida. Verifique se: \n- A imagem está legível; \n- A imagem contém um menu de restaurante; \n- A imagem não está corrompida. \n- Caso o menu seja muito grande, recomenda-se dividir a imagem em partes menores.");
        console.error("Error generating JSON:", error);
      } finally
      {
        this.loading = false;
      }
    } else if (menuURL)
    {
      this.loading = true;

      try
      {
        const apiURL = environment.apiURL + '/generate-json-from-url';
        const headers = { 'app': `${environment.apiKey}` };
        const response = await firstValueFrom(this.http.post<{ json: string }>(apiURL, { menuURL }, { headers }));
        if (response && response.json)
        {
          if (response.json == this.IMAGE_INVALID_MESSAGE)
          {
            this.setExampleText("Não foi possível gerar o JSON a partir da imagem fornecida. Verifique se: \n- A imagem está legível; \n- A imagem contém um menu de restaurante; \n- A imagem não está corrompida. \n- Caso o menu seja muito grande, recomenda-se dividir a imagem em partes menores.");
          }
          else
          {
            window.scrollTo(0, document.body.scrollHeight); // Adicionado para rolar para o fim da página
            this.setExampleText(response.json);
            this.checkJsonValidity(); // Verifica a validade do JSON após receber a resposta
          }
        } else
        {
          this.setExampleText("Não foi possível gerar o JSON a partir da imagem fornecida. Verifique se: \n- A imagem está legível; \n- A imagem contém um menu de restaurante; \n- A imagem não está corrompida. \n- Caso o menu seja muito grande, recomenda-se dividir a imagem em partes menores.");
          console.error("No content returned from server");
        }
      } catch (error)
      {
        this.setExampleText("Não foi possível gerar o JSON a partir da imagem fornecida. Verifique se: \n- A imagem está legível; \n- A imagem contém um menu de restaurante; \n- A imagem não está corrompida. \n- Caso o menu seja muito grande, recomenda-se dividir a imagem em partes menores.");
        console.error("Error generating JSON:", error);
      } finally
      {
        this.loading = false;
      }
    } else
    {
      console.error("No file or URL provided");
    }
  }

  checkJsonValidity(): void
  {
    this.isFormValid = !!this.formControls.json.value;
  }

  checkImageSelection(): void
  {
    this.isImageSelected = !!this.formControls.menuURL.value || !!this.selectedFile;
  }
}