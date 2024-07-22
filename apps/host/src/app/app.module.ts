import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SharedUiModule } from '@angular-monorepo/shared/ui';
import { SharedDataModule } from '@angular-monorepo/shared/data';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    SharedUiModule,
    SharedDataModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
