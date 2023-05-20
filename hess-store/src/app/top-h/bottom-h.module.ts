import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule ,CmsConfig} from '@spartacus/core';
import { CustomHComponent } from './bottom-h/custom-h.component';



@NgModule({
  declarations: [
    CustomHComponent
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents:{
        FooterNavigationComponent:{
          component:CustomHComponent
        }

      }
     
    }as CmsConfig)
  ]
})
export class TopHModule { }
