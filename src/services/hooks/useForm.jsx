import {useState} from "react";
import PropTypes from "prop-types";

export const useForm = (inputValues) => {
    const [values, setValues] = useState(inputValues);

    const handleChange = (event) => {
        const {value, name} = event.target;
        setValues({...values, [name]: value});
    };
    return {values, handleChange, setValues};
}

useForm.propTypes = {
    inputValues: PropTypes.object.isRequired
}