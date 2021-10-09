import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Month, Register } from '../register.model';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-update',
  templateUrl: './register-update.component.html',
  styleUrls: ['./register-update.component.css']
})
export class RegisterUpdateComponent implements OnInit {
  register: Register = {
    month: '',
    numberOfCases: 0,
  };

  months: Month[] = [
    {value: 'Janeiro', viewValue: 'Janeiro'},
    {value: 'Fevereiro', viewValue: 'Fevereiro'},
    {value: 'Março', viewValue: 'Março'},
    {value: 'Abril', viewValue: 'Abril'},
    {value: 'Maio', viewValue: 'Maio'},
    {value: 'Junho', viewValue: 'Junho'},
    {value: 'Julho', viewValue: 'Julho'},
    {value: 'Agosto', viewValue: 'Agosto'},
    {value: 'Setembro', viewValue: 'Setembro'},
    {value: 'Outubro', viewValue: 'Outubro'},
    {value: 'Novembro', viewValue: 'Novembro'},
    {value: 'Dezembro', viewValue: 'Dezembro'}
  ];

  constructor(
    private registerService: RegisterService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id')
    this.registerService.readById(id!).subscribe(register =>{
      this.register = register;
    })
  }

  update(): void{
    const { month, numberOfCases } = this.register;

    if(month === '' || numberOfCases < 0 || this.register === undefined){
      this.registerService.showMessage('O campos devem estar preenchidos!');
      return;
    }

    if(isNaN(numberOfCases)){
      this.registerService.showMessage('N° de casos de ver um número!');
      return;
    }

    this.registerService.updateRegister(this.register).subscribe(()=>{
      this.registerService.showMessage('Registro atualizado!');
      this.router.navigate(['/registro']);
    })
  }

  cancel(): void{
    this.router.navigate(['/registro']);
  }

}
