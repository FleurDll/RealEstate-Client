import React, { useState, useEffect } from 'react';
import sanityClient from "../../../client";
import { init } from 'emailjs-com';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { ContactContainer, SendButtonWrap, LoadingIcon, ContactH1, ContactWrap, ContactForm } from "./ContactElements";
import SendCard from '../../cards/sendCard';

const Contact = ({ setShowModal, showModal, setShowModalError, showModalError, emailJSKey }) => {

    init(emailJSKey.user);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [sendButton, setSendButton] = useState(true);
    const [loading, setLoading] = useState(false);
    const [textData, setTextData] = useState(null);

    const windowWidth = window.innerWidth;

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "contactText"]{
            title
        }`)
            .then((data) => setTextData(data[0]))
            .catch(console.error);
    }, []);

    const useStyles = makeStyles({
        input: {
            margin: "10px",
            width: "450px"
        }
    });

    const useStylesSmallScreen = makeStyles({
        input: {
            margin: "10px",
            width: "250px"
        }
    });

    const classes = useStyles();

    const classesSmallScreen = useStylesSmallScreen();

    const isEmail = () => {
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; //verify email

        if (email.match(regex)) {
            return true;
        } else {
            return false;
        }
    };

    const successMessage = () => {
        setError(false);
        setLoading(false);
        setShowModal(true);
        setSendButton(true);
    };

    const hangleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSendButton(false);

        if (name && isEmail() && message) {
            sendFeedback(emailJSKey.template, {
                name,
                phone,
                email,
                message,
            });
        } else {
            setError(true);
            setLoading(false);
            setSendButton(true);
        }
    };

    const sendFeedback = (templateId, variables) => {
        window.emailjs
            .send(emailJSKey.service, templateId, variables)
            .then((res) => {
                successMessage();
                setName("");
                setPhone("");
                setEmail("");
                setMessage("");
            })
            .catch(
                (err) => {
                    setSendButton(true);
                    setShowModalError(true);
                    setLoading(false);
                }
            );
    };

    if (!textData) return <div></div>;

    return (
        <ContactContainer id="contact">
            <ContactWrap >
                <ContactForm noValidate autoComplete="off">
                    <ContactH1>{textData.title}</ContactH1>
                    <TextField
                        className={windowWidth > 500 ? classes.input : classesSmallScreen.input}
                        {...(error ? { error } : {})}
                        required
                        id="name-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label={showModal | showModalError ? "" : "Nom"}
                        type="text"
                        variant="outlined"
                    />
                    <TextField
                        className={windowWidth > 500 ? classes.input : classesSmallScreen.input}
                        id="phone-input"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        label={showModal | showModalError ? "" : "Téléphone"}
                        type="text"
                        variant="outlined"
                    />
                    <TextField
                        className={windowWidth > 500 ? classes.input : classesSmallScreen.input}
                        {...(error ? { error } : {})}
                        required
                        id="email-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label={showModal | showModalError ? "" : "Email"}
                        type="text"
                        variant="outlined"
                    />
                    <TextField
                        className={windowWidth > 500 ? classes.input : classesSmallScreen.input}
                        {...(error ? { error } : {})}
                        required
                        id="message-input"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        label={showModal | showModalError ? "" : "Message"}
                        multiline
                        rows={12}
                        variant="outlined"
                    />
                    {loading && <LoadingIcon />}
                    {sendButton &&
                        <SendButtonWrap onClick={hangleSubmit}>
                            <SendCard />
                        </SendButtonWrap>
                    }
                </ContactForm>
            </ContactWrap>
        </ContactContainer>
    );
};

export default Contact;