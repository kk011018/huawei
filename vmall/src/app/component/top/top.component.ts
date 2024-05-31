import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent {

  isShow: boolean = true;

  search() {
    location.href = "/list"
  }

}
