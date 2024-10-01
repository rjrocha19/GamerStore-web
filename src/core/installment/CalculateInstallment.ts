import type Installment from '@/core/installment/Installment'
import { MAX_PARCELA_QUANTITY, MONTHLY_INTEREST_RATE } from '@/data'

export default class CalculateInstallment {
  execute(
    valueTotal: number,
    numberInstallment: number = MAX_PARCELA_QUANTITY,
    interestRate: number = MONTHLY_INTEREST_RATE,

  ): Installment {
    if (numberInstallment < 2 || numberInstallment > MAX_PARCELA_QUANTITY) {
      throw new Error('Invalid number of installment')
    }

    const totalWithInterest = this.CalculateTotalWithInterest\100
  }
}
