/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MonitorClient } = require("@azure/arm-monitor");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets an autoscale setting
 *
 * @summary Gets an autoscale setting
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2015-04-01/examples/getAutoscaleSetting.json
 */
async function getAnAutoscaleSetting() {
  const subscriptionId = "b67f7fec-69fc-4974-9099-a26bd6ffeda3";
  const resourceGroupName = "TestingMetricsScaleSet";
  const autoscaleSettingName = "MySetting";
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.autoscaleSettings.get(resourceGroupName, autoscaleSettingName);
  console.log(result);
}

getAnAutoscaleSetting().catch(console.error);
