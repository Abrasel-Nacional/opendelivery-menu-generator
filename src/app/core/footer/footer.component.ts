import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  readonly PROGRAMMERS_LOGO_ALTERNATIVE_TEXT: string = "Programmers Beyond IT Brasil";
  readonly PROGRAMMERS_LOGO_PATH: string = "assets/images/logo/programmers-branco.webp";

}
