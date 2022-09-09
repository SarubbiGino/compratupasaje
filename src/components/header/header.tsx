import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import estilos from './header.module.css';
import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react"
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react';
import LoginIcon from '@mui/icons-material/Login';

const pages = ['Vuelos', 'Paquetes', 'Alquileres'];
const settings = ['Perfil', 'Cuenta', <a
  href={`/api/auth/signout`}
  onClick={(e) => {
    e.preventDefault()
    signOut()
  }}
>
  Cerrar sesion
</a>];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { data: session, status } = useSession()
  const loading = status === 'loading'






  return (
    <AppBar position="static" className={estilos.Appbar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           aVolar.ar
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" justifyContent="center">{page}</Typography>
                </MenuItem>
              ))}

            </Menu>

          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            aVolar.ar
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent="center" gap="50px">
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <div className={estilos.signedInStatus}>
            <p
              className={`nojs-show ${!session && loading ? estilos.loading : estilos.loaded
                }`}
            >
              {!session && (
                <>


<a
                    href={`/api/auth/signin`}
                    className={estilos.buttonPrimary2}
                    onClick={(e) => {
                      e.preventDefault()
                      signIn()
                    }}

                  >
                    Iniciar sesion
                  </a>



                  <a
                    href={`/api/auth/signin`}
                    className={estilos.buttonPrimary}
                    onClick={(e) => {
                      e.preventDefault()
                      signIn()
                    }}

                  >
                    <LoginIcon /> 
                  </a>

                </>
              )}
              {session?.user && (
                <>
                  <span
                    style={{ backgroundImage: `url(${session.user.image})` }}
                    className={estilos.avatar}
                  />
                  <span className={estilos.signedInText}>

                    <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          <Avatar alt="Remy Sharp" src={session.user.image} />
                        </IconButton>
                      </Tooltip>
                      <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                        {settings.map((setting) => (
                          <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">{setting}</Typography>


                          </MenuItem>
                        ))}

                      </Menu>
                    </Box>

                  </span>

                </>
              )}
            </p>
          </div>


        </Toolbar>
      </Container>
    </AppBar>
  );
};



export default ResponsiveAppBar;
