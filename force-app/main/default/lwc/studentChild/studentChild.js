import { LightningElement, api } from 'lwc';

export default class StudentChild extends LightningElement {
    @api student;

    handleClick() {
        const selectedEvent = new CustomEvent('studentselect', {
            detail: this.student
        });
        this.dispatchEvent(selectedEvent);
    }
}
