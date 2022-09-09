import React from 'react';
import Appbar from '../header/header';
import estilos from './layout.module.css';
import Footer from '../footer/footer';



export default function layout({children}) {
  return (
    <div>
        <Appbar/>
        <main className={estilos.main}>{children}</main>
        <Footer/>
    </div>
  );
}
