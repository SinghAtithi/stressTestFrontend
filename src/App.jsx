import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Editor from "./components/Editor";
import Footer from "./components/Footer";
import SecretPage from "./components/SecretPage";

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						<Navbar />
						<Editor />
						<Footer />
					</>
				}
			/>
			<Route path="/shhSecret" element={<SecretPage />} />
		</Routes>
	);
}

export default App;
