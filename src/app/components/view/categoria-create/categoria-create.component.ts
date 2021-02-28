import { Categoria } from './../../../model/categoria.model';
import { CategoriaService } from 'src/app/service/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.categoria).subscribe((response) => {
      this.router.navigate(['categoria']);
      this.service.message('Categoria Criada','OK');
    });
  }

  cancel(){
    this.router.navigate(['categoria']);
  }
}
