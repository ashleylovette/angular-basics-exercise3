import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent implements OnInit {
  orders: string[] = [
    "order 1"
  ]

  timeout: any;

  constructor() { }

  ngOnInit(): void {
  }

  onStartWorkDay() {
    this.timeout = setInterval(() => {
      this.orders.push("order " + (this.orders.length + 1))}, 2000)
  }

  onEndWorkDay() {
    clearInterval(this.timeout);
  }

}
