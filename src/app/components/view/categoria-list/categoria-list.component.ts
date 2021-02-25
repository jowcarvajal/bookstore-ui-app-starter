import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];
  
  constructor() { }

  ngOnInit(): void {
    
  }


}
