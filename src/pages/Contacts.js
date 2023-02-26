import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ContactList } from "components/ContactList/ContactList";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { getIsLoading } from "Redux/Contacts/Selectors";
import { fetchContacts } from "Redux/Contacts/operations";

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);

    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);

      return (
        <HelmetProvider>
          <div
            style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            color: '#010101',
          }}
          >
          <Helmet>
            <title>Phonebook</title>
          </Helmet>
          <ContactForm />
          {isLoading && <Loader/>}
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
        </HelmetProvider>
      );
};