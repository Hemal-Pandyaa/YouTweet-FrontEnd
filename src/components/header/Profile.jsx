import React from "react";
import "../../css/Header.css";
import { useSelector } from "react-redux";

const Profile = () => {
    const authState = useSelector(state => state.auth.status)

	return (
        <>
        {!authState && <div className="flex auth-buttons">
            <button className="auth-button sign-in">Sign In</button>
            <button className="auth-button sign-up">Sign Up</button>
        </div>}
		{authState && <div className="flex">
			<div className="create-button">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="white"
					className=""
					viewBox="0 0 16 16">
					<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
					<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
				</svg>
			</div>
			<img
				src="/account-placeholder.png"
				className="account-placeholder
            "
			/>
		</div>}
        </>
	);
};

export default Profile;
