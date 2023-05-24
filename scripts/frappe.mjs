import { FrappeApp } from "frappe-js-sdk";

async function createExpense() {
  try {
    const SITE_URL = "https://ui.local:8000";
    const API_KEY = "321ba36f45fd2f0";
    const API_SECRET = "6c5684d41a0ab0a";

    const frappe = new FrappeApp(SITE_URL, {
      useToken: true,
      token: () => `${API_KEY}:${API_SECRET}`,
      type: "token", // use "bearer" in case of OAuth token
    });

    const db = frappe.db(); // Initialize the `db` class

    await db.createDoc("Expense", { for: "Coffee", amount: 120 });

    console.log("Expense created successfully!");
  } catch (error) {
    console.error("Error creating expense:", error);
  }
}

// Call the async function
createExpense();
