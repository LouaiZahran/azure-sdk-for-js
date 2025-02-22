/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PlacementPolicies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureVMwareSolutionAPI } from "../azureVMwareSolutionAPI";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  PlacementPolicy,
  PlacementPoliciesListNextOptionalParams,
  PlacementPoliciesListOptionalParams,
  PlacementPoliciesListResponse,
  PlacementPoliciesGetOptionalParams,
  PlacementPoliciesGetResponse,
  PlacementPoliciesCreateOrUpdateOptionalParams,
  PlacementPoliciesCreateOrUpdateResponse,
  PlacementPolicyUpdate,
  PlacementPoliciesUpdateOptionalParams,
  PlacementPoliciesUpdateResponse,
  PlacementPoliciesDeleteOptionalParams,
  PlacementPoliciesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PlacementPolicies operations. */
export class PlacementPoliciesImpl implements PlacementPolicies {
  private readonly client: AzureVMwareSolutionAPI;

  /**
   * Initialize a new instance of the class PlacementPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: AzureVMwareSolutionAPI) {
    this.client = client;
  }

  /**
   * List placement policies in a private cloud cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster in the private cloud
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: PlacementPoliciesListOptionalParams
  ): PagedAsyncIterableIterator<PlacementPolicy> {
    const iter = this.listPagingAll(
      resourceGroupName,
      privateCloudName,
      clusterName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(
          resourceGroupName,
          privateCloudName,
          clusterName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: PlacementPoliciesListOptionalParams
  ): AsyncIterableIterator<PlacementPolicy[]> {
    let result = await this._list(
      resourceGroupName,
      privateCloudName,
      clusterName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        privateCloudName,
        clusterName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: PlacementPoliciesListOptionalParams
  ): AsyncIterableIterator<PlacementPolicy> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      privateCloudName,
      clusterName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List placement policies in a private cloud cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster in the private cloud
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: PlacementPoliciesListOptionalParams
  ): Promise<PlacementPoliciesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateCloudName, clusterName, options },
      listOperationSpec
    );
  }

  /**
   * Get a placement policy by name in a private cloud cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster in the private cloud
   * @param placementPolicyName Name of the VMware vSphere Distributed Resource Scheduler (DRS) placement
   *                            policy
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    placementPolicyName: string,
    options?: PlacementPoliciesGetOptionalParams
  ): Promise<PlacementPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateCloudName,
        clusterName,
        placementPolicyName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Create or update a placement policy in a private cloud cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster in the private cloud
   * @param placementPolicyName Name of the VMware vSphere Distributed Resource Scheduler (DRS) placement
   *                            policy
   * @param placementPolicy A placement policy in the private cloud cluster
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    placementPolicyName: string,
    placementPolicy: PlacementPolicy,
    options?: PlacementPoliciesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PlacementPoliciesCreateOrUpdateResponse>,
      PlacementPoliciesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PlacementPoliciesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        privateCloudName,
        clusterName,
        placementPolicyName,
        placementPolicy,
        options
      },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update a placement policy in a private cloud cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster in the private cloud
   * @param placementPolicyName Name of the VMware vSphere Distributed Resource Scheduler (DRS) placement
   *                            policy
   * @param placementPolicy A placement policy in the private cloud cluster
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    placementPolicyName: string,
    placementPolicy: PlacementPolicy,
    options?: PlacementPoliciesCreateOrUpdateOptionalParams
  ): Promise<PlacementPoliciesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      privateCloudName,
      clusterName,
      placementPolicyName,
      placementPolicy,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update a placement policy in a private cloud cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster in the private cloud
   * @param placementPolicyName Name of the VMware vSphere Distributed Resource Scheduler (DRS) placement
   *                            policy
   * @param placementPolicyUpdate The placement policy properties that may be updated
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    placementPolicyName: string,
    placementPolicyUpdate: PlacementPolicyUpdate,
    options?: PlacementPoliciesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PlacementPoliciesUpdateResponse>,
      PlacementPoliciesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PlacementPoliciesUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        privateCloudName,
        clusterName,
        placementPolicyName,
        placementPolicyUpdate,
        options
      },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update a placement policy in a private cloud cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster in the private cloud
   * @param placementPolicyName Name of the VMware vSphere Distributed Resource Scheduler (DRS) placement
   *                            policy
   * @param placementPolicyUpdate The placement policy properties that may be updated
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    placementPolicyName: string,
    placementPolicyUpdate: PlacementPolicyUpdate,
    options?: PlacementPoliciesUpdateOptionalParams
  ): Promise<PlacementPoliciesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      privateCloudName,
      clusterName,
      placementPolicyName,
      placementPolicyUpdate,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a placement policy in a private cloud cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster in the private cloud
   * @param placementPolicyName Name of the VMware vSphere Distributed Resource Scheduler (DRS) placement
   *                            policy
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    placementPolicyName: string,
    options?: PlacementPoliciesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        privateCloudName,
        clusterName,
        placementPolicyName,
        options
      },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a placement policy in a private cloud cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster in the private cloud
   * @param placementPolicyName Name of the VMware vSphere Distributed Resource Scheduler (DRS) placement
   *                            policy
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    placementPolicyName: string,
    options?: PlacementPoliciesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      privateCloudName,
      clusterName,
      placementPolicyName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster in the private cloud
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    nextLink: string,
    options?: PlacementPoliciesListNextOptionalParams
  ): Promise<PlacementPoliciesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateCloudName, clusterName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PlacementPoliciesList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.clusterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PlacementPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.clusterName,
    Parameters.placementPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PlacementPolicy
    },
    201: {
      bodyMapper: Mappers.PlacementPolicy
    },
    202: {
      bodyMapper: Mappers.PlacementPolicy
    },
    204: {
      bodyMapper: Mappers.PlacementPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.placementPolicy,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.clusterName,
    Parameters.placementPolicyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.PlacementPolicy
    },
    201: {
      bodyMapper: Mappers.PlacementPolicy
    },
    202: {
      bodyMapper: Mappers.PlacementPolicy
    },
    204: {
      bodyMapper: Mappers.PlacementPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.placementPolicyUpdate,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.clusterName,
    Parameters.placementPolicyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.clusterName,
    Parameters.placementPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PlacementPoliciesList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.clusterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
