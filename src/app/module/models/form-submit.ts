import { FormControl } from '@angular/forms';

export interface IFormSubmit {
  json: FormControl<string | null>;
  example: FormControl<string | null>;
  menuURL: FormControl<string | null>;
  selectedOption: FormControl<string | null>;
  imageOption: FormControl<string | null>;
  selectedFile: FormControl<File | null>;
}