// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AnalyzeConversationParameters,
  ConversationAnalysisParameters
} from "./parameters";
import {
  AnalyzeConversation200Response,
  AnalyzeConversationdefaultResponse,
  ConversationAnalysis200Response,
  ConversationAnalysis202Response,
  ConversationAnalysisdefaultResponse
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface AnalyzeConversation {
  /** Analyzes the input conversation utterance. */
  post(
    options: AnalyzeConversationParameters
  ): StreamableMethod<
    AnalyzeConversation200Response | AnalyzeConversationdefaultResponse
  >;
}

export interface ConversationAnalysis {
  /** Submit a collection of conversations for analysis. Specify one or more unique tasks to be executed. */
  post(
    options: ConversationAnalysisParameters
  ): StreamableMethod<
    | ConversationAnalysis200Response
    | ConversationAnalysis202Response
    | ConversationAnalysisdefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/:analyze-conversations' has methods for the following verbs: post */
  (path: "/:analyze-conversations"): AnalyzeConversation;
  /** Resource for '/analyze-conversations/jobs' has methods for the following verbs: post */
  (path: "/analyze-conversations/jobs"): ConversationAnalysis;
}

export type ConversationAnalysisClient = Client & {
  path: Routes;
};
