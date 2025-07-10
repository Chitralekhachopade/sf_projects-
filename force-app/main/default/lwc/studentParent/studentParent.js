import { LightningElement,track } from 'lwc';

export default class StudentParent extends LightningElement {
     @track students = [
        { name: 'Sonali', age: 25, rollNumber: '11' },
        { name: 'teena', age: 22, rollNumber: '12' },
        { name: 'Payal', age: 24, rollNumber: '13' },
        { name: 'mona', age: 28, rollNumber: '14' },
        { name: 'reema', age: 18, rollNumber: '15' }
    ];

    @track selectedStudent = null;
    handleStudentClick(event) {
        this.selectedStudent = event.detail;
    }
}