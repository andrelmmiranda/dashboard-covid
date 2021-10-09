import { Component, OnInit } from '@angular/core';
import { Register } from '../register.model';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-read',
  templateUrl: './register-read.component.html',
  styleUrls: ['./register-read.component.css']
})
export class RegisterReadComponent implements OnInit {
  register: Register[] = [];
  displayedColumns: string[] = ['id', 'month', 'numberOfCases', 'action'];

  constructor(private registerService: RegisterService){}

  ngOnInit(): void{
    this.registerService.readRegister().subscribe(register =>{
      this.register = register;

      console.log(register);
    })
  }
}
