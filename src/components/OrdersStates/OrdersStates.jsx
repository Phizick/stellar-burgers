import stylesOrdersStates from './OrdersStates.module.css'

export const OrderStates = () => {
    return (
        <div className={stylesOrdersStates.container}>
            <div className={stylesOrdersStates.head}>
                <div className={stylesOrdersStates.listContainer}>
                    <h2 className={stylesOrdersStates.title}>Готовы:</h2>
                    <ul className={stylesOrdersStates.list}>
                        <li className={`text text_type_digits-default ${stylesOrdersStates.li}`}>034533</li>
                        <li className={`text text_type_digits-default ${stylesOrdersStates.li}`}>034532</li>
                        <li className={`text text_type_digits-default ${stylesOrdersStates.li}`}>034530</li>
                        <li className={`text text_type_digits-default ${stylesOrdersStates.li}`}>034527</li>
                        <li className={`text text_type_digits-default ${stylesOrdersStates.li}`}>034525</li>
                    </ul>
                </div>
                <div className={stylesOrdersStates.listContainer}>
                    <h2 className={stylesOrdersStates.title}>В работе:</h2>
                    <ul className={stylesOrdersStates.list}>
                        <li className={`text text_type_digits-default ${stylesOrdersStates.li}`}>034538</li>
                        <li className={`text text_type_digits-default ${stylesOrdersStates.li}`}>034541</li>
                        <li className={`text text_type_digits-default ${stylesOrdersStates.li}`}>034542</li>

                    </ul>
                </div>
            </div>
            <div className={stylesOrdersStates.content}>
                <h2 className={stylesOrdersStates.title}>Выполнено за все время:</h2>
                <p className={`text text_type_digits-large ${stylesOrdersStates.text}`}>28 752</p>
            </div>
            <div className={stylesOrdersStates.content}>
                <h2 className={stylesOrdersStates.title}>Выполнено за сегодня:</h2>
                <p className={`text text_type_digits-large ${stylesOrdersStates.text}`}>138</p>
            </div>
        </div>
    )
}