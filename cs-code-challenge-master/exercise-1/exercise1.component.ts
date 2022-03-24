import { Component ,OnInit} from '@angular/core';
import{POSTData,respdata} from './postdata';
import{dataservices} from'./Dataservice';
import { NgForm,ReactiveFormsModule } from '@angular/forms';
import{ FormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ExerciseComponent implements OnInit{
  public myForm: NgForm;
  resultdata:respdata
  data:string;
  postD:POSTData;
  resutdata:respdata;
  POSTData: any;
  StateID:number;
  Cityname:string;
  InsuranceID:number;

  constructor( private DataServices:dataservices){}
  ngOnInit() {
  
  }
  senddata()
  {

    
    
       this.DataServices.GET_DETAILS().subscribe((res)=>{
         this.resultdata=res;
           
        this.resultdata=JSON.parse(res.Data);

        console.log(this.resultdata);
    
    });
  }
}
