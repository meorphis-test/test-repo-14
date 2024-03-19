// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'meorphis-test-28-st1ky2/core';
import { APIResource } from 'meorphis-test-28-st1ky2/resource';
import * as CardsAPI from 'meorphis-test-28-st1ky2/resources/cards/cards';

export class FinancialTransactions extends APIResource {
  /**
   * Get the card financial transaction for the provided token.
   */
  retrieve(
    cardToken: string,
    financialTransactionToken: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CardsAPI.FinancialTransaction> {
    return this._client.get(
      `/cards/${cardToken}/financial_transactions/${financialTransactionToken}`,
      options,
    );
  }
}
