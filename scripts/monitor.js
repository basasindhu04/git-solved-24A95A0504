// Monitoring Script - Combined Production + Development Features

function monitorService() {
  console.log("Monitoring service...");

  // Core monitoring logic (from main)
  const status = checkSystemStatus();
  console.log("System status:", status);

  // Dev enhancements (from dev)
  if (process.env.NODE_ENV === "development") {
    console.log("[DEV] Detailed debug logs enabled.");
    console.log("[DEV] CPU Load:", getCpuLoad());
    console.log("[DEV] Memory Usage:", getMemoryUsage());
  }
}

function checkSystemStatus() {
  return "OK";
}

// Development helper functions
function getCpuLoad() {
  return Math.random().toFixed(2); // Simulated load
}

function getMemoryUsage() {
  return (Math.random() * 100).toFixed(2) + "%";
}

// Start monitoring
setInterval(monitorService, 5000);

