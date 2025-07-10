import { LightningElement } from 'lwc';

export default class ConditionalRenderingCMP extends LightningElement {
    
    displaydiv;
    showDivHandler(event){
        //alert("alert is called " +event.target.checked); 
        this.displaydiv = event.target.checked;
        console.log(event.target.checked);
    }
}

    
        
    
    