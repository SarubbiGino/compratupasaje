import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Table  from '../src/components/table/table'
import Header from '../src/components/header/header'
import Layout from '../layout/layout'


const Home: NextPage = () => {
  return (
   <Layout>
    <h1 className={styles.titulo}>aVolar.ar, compra tus pasajes al mejor precio</h1>
      <div className={styles.contenedortabla}>
        <Table />
      </div>
   </Layout>
  )
}

export default Home
