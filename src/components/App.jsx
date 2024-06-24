import React from "react";
import { Container, Footer, Header } from "../components";
import { Outlet } from "react-router-dom";
import "../css/App.css";

const App = () => {
	return (
		<>
			<Header />
			<Container>
				<Outlet />
			</Container>
			<Footer />
		</>
	);
};

export default App;
