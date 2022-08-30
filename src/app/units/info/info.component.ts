import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UnitModel } from '../model/unit-model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {
  IBarChartOptions,
  IChartistAnimationOptions,
  IChartistData
} from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';
import { UnitDataSource } from '../data/unit-data.source';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { selectorIsLandlord, selectorUserID } from '../../authentication/authentication.selectors';
import { LandlordService } from '../../landlords/data/landlord.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { UnitService } from '../data/unit.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {


  id: string;

    type: ChartType = 'Bar';
    type2: ChartType = 'Line';
    type3: ChartType = 'Pie';
    data: IChartistData = {
        labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        series: [
            [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
            [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
        ]
    };

    options: IBarChartOptions = {
        axisX: {
            showGrid: true
        },
        height: 250
    };

    events: ChartEvent = {
        draw: (data) => {
            if (data.type === 'bar') {
                data.element.animate({
                    y2: <IChartistAnimationOptions>{
                        dur: '0.5s',
                        from: data.y1,
                        to: data.y2,
                        easing: 'easeOutQuad'
                    }
                });
            }
        }
    };

    saleData = [
        { name: 'Jan', value: 105000 },
        { name: 'Feb', value: 55000 },
        { name: 'March', value: 15000 },
        { name: 'April', value: 150000 },
        { name: 'May', value: 20000 },
        { name: 'June', value: 20000 },
        { name: 'July', value: 20000 },
        { name: 'August', value: 20000 },
        { name: 'September', value: 20000 },
        { name: 'October', value: 20000 },
        { name: 'November', value: 20000 },
        { name: 'December', value: 20000 }
    ];
    isLandlord = false;
    landlordID: string;
    dataSource: UnitDataSource;
    unitID: string;
    unit$: Observable<any>;
    unitData$: Observable<UnitModel>;
    isAdmin$: Observable<boolean>;
  propertyService: any;
  landlordService: any;
  constructor(private router: Router, private route: ActivatedRoute,
    private unitsService: UnitService,){}

  ngOnInit(): void {
    this.dataSource = new UnitDataSource(this.unitsService);
    this.unitID = this.route.snapshot.paramMap.get('id');
    this.unitsService.getById(this.unitID).subscribe(unit => {
      this.unitData$ = of(unit);
      this.unitsService.changeSelectedUnit(unit);
  });


  }
  

}
