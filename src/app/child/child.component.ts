import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() public showMessage: Boolean;

  constructor() { }

  ngOnChanges(changes){
    console.log(changes);
  }

  ngOnInit() {
  }

}