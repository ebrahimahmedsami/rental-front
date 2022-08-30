import { BaseModel } from '../../../../shared/models/base-model';

export class LeaseGeneralSettingModel extends BaseModel {
    agent_id: string;
    generate_invoice_on: number;
    lease_number_prefix: string;
    next_lease_number: string;
    invoice_number_prefix: string;
    invoice_footer: string;
    invoice_terms: string;
    show_payment_method_on_invoice: string;
    next_period_billing: boolean;
    skip_starting_period: boolean;
    auto_renw_activation: boolean;
    waive_penalty: boolean;
    discount_value: any;
    discount_type: any;
}
