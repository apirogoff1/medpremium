const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || "";

export async function triggerN8nWebhook(event: string, data: Record<string, unknown>) {
  if (!N8N_WEBHOOK_URL) {
    console.warn("N8N_WEBHOOK_URL is not set");
    return;
  }
  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event, data, timestamp: new Date().toISOString() }),
    });
    if (!response.ok) {
      console.error("n8n webhook error:", response.status);
    }
    return response;
  } catch (error) {
    console.error("n8n webhook failed:", error);
  }
}