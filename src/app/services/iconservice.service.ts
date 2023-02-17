import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Icons } from './icon-enum'
@Injectable({
  providedIn: 'root'
})
export class IconserviceService {

  constructor( private maticonReg : MatIconRegistry, private domSanitizre : DomSanitizer ) { }

  public registerIcon(){
    this.loadIcons(Object.values(Icons), '../assets/icons');
    console.log(this.loadIcons(Object.values(Icons), '../assets/icons'))
  }
  private loadIcons(iconKeys: string[], iconUrl:string): void {
    iconKeys.forEach(key => {
      this.maticonReg.addSvgIcon(key, this.domSanitizre.bypassSecurityTrustResourceUrl(`${iconUrl}/${key}.svg`));
    });
  }
}
