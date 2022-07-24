// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { ConversationAnalysisClient } from "./clientDefinitions";

export default function createClient(
  Endpoint: string,
  credentials: TokenCredential | KeyCredential,
  options: ClientOptions = {}
): ConversationAnalysisClient {
  const baseUrl = options.baseUrl ?? `${Endpoint}/language`;
  options.apiVersion = options.apiVersion ?? "2022-05-15-preview";
  options = {
    ...options,
    credentials: {
      scopes: ["https://cognitiveservices.azure.com/.default"],
      apiKeyHeaderName: "ocp-apim-subscription-key"
    }
  };

  const userAgentInfo = `azsdk-js-ai-language-conversations-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix
    }
  };

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as ConversationAnalysisClient;

  return client;
}
