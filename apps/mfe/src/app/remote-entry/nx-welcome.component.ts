import { LoginService } from '@angular-monorepo/shared/data';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'angular-monorepo-nx-welcome',
  templateUrl: './nx-welcome.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {

  public constructor(private readonly loginService: LoginService) {

  }

  public ngOnInit(): void {
    console.log(this.loginService.user)
  }
}
