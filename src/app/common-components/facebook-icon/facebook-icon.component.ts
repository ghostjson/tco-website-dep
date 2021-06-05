import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-facebook-icon',
  templateUrl: './facebook-icon.component.html',
  styleUrls: ['./facebook-icon.component.scss']
})
export class FacebookIconComponent implements OnInit {

  @Input() size: string = "30px";

  constructor() { }

  ngOnInit(): void {
  }

}
