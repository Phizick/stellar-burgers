import React, {FC, ReactNode} from "react";
import stylesForm from "./Form.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";


interface IForm {
    FormSubmitFunc: () => void;
    formTitle: string;
    children: ReactNode;
    buttonText: string;
    firstQuestion: string;
    ForwardLinkFirst: string;
    firstQuestionLinkText: string;
    secondQuestion: string;
    ForwardLinkSecond: string;
    secondQuestionLinkText: string;
}

export const Form: FC<IForm> = (props) => {
    return (
        <form className={stylesForm.form} onSubmit={props.FormSubmitFunc}>
            <h1 className={stylesForm.formTitle}>{props.formTitle}</h1>
            <ul className={stylesForm.formList}>{props.children}</ul>
            <div className={stylesForm.formBtn}>
                <Button type="primary" size="medium" htmlType={'button'} onClick={props.FormSubmitFunc}>
                    {props.buttonText}
                </Button>
            </div>
            {props.firstQuestion && (
                <p className={stylesForm.text}>
                    {props.firstQuestion}
                    <Link to={props.ForwardLinkFirst} className={stylesForm.link}>
                        {props.firstQuestionLinkText}
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
    );
};


