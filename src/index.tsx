import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Logo, BurgerIcon, ListIcon, ProfileIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <header className={'headers'}>
        <nav className={'headers-nav pb-4 pt-4'}>
            <ul className={'headers-ul'}>
                <li className={'headers-li pr-4'}>
                    <BurgerIcon type={"primary"}/>
                    <p className={'text text_type_main-default pl-2'}>Конструктор</p>
                </li>
                <li className={'headers-li pr-4'}>
                    <ListIcon type={"secondary"}/>
                    <p className={'text text_type_main-default text_color_inactive pl-2'}>Лента заказов</p>
                </li>
            </ul>
            <Logo />
            <ul className={'headers-profile'}>
                <li className={'headers-li pr-4'}>
                    <ProfileIcon type={"secondary"}/>
                    <p className={'text text_type_main-default text_color_inactive pl-2'}>Личный кабинет</p>
                </li>
            </ul>
        </nav>
    </header>
      <section className={'constructor-section'}>
          <ul className={'constructor-ul'}>
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
                      thumbnail={'https://code.s3.yandex.net/react/code/meat-04.png'}
                  />
                  <ConstructorElement
                      text="Краторная булка N-200i (верх)"
                      price={50}
                      thumbnail={'https://code.s3.yandex.net/react/code/meat-01.png'}
                  />
                  <ConstructorElement
                      text="Краторная булка N-200i (верх)"
                      price={50}
                      thumbnail={'https://code.s3.yandex.net/react/code/sauce-02.png'}
                  />
                  <ConstructorElement
                      text="Краторная булка N-200i (верх)"
                      price={50}
                      thumbnail={'https://code.s3.yandex.net/react/code/meat-02.png'}
                  />
                  <ConstructorElement
                      text="Краторная булка N-200i (верх)"
                      price={50}
                      thumbnail={'https://code.s3.yandex.net/react/code/sauce-03.png'}
                  />
                  <ConstructorElement
                      type="bottom"
                      isLocked={true}
                      text="Краторная булка N-200i (низ)"
                      price={200}
                      thumbnail={'https://code.s3.yandex.net/react/code/bun-01.png'}
                  />
              </div>
          </ul>


      </section>










  </React.StrictMode>
);


reportWebVitals();
