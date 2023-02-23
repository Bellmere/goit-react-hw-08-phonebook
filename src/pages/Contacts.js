import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactList } from "components/ContactList/ContactList";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { Loader } from "./Loader/Loader";
import { getIsLoading, getError } from "Redux/Contacts/Selectors";
import { fetchContacts } from "Redux/Contacts/operations";

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);

      return (
        <div
        style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            color: '#010101',
        }}
        >
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <Loader/>}
        <ContactList />
    </div>
      );
};