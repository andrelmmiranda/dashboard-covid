import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from '../register.model';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-delete',
  templateUrl: './register-delete.component.html',
  styleUrls: ['./register-delete.component.css']
})
export class RegisterDeleteComponent implements OnInit {
  register!: Register;

  constructor(private registerService: RegisterService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id')
    this.registerService.readById(`${id}`).subscribe(register =>{
      this.register = register;
      console.log(this.register)
    });
  }

  delete(): void{
    this.registerService.deleteRegister(`${this.register.id}`).subscribe(()=>{
      this.registerService.showMessage('Registro deletado!')
    })
    this.router.navigate(['registro']);
  }

  cancel(): void{
    this.router.navigate(['registro']);
  }
}