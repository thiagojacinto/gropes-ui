import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-usuario',
  templateUrl: './dashboard-usuario.component.html',
  styleUrls: ['./dashboard-usuario.component.css']
})
export class DashboardUsuarioComponent implements OnInit {

  constructor() { }

  maisInfo(): void {
    console.log('Mais info sobre !');
  }

  ngOnInit(): void {}

}
