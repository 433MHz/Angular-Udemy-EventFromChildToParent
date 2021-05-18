import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practiseDataBindingBetweenComponents';

  dataFromInput: string;
  dataFromChildOutput: string;

  getDataFromChildOutput(data: string){
    this.dataFromChildOutput = data;
  }
}
