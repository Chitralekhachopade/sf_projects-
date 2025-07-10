import { LightningElement } from 'lwc';

export default class SipCalculator extends LightningElement {
monthlyInvestment = 0;
    annualInterestRate = 0;
    years = 0;
    maturityAmount = null;
    totalInvested = null;
    estimatedReturns = null;

    handleInput(event) {
        const label = event.target.label;
        const value = parseFloat(event.target.value);
        if (label.includes('Monthly')) this.monthlyInvestment = value;
        if (label.includes('Annual')) this.annualInterestRate = value;
        if (label.includes('Duration')) this.years = value;
    }

    calculateSIP() {
        const P = this.monthlyInvestment;
        const r = this.annualInterestRate / 100 / 12;
        const n = this.years * 12;

        const maturity = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
        this.maturityAmount = maturity.toFixed(2);
        this.totalInvested = (P * n).toFixed(2);
        this.estimatedReturns = (maturity - P * n).toFixed(2);
    }
}
