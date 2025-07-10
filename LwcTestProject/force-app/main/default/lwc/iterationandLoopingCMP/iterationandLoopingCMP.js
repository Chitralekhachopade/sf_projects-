import { LightningElement } from 'lwc';

export default class IterationandLoopingCMP extends LightningElement {
   language='';
   languages = ['Java','Apex','Python','Swift','Ruby','Js'];

   changeHandler(event){
      this.language=event.target.value;
   }
   handlerClick(){
      if(this.language){
         this.languages =[...this.languages,this.language];
         this.language='';
      }
   }
}