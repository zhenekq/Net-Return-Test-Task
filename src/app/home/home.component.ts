import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public form!: FormGroup;
  submitted = false;
  isCalculate=false;
  agencyFees={
    firsYear:0.3,
    secondYear:0.25,
    otherYears:0.2
  }
  incomePerMonthFirstYear: number = 0;
  incomePerMonthSecondYear: number = 0;
  incomePerMonthThirdYear: number = 0;
  incomeFirstThreeYears: number = 0;
  payBackYear: number = 0;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      price: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      monthlyRent: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      expenses: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    });
  }

  onSubmit(){
    console.log(this.form.value);
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else {
    this.isCalculate=true;
    const price = +this.form.controls['price'].value;
    const rent = +this.form.controls['monthlyRent'].value;
    const expenses = +this.form.controls['expenses'].value;

    this.incomePerMonthFirstYear = (rent-expenses) * (1-this.agencyFees.firsYear);
    this.incomePerMonthSecondYear = (rent-expenses) * (1-this.agencyFees.secondYear);
    this.incomePerMonthThirdYear = (rent-expenses) * (1-this.agencyFees.otherYears)

    const incomeFirstYear = this.incomePerMonthFirstYear * 12;
    const incomeSecondYear = this.incomePerMonthSecondYear * 12;
    const incomeThirdYear = this.incomePerMonthThirdYear * 12;

    this.incomeFirstThreeYears = incomeFirstYear + incomeSecondYear + incomeThirdYear;
    this.payBackYear = Math.round((price - this.incomeFirstThreeYears) / incomeThirdYear + 3);
    }
  }

  get f() { return this.form.controls; }

  onClear(){
    this.submitted=false;
    this.form.reset();
  }

}
