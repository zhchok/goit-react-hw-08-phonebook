import { useEffect } from "react";

import { getContact } from "Operations/contactOperations";
import { useDispatch } from "react-redux";

const { ContactList } = require("components/Contacts/ContactList");
const { PhonebookForm } = require("components/Form/Form");
const { SearchBox } = require("components/SearchBox/SearchBox");

export default function ContactsViews() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getContact());
	}, [dispatch]);
	return (
		<>
			<PhonebookForm />
			<SearchBox />
			<ContactList />
		</>
	);
}
