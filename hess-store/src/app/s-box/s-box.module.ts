import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSBoxComponent } from './custom-s-box/custom-s-box.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [
    CustomSBoxComponent
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents:{
        JspIncludeComponent :{
        component:CustomSBoxComponent
        }
      }
    }as CmsConfig)
  ]
})
export class SBoxModule { }
