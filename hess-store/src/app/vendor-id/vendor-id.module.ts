import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomIdComponent } from './custom-id/custom-id.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { BaseStorefrontModule } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';
import { I18nModule } from '@spartacus/core';
import { UrlModule } from '@spartacus/core';
import { CardModule } from '@spartacus/storefront';
import { IconModule } from '@spartacus/storefront';
import { LinkModule } from '@spartacus/storefront';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { LoginComponent } from "@spartacus/user/account/components";



@NgModule({
  declarations: [
    CustomIdComponent,
  ],
  imports: [
    
    ConfigModule.withConfig({
      cmsComponents:{
      LoginComponent:{
          component:CustomIdComponent
        }

      }
    } as CmsConfig),
    CommonModule,
    RouterModule,
    I18nModule,
    UrlModule,
    CardModule,
    

    IconModule,
    LinkModule,
    BaseStorefrontModule,
  ],
   schemas: [
     CUSTOM_ELEMENTS_SCHEMA
   ],
  exports: [CustomIdComponent]
})
export class VendorIdModule { }
