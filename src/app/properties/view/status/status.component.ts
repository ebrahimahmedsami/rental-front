import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {PropertyModel} from "../../models/property-model";
import {PropertyService} from "../../data/property.service";
import {ActivatedRoute} from "@angular/router";
import {ChartType} from "chart.js";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  memberData: any;
  memberId = '';
  memberData$: any;
  expenses: any;
  revenue: any;
  expenses_sum: number = 0;
  revenue_sum: number = 0;

  profilePicUrl: string;
  profilePicFileToUpload: File = null;

  imageToShow: any;

  loader = false;
  memberShipForm = false;

  property$: Observable<PropertyModel>;

  id: string;
  propertyData: any;


  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };


  public pieChartLabels = ['Expense', 'Revenue'];
  public pieChartData$: Observable<[any, any]>;
  public pieChartType = 'doughnut' as ChartType;
  options = {
    responsive: true,
    maintainAspectRatio: false
  }

  constructor(private propertyService: PropertyService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.property$ = this.propertyService.selectedPropertyChanges$;

    this.id = this.route.snapshot.paramMap.get('id');

    this.propertyService.selectedPropertyChanges$.subscribe(data => {
      this.propertyData = data;
    });

    if (this.propertyData == null) {
      this.property$ = this.propertyService.getById(this.id);
    }

    this.property$.subscribe(value => {
      this.expenses =  value.expenses
      this.revenue =  value.revenue
      this.revenue_sum =  value.revenue_sum
      this.expenses_sum =  value.expenses_sum

    })

    this.pieChartData$ = of([
      this.expenses_sum,
      this.revenue_sum,
    ]);
  }



}
