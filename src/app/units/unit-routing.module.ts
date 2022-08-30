import { Routes, RouterModule } from '@angular/router';
import { UnitComponent } from './unit.component';
import { InfoComponent } from './info/info.component';
import { GeneralComponent } from './info/general/general.component';
import { LeasesComponent } from './info/leases/leases.component';
import { InvoicesComponent } from './info/invoices/invoices.component';
import { PaymentsComponent } from './info/payments/payments.component';
import { ViewPaymentComponent } from './info/payments/view/view-payment.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: UnitComponent
    },
    {
        path: ':id',
        component: InfoComponent,
        children: [
            { path: '', component: GeneralComponent },
            { path: 'leases', component: LeasesComponent },
            { path: 'invoices', component: InvoicesComponent },
            { path: 'payments', component: PaymentsComponent,children: [] },
            { path: 'payments/recip/:id', component: ViewPaymentComponent },

        ]
    },
  
];


export const UnitRoutingModule = RouterModule.forChild(ROUTES);
