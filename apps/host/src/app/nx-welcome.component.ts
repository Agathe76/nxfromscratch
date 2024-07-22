import { LoginService } from '@angular-monorepo/shared/data';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'angular-monorepo-nx-welcome',
  template: `
    host entry component
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {

  public constructor(public loginService: LoginService) {
  }

  public ngOnInit(): void {
      console.log(this.loginService.user);
  }
}
