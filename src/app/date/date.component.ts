import { Component } from "@angular/core";
import { HttpClient , HttpHeaders} from '@angular/common/http';


@Component({
    selector: 'app-date',
    templateUrl: './date.component.html'
})
export class DateComponent{
    constructor(private http: HttpClient) { }
    obj = {
        name: '',
      } 
    message = '';
    display(){
       this.message = 'Date well pushed';
    };
    register(val){
        this.obj.name = val;
        const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
        this.obj.name = val;
        this.http.post('http://localhost:3001/register',  this.obj.name, {
            headers: headers
          })
          .subscribe(data => {
            console.log(data);
          });
    }
}