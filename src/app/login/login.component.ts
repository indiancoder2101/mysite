import { Component , OnInit} from '@angular/core';
import { LogInsService } from '../services/log-ins.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private Login:LogInsService){

  }
  // inputValue : string = "";

  clickMe(data: any){
  
    console.warn(data);
    this.Login.userLogin(data).subscribe((result)=>{
      console.warn(result);
    });
  }
  ngOnInit(): void {
    
  }

}
