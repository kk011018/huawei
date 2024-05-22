import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  title: string = "HUAWEI MatePad Pro 13.2英寸";
  banben: string = "WiFi 12GB+256GB";
  color: string = "曜金黑";
  newprice: number = 4999;
  oldprice: number = 5999;
}
