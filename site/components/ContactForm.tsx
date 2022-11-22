import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';

import styles from "../styles/Contact.module.css"

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xwkzzdwj");
    if (state.succeeded) {
        return <p className={styles.submission__message}>Thanks for reaching out! We will be in touch!</p>
    }

    return (
        <div className={styles.contact__container}>
            <h1>Contact Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email Address
                </label>
                <TextField
                    sx={{ input: { color: "#ffffff", width: "300px", backgroundColor: "#364067" }}}
                    variant="filled"
                    required
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className={styles.contact__field}
                    />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    />
                <label htmlFor="message">
                    Message
                </label>
                <TextField
                    multiline
                    sx={{ textarea: { color: "#ffffff", width: "500px", backgroundColor: "#364067", height: "300px" }}}
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows={8}
                    className={styles.contact__field}
                    />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    />
                <Button type="submit" disabled={state.submitting}>Submit</Button>
            </form>
        </div>
    )
}