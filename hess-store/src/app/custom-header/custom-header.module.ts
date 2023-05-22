import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHeaderIdComponent } from './custom-header-id/custom-header-id.component';
import { CmsConfig,ConfigModule } from '@spartacus/core';
import { MatGridListModule } from '@angular/material/grid-list';




@NgModule({
  declarations: [
    CustomHeaderIdComponent,
    
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    ConfigModule.withConfig({
      cmsComponents:{
        SimpleResponsiveBannerComponent:{
          component:CustomHeaderIdComponent
        }
      }

    }as CmsConfig)
    
  ]
})
export class CustomHeaderModule { }
