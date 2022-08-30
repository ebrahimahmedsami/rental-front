import { BaseModel } from '../../shared/models/base-model';

export class LeaseModel extends BaseModel {
    agent_id: string;
    property_id: string;
    property: {property_name, property_code}
    lease_number: string;
    unit_id: string;
    lease_type_id: string;
    start_date: string;
    rent_amount: string;
    rent_deposit: string;
    due_on: string;
    unit_names: string;
    tenant_names: string;
    terminated_on: string;

    generate_invoice_on: string;
    next_period_billing: boolean;
    skip_starting_period: boolean;
    auto_renw_activation: boolean;
    waive_penalty: boolean;

    lease_type: any;
    payments_invoicing: any;
    terms: any;
    utility_deposits: any;
    utility_charges: any;
    extra_charges: any;
    late_fees: any;
    units: any;
    terminate_user: any;

    created_by: string;
    updated_by: string;
    end_date: any;
    files: any;
    propose: any;
    discount_type: any;
    discount_value: any;
}
