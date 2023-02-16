import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-order',
  templateUrl: './your-order.component.html',
  styleUrls: ['./your-order.component.css']
})
export class YourOrderComponent  implements OnInit{
  constructor(){}

  selectItem = true;
  selectedItem: any
  getItem(data: any){
    // if(data.target.value === "Computer", data.target.value === "Mobile", data.target.value === "Book", data.target.value === "Cloth"){
    //   this.selectItem = true;
    //   console.log("getvalue")
    // }else{
    //   this.selectItem = false;
    //   console.log("getvalue")
    // }
    this.selectedItem = data.target.value;
    console.log(data.target.value);
    
  }
  ngOnInit(): void {
    
  }
}
