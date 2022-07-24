// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  AnalyzeConversationTask,
  AnalyzeConversationJobsInput
} from "./models";

export interface AnalyzeConversationBodyParam {
  /** A single conversational task to execute. */
  body: AnalyzeConversationTask;
}

export interface AnalyzeConversationMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type AnalyzeConversationParameters = AnalyzeConversationMediaTypesParam &
  AnalyzeConversationBodyParam &
  RequestParameters;

export interface ConversationAnalysisBodyParam {
  /** The collection of conversations to analyze and one or more tasks to execute. */
  body: AnalyzeConversationJobsInput;
}

export interface ConversationAnalysisMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type ConversationAnalysisParameters = ConversationAnalysisMediaTypesParam &
  ConversationAnalysisBodyParam &
  RequestParameters;
