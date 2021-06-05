import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-whatsapp-icon',
  templateUrl: './whatsapp-icon.component.html',
  styleUrls: ['./whatsapp-icon.component.scss']
})
export class WhatsappIconComponent implements OnInit {

  @Input() size: string = "30px";

  constructor() { }

  ngOnInit(): void {
  }

}
