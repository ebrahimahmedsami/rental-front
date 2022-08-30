import { NgModule } from '@angular/core';
import { UnitRoutingModule } from './unit-routing.module';
import { UnitComponent } from './unit.component';
import { SharedModule } from '../shared/shared.module';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartistModule } from 'ng-chartist';
import { AddUnitComponent } from './add/add-unit.component';
import { InfoComponent } from './info/info.component';
import { GeneralComponent } from './info/general/general.component';
import { LeasesComponent } from './info/leases/leases.component';
import { InvoicesComponent } from './info/invoices/invoices.component';
import { PaymentsComponent } from './info/payments/payments.component';
import { PaymentDetailComponent } from './info/payments/details/payment-detail.component';
import { AddPaymentComponent } from './info/payments/add/add-payment.component';
import { StatusChangeComponent } from './info/payments/status-change/status-change.component';
import { ViewPaymentComponent } from './info/payments/view/view-payment.component';
import {ChartsModule} from "ng2-charts";

@NgModule({
    imports: [
        SharedModule,
        UnitRoutingModule,
        NgxMatSelectSearchModule,
        NgxChartsModule,
        ChartistModule,
        ChartsModule
    ],
    declarations: [
        UnitComponent,
        AddUnitComponent,
        InfoComponent,
        GeneralComponent,
        LeasesComponent,
        InvoicesComponent,
        PaymentsComponent,
        PaymentDetailComponent,
        AddPaymentComponent,
        StatusChangeComponent,
        ViewPaymentComponent
    ]
})

export class UnitModule {

    constructor () {
    }
}
