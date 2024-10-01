import { MAX_PARCELA_QUANTITY, MONTHLY_INTEREST_RATE } from "@/core/constants";
import type Installment from "@/core/installment/Installment";

export default class CalcularInstallment {
  execute(
    value: number,
    amountInstallments: number = MAX_PARCELA_QUANTITY,
    interestRate: number = MONTHLY_INTEREST_RATE
  ): Installment {
    if (amountInstallments < 2 || amountInstallments > MAX_PARCELA_QUANTITY) {
      throw new Error(
        `Quantidade de parcelas deve ser entre 2 e ${MAX_PARCELA_QUANTITY}`
      );
    }

    const totalWithInterest = this.calculateCompoundInterest(
      value,
      interestRate,
      amountInstallments
    );

    return {
      valueInstallment: this.withTwoDecimalPlaces(
        totalWithInterest / amountInstallments
      ),
      totalValue: this.withTwoDecimalPlaces(totalWithInterest),
      interestRate,
      amountInstallments,
    };
  }

  private calculateCompoundInterest(
    totalValue: number,
    monthlyFee: number,
    amountInstallments: number
  ) {
    return totalValue * (1 + monthlyFee / 100) ** amountInstallments;
  }

  private withTwoDecimalPlaces(value: number): number {
    return Math.round(value * 100) / 100;
  }
}
