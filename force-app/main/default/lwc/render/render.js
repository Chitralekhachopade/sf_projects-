import { LightningElement } from 'lwc';

export default class Render extends LightningElement {
    showDetail = false;
    isVisible = false;

    handleCheckboxChange(event) {
        this.showDetail = event.target.checked;
        this.isVisible = this.showDetail;
    }

    handleClick() {
        this.isVisible = !this.isVisible;
    }
}
