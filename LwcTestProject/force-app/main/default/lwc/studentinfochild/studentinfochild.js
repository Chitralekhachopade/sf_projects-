import { LightningElement, track, wire } from 'lwc';
import { registerListener } from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';
export default class Studentinfochild extends LightningElement {
    studentInfo;
    @track studentInfo = {};
    @wire(CurrentPageReference) pageRef;
    connectedCallback(){
        registerListener('pubsubtileclick',this.onstudentSelectHandler,this);
    }
    onstudentSelectHandler(payload){
        console.log('on student select handler was called' + payload);
        this.studentInfo = payload;
    }
}