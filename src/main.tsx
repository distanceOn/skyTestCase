import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import { SearchContextProvider } from "./Contexts/searchContext.tsx";

ReactDOM.render(
	<React.StrictMode>
		<SearchContextProvider>
			{" "}
			<App />
		</SearchContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
