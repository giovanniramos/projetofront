import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Seplag Serviços';

  isTelaPermitida = false;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          const { id, url } = event;
          const endpoint = url.split('/')[1];

          this.isTelaPermitida = (endpoint === 'painel' || endpoint === 'detalhes');
        }
      });
  }

}
