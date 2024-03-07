export class PendingPayment {
    partnerName: string | undefined;
    totalPaymentAmount: number | undefined;
    paymentPending: {
        [key: string]: number;
    } | undefined;
}