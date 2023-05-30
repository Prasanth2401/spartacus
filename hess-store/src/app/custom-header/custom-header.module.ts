import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHeaderIdComponent } from './custom-header-id/custom-header-id.component';
import { CmsConfig,ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [
    CustomHeaderIdComponent,
    
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents:{
        BreadcrumbComponent  :{
          component:CustomHeaderIdComponent
        }
      }

    }as CmsConfig)
    
  ]
})
export class CustomHeaderModule { }
