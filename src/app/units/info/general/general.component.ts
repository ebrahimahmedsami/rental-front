import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import { UnitService } from '../../data/unit.service';
import { UnitModel } from '../../model/unit-model';
import { ActivatedRoute } from '@angular/router';
import { ChartType } from 'chart.js';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

    public barChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels = [];
    public barChartType = 'bar'  as ChartType;
    public barChartLegend = true;
    public barChartData = [];

    public pieChartLabels = ['Pending', 'Paid', 'Billed'];
    public pieChartData$: Observable<[any, any, any]>;
    public pieChartType = 'doughnut' as ChartType;
    options = {
        responsive: true,
        maintainAspectRatio: false
    }

  memberData: any;
  memberId = '';
  memberData$: any;

  profilePicUrl: string;
  profilePicFileToUpload: File = null;

  imageToShow: any;

  loader = false;
  memberShipForm = false;

  unit$: Observable<UnitModel>;

  id: string;
  unitData: any;
  constructor(private unitService: UnitService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.unit$ = this.unitService.selectedUnitChanges$;

        this.id = this.route.snapshot.paramMap.get('id');

        this.unitService.selectedUnitChanges$.subscribe(data => {
            this.unitData = data;
        });

        if (this.unitData == null) {
            this.unit$ = this.unitService.getById(this.id);
        }

      this.pieChartData$ = of([
          this.unitData?.billing?.amount_pending,
          this.unitData?.billing?.amount_paid,
          this.unitData?.billing?.amount_billed,
      ]);
  }

}
