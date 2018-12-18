import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  private _switch: boolean = false;
  @Output() switchChange: EventEmitter<boolean> = new EventEmitter();

  @Input()
  get switch() {
    return this._switch;
  }

  set switch(val: boolean) {
    this.switchChange.emit(val);
    this._switch = val;
  }

  ngOnInit() {
  }

  on() {
    this.switch = true;
  }

  off() {
    this.switch = false;
  }

}
