import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TagCloudModule } from 'angular-tag-cloud-module';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillComponent } from './skill/skill.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyComponent } from './company/company.component';
import { CtaComponent } from './cta/cta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeaderComponent,
    SkillsComponent,
    SkillComponent,
    IntroductionComponent,
    DoughnutChartComponent,
    CompaniesComponent,
    CompanyComponent,
    CtaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TagCloudModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
