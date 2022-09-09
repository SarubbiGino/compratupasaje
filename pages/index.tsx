
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Table  from '../src/components/table/table'
import Header from '../src/components/header/header'
import { GetServerSideProps } from 'next'
import { Container } from '@mui/system'
import { Button } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { signIn, signOut, useSession } from "next-auth/react"
import { getSession } from 'next-auth/react'

function HomePage() {

  const { data: session, status } = useSession()
  const loading = status === 'loading'


  return (
    <Container className={styles.css}>      
   
   {!session && ( 
      <>
        <h1 className={styles.titulo}>aVolar.ar, compra tus pasajes al mejor precio</h1>
        <div className={styles.contenedortabla}>
          <Table />
        </div>
      </>
    )}
    {session && (
      <>

        <h1 className={styles.titulo}>Bienvenido {session.user?.name} empieza a volar con nosotros!</h1>
        <div className={styles.contenedortabla}>
          <Table />
        </div>
      </>
    )}
    </Container>
  )
}


export default HomePage

