import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm"
import firebaseDb from "../firebase";

const Contacts = () => {

    var [contactObjects, setContactObjects] = useState({})
    var [currentId, setCurrentId] = useState('')

    useEffect(() => {
        firebaseDb.child('contacts').on('value', snapshot => {
            if (snapshot.val() != null)
                setContactObjects({
                    ...snapshot.val()
                })
            else
                setContactObjects({})

        })
    }, [])// similar to componentDidMount

    const addOrEdit = obj => {
       
            firebaseDb.child('contacts').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        
    }

    
    return (
        <>
        <ContactForm {...({ addOrEdit, currentId, contactObjects }) } />
        </>
    );
}

export default Contacts;