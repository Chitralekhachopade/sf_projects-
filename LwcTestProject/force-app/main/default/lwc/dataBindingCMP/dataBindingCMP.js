import { LightningElement } from 'lwc';

export default class DataBindingCMP extends LightningElement {
    Name = 'chitralekha';
    clickhandler(){
        alert('click handler was called');
        //this.Name = 'chopade';
         
        alert('Button Tag'+ this.template.querySelector('[data-chitralekha = "chitralekhaSecondCustomattr"]').label);
        alert('Button Tag'+ this.template.querySelector('[data-chitralekha = "chitralekhaCustomattr"]').label);
    }
}