import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
       this.matIconRegistry.addSvgIcon(
         'pc-desk',
         this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/pc-desk.svg')
       );
       this.matIconRegistry.addSvgIcon(
         'star-podium',
         this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/star-podium.svg')
       );
       this.matIconRegistry.addSvgIcon(
         'teach-class',
         this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/teach-class.svg')
       );
     }
}
