import { LightningElement, track } from 'lwc';
import getAccRecords from '@salesforce/apex/imeprativeApexCntrl.getAccRecords';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import {clabel} from 'c/customlabelutility';
export default class ImperativeApexCMP extends LightningElement {
   @track result=[];
    clabel={Custom_Button_Lable};
   //async 
   clickHandler(){
        /*getAccRecords().then(function(res){
            alert('result :' +JSON.stringify(res));
        }).catch(function(error){
            alert('error :' +error);
        })*/
        
        alert('label from custom label:' +Custom_Button_Lable);
        
        //alert('alert await get records:'+ JSON.stringify(await getAccRecords()));
        getAccRecords()
        .then(res=>{
            this.result = res;
                const event = new ShowToastEvent({
                    title: "Account Records ",
                    message: this.result[0].Name,
                    variant: 'success'
                });
                this.dispatchEvent(event);
                console.log(res);
            })
            
        .catch(error=>{
        })
    }
}

