import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./AppRoutes"; // Import your main component with the routes

const rootElement = document.getElementById("root");

const renderApp = () => {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AppRoutes /> {/* Render your main component with routes */}
    </React.StrictMode>
  );
};

if (rootElement.hasChildNodes()) {
  // Hydrate if server-rendered content exists
  ReactDOM.hydrate(
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>,
    rootElement
  );
} else {
  renderApp();
}

// Optional: Handle hot module replacement (HMR) if needed
if (module.hot) {
  module.hot.accept("./AppRoutes", () => {
    // Re-render the app when the code changes
    renderApp();
  });
}
