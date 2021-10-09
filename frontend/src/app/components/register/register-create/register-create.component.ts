import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Month, Register } from '../register.model';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-create',
  templateUrl: './register-create.component.html',
  styleUrls: ['./register-create.component.css']
})
export class RegisterCreateComponent implements OnInit {

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

  constructor(private router: Router, private registerService: RegisterService) { }

  register: Register = {
    month: '',
    numberOfCases: 0
  };

  ngOnInit(): void {
  }

  newRegister(): void{
    const { month, numberOfCases } = this.register;

    if(month === '' || numberOfCases < 0 || this.register === undefined){
      this.registerService.showMessage('O campos precisam ser preenchidos!');
      return;
    }

    this.registerService.createRegister(this.register).subscribe(()=>{
      this.registerService.showMessage('Registrado com sucesso!');
    })
    this.router.navigate(['/registro']);
  }

  cancel(): void{
    this.router.navigate(['/registro']);
  }
}
