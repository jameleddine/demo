import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AjoutComponent } from './pages/ajout/ajout.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { LayoutRoutingModule } from './layout-routing.module';
import {HttpClientModule, HttpClient} from "@angular/common/http";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { SearchPipe } from './pipes/search.pipe';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [LayoutComponent, NavbarComponent, SidebarComponent, ContainerComponent, FooterComponent, DashboardComponent, AjoutComponent, GestionComponent, SearchPipe],
  imports: [
    CommonModule,
    FormsModule,
    LayoutRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  // exports:[LayoutComponent]
})
export class LayoutModule { }
