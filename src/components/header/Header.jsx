import React from "react";
import { Navigation, Profile, SearchBar} from "../";
import "../../css/Header.css";

const Header = () => {
	return (
		<>
			<header className="secondary-dark">
				<ul className="flex header">
					<li>
						<Navigation />
					</li>
					<li>
						<SearchBar />
					</li>
					<li>
						<Profile />
					</li>
				</ul>
			</header>
			<div className="fake"></div>
		</>
	);
};

export default Header;
