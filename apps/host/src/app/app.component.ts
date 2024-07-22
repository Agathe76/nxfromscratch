import { LoginService } from '@angular-monorepo/shared/data';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'host';

  public constructor(public loginService: LoginService) {
  }

  public ngOnInit(): void {
      this.loginService.login('user set in host');
  }

}
