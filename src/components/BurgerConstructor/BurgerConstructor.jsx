import React from 'react';
import stylesBurgerConstructor from '../BurgerConstructor/BurgerConstructor.module.css'
import {ConstructorElement,CurrencyIcon,Button,DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerConstructor = () => {
    return (
        <section className={`${stylesBurgerConstructor.section} mt-25`}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                />
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={200}
                    thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                />
            </div>


        </section>
    )
}

export default BurgerConstructor
