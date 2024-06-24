import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchButton = () => {
	const navigate = useNavigate();
	const [searchValue, setSearchValue] = useState("");
	const handleSubmit = e => {
		if (searchValue.trim() !== "") navigate("/search/" + searchValue);
	};
	return (
		<div>
			<form onSubmit={handleSubmit} className="search-form">
				<input
					type="search"
					value={searchValue}
					onChange={e => setSearchValue(e.target.value)}
					className="search-input"
				/>
				<button
					type="submit"
					onClick={handleSubmit}
					className="search-button">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						fill="currentColor"
						class="bi bi-search"
						viewBox="0 0 16 16">
						<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
					</svg>
				</button>
			</form>
		</div>
	);
};

export default SearchButton;
