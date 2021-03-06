import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { timer } from 'rxjs/observable/timer';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CalendarPage } from '../pages/calendar/calendar';
import { ChannelsPage } from '../pages/channels/channels';
import { ContactPage } from '../pages/contact/contact';
import { ServicesPage } from '../pages/services/services';
import { ShowsPage } from '../pages/shows/shows';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Shows', component: ShowsPage },
      { title: 'Calendar', component: CalendarPage },
      { title: 'Services', component: ServicesPage },
      { title: 'Channels', component: ChannelsPage },
      { title: 'Contact Us', component: ContactPage}
    ];

  }

   showSplash = true; // <-- show animation
   
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(() => this.showSplash = false) // <-- hide animation after 3s
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
