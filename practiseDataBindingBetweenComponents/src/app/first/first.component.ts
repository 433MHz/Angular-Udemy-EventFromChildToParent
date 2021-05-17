import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  @Output() dataToOutput= new EventEmitter<{dataFromInput: string}>();

  dataFromInput: string;

  setEmmiter(){
    this.dataToOutput.emit({dataFromInput: this.dataFromInput})
  }

  constructor() { }

  ngOnInit(): void {
  }

}
