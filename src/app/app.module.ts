import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Tabs } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabArticlePage } from '../pages/tab-article/tab-article';
import { TabContactPage } from '../pages/tab-contact/tab-contact';
import { TabHomePage } from '../pages/tab-home/tab-home';
import { TabCoursePage } from '../pages/tab-course/tab-course';
import { TabServicePage } from '../pages/tab-service/tab-service';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SidePortforlioPage } from '../pages/side-portforlio/side-portforlio';
import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SideSettingPage } from '../pages/side-setting/side-setting';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    TabArticlePage,
    TabContactPage,
    TabHomePage,
    TabCoursePage,
    TabServicePage,
    TabsPage,
    SidePaymentPage,
    SidePortforlioPage,
    SideSchedulePage,
    SideSettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabArticlePage,
    TabContactPage,
    TabHomePage,
    TabCoursePage,
    TabServicePage,
    TabsPage,
    SidePaymentPage,
    SidePortforlioPage,
    SideSchedulePage,
    SideSettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
