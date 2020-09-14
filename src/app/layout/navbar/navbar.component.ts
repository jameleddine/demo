import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


constructor(private translate: TranslateService) {
   translate.addLangs(["en", "fr","ar"]);
   translate.setDefaultLang('en');

   let browserLang = translate.getBrowserLang();
   translate.use(browserLang.match(/en|fr|ar/) ? browserLang : 'en');
  //  translate.use('ar');
}


  ngOnInit() {
  }

}
