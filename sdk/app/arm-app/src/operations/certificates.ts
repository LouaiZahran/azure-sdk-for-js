/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Certificates } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerAppsAPIClient } from "../containerAppsAPIClient";
import {
  Certificate,
  CertificatesListNextOptionalParams,
  CertificatesListOptionalParams,
  CertificatesListResponse,
  CertificatesGetOptionalParams,
  CertificatesGetResponse,
  CertificatesCreateOrUpdateOptionalParams,
  CertificatesCreateOrUpdateResponse,
  CertificatesDeleteOptionalParams,
  CertificatePatch,
  CertificatesUpdateOptionalParams,
  CertificatesUpdateResponse,
  CertificatesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Certificates operations. */
export class CertificatesImpl implements Certificates {
  private readonly client: ContainerAppsAPIClient;

  /**
   * Initialize a new instance of the class Certificates class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerAppsAPIClient) {
    this.client = client;
  }

  /**
   * Get the Certificates in a given managed environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param managedEnvironmentName Name of the Managed Environment.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    managedEnvironmentName: string,
    options?: CertificatesListOptionalParams
  ): PagedAsyncIterableIterator<Certificate> {
    const iter = this.listPagingAll(
      resourceGroupName,
      managedEnvironmentName,
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
          managedEnvironmentName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    managedEnvironmentName: string,
    options?: CertificatesListOptionalParams
  ): AsyncIterableIterator<Certificate[]> {
    let result = await this._list(
      resourceGroupName,
      managedEnvironmentName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        managedEnvironmentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    managedEnvironmentName: string,
    options?: CertificatesListOptionalParams
  ): AsyncIterableIterator<Certificate> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      managedEnvironmentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the Certificates in a given managed environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param managedEnvironmentName Name of the Managed Environment.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    managedEnvironmentName: string,
    options?: CertificatesListOptionalParams
  ): Promise<CertificatesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedEnvironmentName, options },
      listOperationSpec
    );
  }

  /**
   * Get the specified Certificate.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param managedEnvironmentName Name of the Managed Environment.
   * @param name Name of the Certificate.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedEnvironmentName: string,
    name: string,
    options?: CertificatesGetOptionalParams
  ): Promise<CertificatesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedEnvironmentName, name, options },
      getOperationSpec
    );
  }

  /**
   * Create or Update a Certificate.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param managedEnvironmentName Name of the Managed Environment.
   * @param name Name of the Certificate.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    managedEnvironmentName: string,
    name: string,
    options?: CertificatesCreateOrUpdateOptionalParams
  ): Promise<CertificatesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedEnvironmentName, name, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes the specified Certificate.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param managedEnvironmentName Name of the Managed Environment.
   * @param name Name of the Certificate.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    managedEnvironmentName: string,
    name: string,
    options?: CertificatesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedEnvironmentName, name, options },
      deleteOperationSpec
    );
  }

  /**
   * Patches a certificate. Currently only patching of tags is supported
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param managedEnvironmentName Name of the Managed Environment.
   * @param name Name of the Certificate.
   * @param certificateEnvelope Properties of a certificate that need to be updated
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    managedEnvironmentName: string,
    name: string,
    certificateEnvelope: CertificatePatch,
    options?: CertificatesUpdateOptionalParams
  ): Promise<CertificatesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedEnvironmentName,
        name,
        certificateEnvelope,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param managedEnvironmentName Name of the Managed Environment.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    managedEnvironmentName: string,
    nextLink: string,
    options?: CertificatesListNextOptionalParams
  ): Promise<CertificatesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedEnvironmentName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{managedEnvironmentName}/certificates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedEnvironmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{managedEnvironmentName}/certificates/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Certificate
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.managedEnvironmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{managedEnvironmentName}/certificates/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Certificate
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.certificateEnvelope,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.managedEnvironmentName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{managedEnvironmentName}/certificates/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.managedEnvironmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{managedEnvironmentName}/certificates/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Certificate
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.certificateEnvelope1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.managedEnvironmentName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.managedEnvironmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
