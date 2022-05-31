import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @ViewChild('pTag') pTag: ElementRef;
  @Input() message: any;

  constructor() { }

  ngOnInit(): void {
  }

  disappear(){
    this.pTag.nativeElement.remove();
  }

}
