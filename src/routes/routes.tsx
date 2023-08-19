
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import Details from "../pages/Details/Details";

const AppRoutes = (): JSX.Element => {
	return (
		<Routes>
			<Route path="/" element={<Main/>} />
			<Route path='/:user' element={<Details/>}/>
		</Routes>
	);
};

export default AppRoutes;
