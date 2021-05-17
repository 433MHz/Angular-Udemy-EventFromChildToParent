import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practiseDataBindingBetweenComponents';

  data: string;

  getDataFromOutput(event:{dataFromInput: string}){
    this.data= event.dataFromInput;
  }
}
