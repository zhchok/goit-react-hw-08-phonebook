import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const addContactApi = async contact => {
	const res = await axios.post("/contacts", contact);
	return res.data;
};

export const getContactApi = async () => {
	const res = await axios.get("/contacts");
	return res.data;
};

export const deleteContactApi = async contactId => {
	const res = await axios.delete(`/contacts/${contactId}`, contactId);
	return res.data.id;
};
