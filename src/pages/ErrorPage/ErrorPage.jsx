import { Link } from "react-router-dom";
import stylesErrorPage from "./ErrorPage.module.css";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {MagnifyingGlass} from "react-loader-spinner";

export const ErrorPage = () => {
    return (
        <div className={stylesErrorPage.div}>
            <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="MagnifyingGlass-loading"
                wrapperStyle={{}}
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor = '#c0efff'
                color = '#4C4CFF'
            />
            <h1 className={stylesErrorPage.title}>404</h1>
            <p className={stylesErrorPage.text}>
                Кажется что-то пошло не так! Страница, которую вы запрашиваете, не
                существует. Возможно она устарела, была удалена, или был введен неверный
                адрес в адресной строке
            </p>
            <Link className={stylesErrorPage.link} to="/">
                <Button
                    type={'primary'}
                    size={'small'}
                >
                    Перейти на главную страницу
                </Button>
            </Link>
        </div>
    );
};