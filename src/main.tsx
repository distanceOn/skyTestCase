import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import { SearchContextProvider } from "./Contexts/searchContext.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<SearchContextProvider>
			{" "}
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</SearchContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
