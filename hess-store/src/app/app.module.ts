import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule,  } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CustomLogoModule } from "./custom-logo/custom-logo.module";
import { CustomHeaderModule } from "./custom-header/custom-header.module";
import { BaseStorefrontModule } from "@spartacus/storefront";
import { I18nModule } from '@spartacus/core';
import { SBoxModule } from "./s-box/s-box.module";
import { TopHModule } from "./top-h/bottom-h.module";
// import { LoginComponent } from "@spartacus/user/account/components";
import { VendorIdModule } from "./vendor-id/vendor-id.module";
// import { CustomLoginComponent } from "./login-greet/custom-login/custom-login.component";



@NgModule({
  declarations: [
    AppComponent,
    
  
    
  ],
  imports: [
   
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    VendorIdModule,
    BaseStorefrontModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    BrowserTransferStateModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    CustomLogoModule,
  I18nModule,
  CustomHeaderModule,
  SBoxModule,
  // CustomLoginComponent,
  TopHModule
   
  ], 
  providers: [],
  // entryComponents:[LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
