import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { UtilityModel } from '../model/utility-model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UtilityEntityService extends EntityCollectionServiceBase <UtilityModel> {

    private selectedSource = new BehaviorSubject<UtilityModel | null>(null);
    selectedChanges$ = this.selectedSource.asObservable();

    meta$: Observable<{}>;

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Utility', serviceElementsFactory);

        this.meta$ = this.selectors$['meta$'];
    }

    changeSelected(selected: UtilityModel | null ): void {
        this.selectedSource.next(selected);
    }
}
