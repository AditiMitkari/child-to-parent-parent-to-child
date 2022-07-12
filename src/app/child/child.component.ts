import { Component, OnInit,EventEmitter,Output, Input} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
 {

@Output() public Myevent=new EventEmitter();
public Message="Hello parent..";
public SendMessage()
{
  this.Myevent.emit(this.Message);
}

@Input() public Data:any;

}
