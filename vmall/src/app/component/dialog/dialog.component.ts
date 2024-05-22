import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  // @Input() data: any;
  // @Input()
  // handler!: Function;

  // close($event: any) {
  //   this.handler($event);
  // }

  tabActiveId: string | number = 'tab2';

  activeTabChange(tab: any) {
    console.log(tab);
  }
}
