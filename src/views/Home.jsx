import React from 'react';
import s from 'Styles.module.css';

const HomeView = () => (
  <div className={s.view__container}>
    <h1 className={s.home__title}>Welcome to the phonebook </h1>
    <div className={s.please__container}></div>
  </div>
);

export default HomeView;
