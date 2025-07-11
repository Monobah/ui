


import React from "react";
import Preview from "./Preview";
import Features from "./Features";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Templates from "../common/Templates";

const MainHome = () => {
	return (
		<>
		<Templates />		
			<div className="preview-iframe-wrapper">
				<HeaderOne />
				<Preview />
				<Features />
				<FooterOne />
			</div>
		</>
	);
};

export default MainHome;
