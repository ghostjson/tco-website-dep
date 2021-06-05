import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import {WhatsappIconComponent} from "../../common-components/whatsapp-icon/whatsapp-icon.component";
import {FacebookIconComponent} from "../../common-components/facebook-icon/facebook-icon.component";
import {ShareIconComponent} from "../../common-components/share-icon/share-icon.component";


@NgModule({
  declarations: [
    HomeComponent,
    WhyUsComponent,
    WhatsappIconComponent,
    FacebookIconComponent,
    ShareIconComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],

})
export class HomeModule { }
