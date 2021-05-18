import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slave',
  templateUrl: './slave.component.html',
  styleUrls: ['./slave.component.css']
})
export class SlaveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input('toSlave') dataFromParent: string;

}
