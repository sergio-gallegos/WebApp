import { CommonModule  } from '@angular/common';
import { NgModule } from '@angular/core';
import { SiteFormComponent } from './site.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../material.module';
import { ControlsModule } from '../../../../components/controls/controls.module';

@NgModule ( {
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    SiteFormComponent
  ],
  exports: [
    SiteFormComponent
  ],
  providers: []
} )
export class SiteFormModule {}
