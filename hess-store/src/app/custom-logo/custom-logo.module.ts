import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLogoIntroComponent } from './custom-logo-intro/custom-logo-intro.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';


@NgModule({
  declarations: [
    CustomLogoIntroComponent
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents:{
        // component name // 
        SimpleBannerComponent:{
          component:CustomLogoIntroComponent
        }
      }

    }as CmsConfig)
  ]
})
export class CustomLogoModule { }
