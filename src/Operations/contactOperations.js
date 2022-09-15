import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContactError, addContactRequest, addContactSucces } from "redux/contactActions";

import { addContactApi, deleteContactApi, getContactApi } from "utils/Api";

export const getContact = createAsyncThunk("contact/getContact", async (_, thunkApi) => {
	try {
		const contact = await getContactApi();
		return contact;
	} catch (error) {
		return thunkApi.rejectWithValue(error.message);
	}
});

export const addContact = contact => dispatch => {
	dispatch(addContactRequest());

	addContactApi(contact)
		.then(newContact => dispatch(addContactSucces(newContact)))
		.catch(err => dispatch(addContactError(err.message)));
};

export const deleteContact = createAsyncThunk("contact/deleteContact", async (contactId, thunkApi) => {
	try {
		await deleteContactApi(contactId);

		return contactId;
	} catch (error) {
		return thunkApi.rejectWithValue(error.message);
	}
});
