export class AddPaymentRequestDto {
  constructor(
    public readonly clientId: number,
    public readonly price: number,
    public readonly promotion: number
  ) {}
}