import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from '../../shared/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaseEntityService } from '../data/lease-entity.service';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { LeaseModel } from '../models/lease-model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddLeaseComponent } from '../add/add-lease.component';

@Component({
    selector: 'robi-view-property',
    styleUrls: ['./view-lease.component.scss'],
    templateUrl: './view-lease.component.html'
})
export class ViewLeaseComponent implements OnInit, AfterViewInit  {

    form: FormGroup;
    generalForm: FormGroup;
    guarantorForm: FormGroup;
    assetForm: FormGroup;

    formErrors: any;

    loader = false;

    memberStatuses: any = [];
    members: any = [];
    guarantorStatues: any = [];

    id: string;

    routeData: any;

    memberData: any;
    memberId = '';
    memberData$: any;

    imageToShow: any;

    landlord$: Observable<any>;

    constructor(private fb: FormBuilder,
                private dialog: MatDialog,
                private propertyEntityService: LeaseEntityService,
                private notification: NotificationService,
                private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');

      /*  this.landlord$ = this.propertyEntityService.entities$
            .pipe(
                map(landlords => {
                   return landlords.find(property => property.id === this.id);
                })
            );*/

     //   this.landlord$ = this.propertyEntityService.selectedLandlordChanges$;
    //    this.landlord$ = this.propertyEntityService.getByKey(this.id);


        /*this.landlord$ = this.propertyEntityService.entities$
            .pipe(
                map(landlords => {
                    this.nextPage++;
                    return landlords;
                })
            );*/

        this.landlord$ = this.propertyEntityService.entities$
            .pipe(
                map(entities => entities.find(property => property.id === this.id))
            );
    }

    /**
     * Add dialog launch
     */
    addDialog(mode: string, property?: LeaseModel) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        dialogConfig.data = {property,
            mode: mode
        };

        const dialogRef = this.dialog.open(AddLeaseComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
            (val) => {
                if ((val)) {
                    // this.loadData();
                }
            }
        );
    }

    onOutletActivated(componentReference) {
    }

    ngAfterViewInit(): void {}

}