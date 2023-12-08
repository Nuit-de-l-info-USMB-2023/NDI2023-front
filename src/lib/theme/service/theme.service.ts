import { Injectable } from '@angular/core';
import {Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themeSubject$ = new Subject<string>();

  constructor() {
    this.theme$.subscribe(theme => {
      document.documentElement.setAttribute('data-theme', theme);
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      const newColorScheme = e.matches ? 'dark' : 'light';
      this.setTheme(newColorScheme);
    });

    let theme  = localStorage.getItem('theme');
    if(theme) this.setTheme(theme);
    else window.matchMedia('(prefers-color-scheme: dark)').matches ? this.setTheme('dark') : this.setTheme('light');
  }


  get theme$() {
    return this.themeSubject$.asObservable();
  }

  setTheme(theme: string) {
    this.themeSubject$.next(theme);
    localStorage.setItem('theme', theme);
  }


}
