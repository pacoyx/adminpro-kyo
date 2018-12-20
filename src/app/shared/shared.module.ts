import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { HeaderComponent } from "./header/header.component";
import { SiderbarComponent } from "./siderbar/siderbar.component";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";

@NgModule({
    imports:[
        RouterModule,CommonModule
    ],

    declarations:[
        BreadcrumbsComponent,
        HeaderComponent,
        SiderbarComponent,
        NopagefoundComponent
    ],
    exports:[
        BreadcrumbsComponent,
        HeaderComponent,
        SiderbarComponent,
        NopagefoundComponent
    ]
})
export class SharedModule { }