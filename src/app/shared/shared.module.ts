import { NgModule } from "@angular/core";

import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { HeaderComponent } from "./header/header.component";
import { SiderbarComponent } from "./siderbar/siderbar.component";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";

@NgModule({
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