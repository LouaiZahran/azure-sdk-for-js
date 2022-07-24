// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  AnalyzeConversationTaskResultOutput,
  ErrorResponseOutput,
  AnalyzeConversationJobStateOutput
} from "./outputModels";

/** Analyzes the input conversation utterance. */
export interface AnalyzeConversation200Response extends HttpResponse {
  status: "200";
  body: AnalyzeConversationTaskResultOutput;
}

export interface AnalyzeConversationdefaultHeaders {
  /** The error code for specific error that occurred. */
  "x-ms-error-code"?: string;
}

/** Analyzes the input conversation utterance. */
export interface AnalyzeConversationdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
  headers: RawHttpHeaders & AnalyzeConversationdefaultHeaders;
}

/** Submit a collection of conversations for analysis. Specify one or more unique tasks to be executed. */
export interface ConversationAnalysis200Response extends HttpResponse {
  status: "200";
  body: AnalyzeConversationJobStateOutput;
}

export interface ConversationAnalysis202Headers {
  "operation-location"?: string;
}

/** Submit a collection of conversations for analysis. Specify one or more unique tasks to be executed. */
export interface ConversationAnalysis202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ConversationAnalysis202Headers;
}

/** Submit a collection of conversations for analysis. Specify one or more unique tasks to be executed. */
export interface ConversationAnalysisdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
