import { BillingInterval, LATEST_API_VERSION } from "@shopify/shopify-api";
import { shopifyApp } from "@shopify/shopify-app-express";
import { MySQLSessionStorage } from "@shopify/shopify-app-session-storage-mysql"; // Use MySQLSessionStorage instead of SQLiteSessionStorage
import { restResources } from "@shopify/shopify-api/rest/admin/2023-10";
import mysql from 'mysql2/promise'; // Import the MySQL package


const billingConfig = {
  "My Shopify One-Time Charge": {
    amount: 5.0,
    currencyCode: "USD",
    interval: BillingInterval.OneTime,
  },
};



const shopify = shopifyApp({
  api: {
    apiVersion: LATEST_API_VERSION,
    restResources,
    billing: undefined,
  },
  auth: {
    path: "/api/auth",
    callbackPath: "/api/auth/callback",
  },
  webhooks: {
    path: "/api/webhooks",
  },
 
  sessionStorage: new MySQLSessionStorage("mysql://galaxy:Admin@123@172.18.0.2/tinytags_design_and_option"),
});

export default shopify;
