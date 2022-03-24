import { Injectable } from '@angular/core';
import{respdata} from './respdata'
import{HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
@Injectable()
export class dataservices{

    resultdata:respdata[]
    postUrl:string="https://5dc588200bbd050014fb8ae1.mockapi.io/assessment ";
    httpoptions={
                 headers:new HttpHeaders({

                    'Content-Type':'application/json'
                    

                 })

    };

constructor(private httpclient:HttpClient){}

GET_DETAILS():Observable<any>{


    return this.httpclient.get(this.postUrl,this.httpoptions);
   
    
}


}