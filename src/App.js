import React from "react";
import Home from "./Componet/Home";
import About from "./Componet/About";
import { BrowserRouter , Routes  , Route} from "react-router-dom";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
