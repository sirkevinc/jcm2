import React, { useReducer } from "react"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material"

const initialValues = {
    name: "",
    email: "",
    message: "",
}

const initialErrors = {
    name: false,
    email: false,
    message: false,
}

const reducer = (currentState, nextState) => ({ ...currentState, ...nextState });

const [values, setValues] = useReducer(reducer, initialValues);
const [errors, setErrors] = useReducer(reducer, initialErrors);

const onChange = (e) => {
    setValues({ [e.target.id]: e.target.value });
}

const onFocus = (e) => {
    setErrors({ [e.target.id]: false });
}

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
}

