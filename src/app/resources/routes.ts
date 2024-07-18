import pizzaExampleEn from './examples/pizzaExample_en.json';
import pizzaExamplePt from './examples/pizzaExample_pt.json';
import { IResource } from '../module/models/example';
import { ExamplesEnum } from './example-id';

export const resource: IResource = {
  examples: [
    {
      name: 'Pizza Sample (English)',
      id: ExamplesEnum.Pizza_EN,
      text: JSON.stringify(pizzaExampleEn),
    },
    {
      name: 'Pizza Sample (Português)',
      id: ExamplesEnum.Pizza_PT,
      text: JSON.stringify(pizzaExamplePt),
    },
  ],
};