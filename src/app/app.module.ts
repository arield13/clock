import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AnalogComponent } from './components/analog/analog.component';
import { DigitalComponent } from './components/digital/digital.component';
import { SettingComponent } from './components/setting/setting.component';
import { NgReduxModule } from '@angular-redux/store';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { rootReducer, IAppState } from './components/store/index';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AnalogComponent,
    DigitalComponent,
    SettingComponent
  ],
  imports: [
    NgReduxModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension
  ) {
    this.ngRedux.configureStore(
      rootReducer,
      {} as IAppState,
      [],
      [ devTool.isEnabled() ? devTool.enhancer() : f => f]
    );
  }
}
