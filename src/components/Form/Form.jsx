import React from "react";
import stylesForm from './Form.module.css';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link} from "react-router-dom";

export const Form = (props) => {
    return (
        <form className={stylesForm.form} onSubmit={props.FormSubmitFunc}>
            <h1 className={stylesForm.formTitle}>{props.formTitle}</h1>
            <ul className={stylesForm.formList}>
                {props.children}
            </ul>
            <div className={stylesForm.formBtn}>
                <Button type='primary' size='medium'>
                    {props.buttonText}
                </Button>
            </div>
            {props.firstQuestion && (<p className={stylesForm.text}>
                {props.firstQuestion}
                <Link to={props.ForwardLinkFirst} className={stylesForm.link}>
                    {props.fistQuestionLinkText}
                </Link>
            </p>
                )}
            {props.secondQuestion && (
            <p className={stylesForm.text}>
                {props.secondQuestion}
                <Link to={props.ForwardLinkSecond} className={stylesForm.link}>
                    {props.secondQuestionLinkText}
                </Link>
            </p>
            )}
        </form>
    )
};