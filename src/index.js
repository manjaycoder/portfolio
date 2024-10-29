/**
 * Entry point of application, where App is rendered within the div with the id of "app" 
 */


import { createRoot } from "react-dom/client"; // Updated for React 18
import App from "./App";

const container = document.getElementById("app");
const root = createRoot(container); // Create a root for React 18

root.render(<App />); // Render the App component
