import { Categoria } from "./../../../model/categoria.model";
import { CategoriaService } from "./../../../service/categoria.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-categoria-delete",
  templateUrl: "./categoria-delete.component.html",
  styleUrls: ["./categoria-delete.component.css"],
})
export class CategoriaDeleteComponent implements OnInit {
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

  delete(): void {
    this.service.delete(this.categoria.id!).subscribe((response)=>{
      this.router.navigate(['categoria']);
      this.service.message('Cagetoria deletada', 'OK');
    }, err => {
      this.service.message(err.error.error, 'OK');
    });
  }

  cancel(){
    this.router.navigate(['categoria']);
  }
}
