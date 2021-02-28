import { CategoriaService } from 'src/app/service/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from './../../../model/categoria.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  categoria: Categoria = {
    id:'',
    nome:'',
    descricao:''
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: CategoriaService
  ) {}

  ngOnInit(): void {
    this.categoria.id = this.activatedRoute.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.categoria.id!).subscribe((response)=>{
      this.categoria = response;
      console.log(this.categoria);
    });
  }

  update(): void {
    this.service.update(this.categoria).subscribe((response)=>{
      this.router.navigate(['categoria']);
      this.service.message('Cagetoria Alterada', 'OK');
    }, err => {
        this.service.message('Verificar erros no preenchimento de campos. ','OK');
    });
  }

  cancel(){
    this.router.navigate(['categoria']);
  }
}
