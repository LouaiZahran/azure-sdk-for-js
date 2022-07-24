// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AnalyzeConversation200Response,
  AnalyzeConversationdefaultResponse,
  ConversationAnalysis200Response,
  ConversationAnalysis202Response,
  ConversationAnalysisdefaultResponse
} from "./responses";

const responseMap: Record<string, string[]> = {
  "POST /:analyze-conversations": ["200"],
  "POST /analyze-conversations/jobs": ["200", "202"],
  "GET /analyze-conversations/jobs": ["200", "202"]
};

export function isUnexpected(
  response: AnalyzeConversation200Response | AnalyzeConversationdefaultResponse
): response is AnalyzeConversationdefaultResponse;
export function isUnexpected(
  response:
    | ConversationAnalysis200Response
    | ConversationAnalysis202Response
    | ConversationAnalysisdefaultResponse
): response is ConversationAnalysisdefaultResponse;
export function isUnexpected(
  response:
    | AnalyzeConversation200Response
    | AnalyzeConversationdefaultResponse
    | ConversationAnalysis200Response
    | ConversationAnalysis202Response
    | ConversationAnalysisdefaultResponse
): response is
  | AnalyzeConversationdefaultResponse
  | ConversationAnalysisdefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
