import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slave-second',
  templateUrl: './slave-second.component.html',
  styleUrls: ['./slave-second.component.css']
})
export class SlaveSecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dataFromInput: string;

  @Output() dataForParent = new EventEmitter<string>();

  setEventEmmiter(){
    this.dataForParent.emit(this.dataFromInput);
  }

}
