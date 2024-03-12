// File generated from our OpenAPI spec by Stainless.

import * as Core from 'meorphis-test-28-st1ky2/core';
import { APIResource } from 'meorphis-test-28-st1ky2/resource';
import * as StatusAPI from 'meorphis-test-28-st1ky2/resources/status';

export class Status extends APIResource {
  /**
   * API status check
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<StatusRetrieveResponse> {
    return this._client.get('/status', options);
  }
}

export interface StatusRetrieveResponse {
  message?: string;
}

export namespace Status {
  export import StatusRetrieveResponse = StatusAPI.StatusRetrieveResponse;
}
