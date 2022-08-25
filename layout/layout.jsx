import React from 'react';
import Appbar from '../src/components/header/header';
import estilos from './layout.module.css';

export default function layout({children}) {
  return (
    <div>
        <Appbar/>
        <main className={estilos.main}>{children}</main>
    </div>
  );
}
