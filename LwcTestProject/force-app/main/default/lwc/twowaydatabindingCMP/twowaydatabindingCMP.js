import { LightningElement } from 'lwc';

export default class TwowaydatabindingCMP extends LightningElement {
    result = '';
    changeInputhandler(event){
    //alert(event.target.value);
        this.result = event.target.value;
    alert(this.template.querySelector('lightning-input').value);   
    }
}