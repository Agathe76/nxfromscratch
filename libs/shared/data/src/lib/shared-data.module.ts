import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';

@NgModule({
  imports: [CommonModule],
  providers: [
  ]
})
export class SharedDataModule {
  static forRoot(): ModuleWithProviders<SharedDataModule> {
    return {
      ngModule: SharedDataModule,
      providers: [
        LoginService
      ]
    };
  }
}
