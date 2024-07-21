import { Component, Input } from '@angular/core';

@Component({
  selector: 'angular-monorepo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
})
export class ButtonComponent {
  @Input() public Label: string;
}
