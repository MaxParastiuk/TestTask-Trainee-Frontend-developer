import axios from "axios";
import { API_URL } from "../constants";

export default axios.create({
	baseURL: "",
	headers: {
		"Content-type": "application/json",
	},
});
