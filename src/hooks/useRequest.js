import axios from "axios";
import { useState } from "react";

function useRequest(url, method, data) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [response, setResponse] = useState(null);
	try {
		setLoading(true);
		setError("");
		const conrollter = new AbortController();
		(async () => {
			setResponse(await axios.request({ url, method, data, conrollter }));
		})();

		conrollter.abort("No longer needed");
	} catch (error) {
		if (axios.isCancel(error)) {
			return;
		}
		console.log(error);
	} finally {
		setLoading(false);
		return { loading, error, response };
	}
}
