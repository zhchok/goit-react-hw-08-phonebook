const { createAction } = require("@reduxjs/toolkit");

const fetchContactSuccess = createAction("contact/fetchContactSuccess");
const fetchContactRequest = createAction("contact/fetchContactRequest");
const fetchContactError = createAction("contact/fetchContactError");

const addContactRequest = createAction("contact/addRequest");
const addContactSucces = createAction("contact/addSucces");
const addContactError = createAction("contact/addError");

const deleteContactRequest = createAction("contact/deleteRequest");
const deleteContactSucces = createAction("contact/deleteSucces");
const deleteContactError = createAction("contact/deleteError");

export {
	addContactError,
	addContactRequest,
	addContactSucces,
	deleteContactError,
	deleteContactSucces,
	deleteContactRequest,
	fetchContactSuccess,
	fetchContactRequest,
	fetchContactError,
};
