import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnitModel } from '../../../units/model/unit-model';
import { BaseService } from '../../../shared/base-service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UnitService extends BaseService<UnitModel> {
    private selectedLeaseSource = new BehaviorSubject<UnitModel | null>(null);
    selectedLeaseChanges$ = this.selectedLeaseSource.asObservable();

    private  localHttpClient: HttpClient;
    constructor(httpClient: HttpClient) {
        super( httpClient, 'leases');
        this.localHttpClient = httpClient;
    }

    changeSelectedLease(selectedUnit: UnitModel | null ): void {
        this.selectedLeaseSource.next(selectedUnit);
    }


}
