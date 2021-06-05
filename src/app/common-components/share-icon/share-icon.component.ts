import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-share-icon',
  templateUrl: './share-icon.component.html',
  styleUrls: ['./share-icon.component.scss']
})
export class ShareIconComponent implements OnInit {

  @Input() size: string = "30px";

  constructor() { }

  ngOnInit(): void {
  }

}
