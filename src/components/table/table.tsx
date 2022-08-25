import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Checkbox from '@mui/material/Checkbox';
import estilos from '../table/table.module.css';
import { Button } from '@mui/material';
import { useState } from 'react';
import Modal from './modal/modal';



function createData(
  name: string,
  fecha: string,
  compañia: string,
  precio_actual: number,
) {
  return {
    name,
    fecha,
    compañia,
    precio_actual,
    history: [
      {
        id: 1,
        titulo: 'Estados unidos',
        Hitoria_de_la_consola: 'Estados Unidos es un país de 50 estados que ocupa una extensa franja de América del Norte, con Alaska en el noroeste y Hawái que extiende la presencia del país en el océano Pacífico. Entre las principales ciudades de la costa del Atlántico, se encuentran Nueva York, un centro global financiero y cultural, y la capital Washington D. C. Chicago, metrópolis del medio oeste, es famosa por su influencia arquitectónica y, en la costa oeste, Hollywood, Los Ángeles, es famosa por la industria cinematográfica. ',
      
      },
      
      {
        id: 2,
        titulo: 'Canada',
        
      },
      /*
      {
        id: 3,
        titulo: 'Canada',
      },
      {
        id: 4,
        titulo: 'Canada',
      },
        {
        id: 5,
        titulo: 'Canada',
        },
    */
    ],
  };

}
const titulod =[{
  id: 1,
  titulo: 'Estados unidos',

},
{
  id: 2,
  titulo: 'francia',
},
{
  id: 3,
  titulo: 'Canada',
},

]


  

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const [clickedButton, setClickedButton] = useState('');

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert('seguro que quieres comprar el pasaje a ' + row.name + ' por ' + row.precio_actual + ' pesos?');

    const button: HTMLButtonElement = event.currentTarget;
    setClickedButton(button.name);
  };








  return (
    <React.Fragment>
      <TableRow  sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name} 
        </TableCell>
        <TableCell align="right">{row.fecha}</TableCell>
        <TableCell align="right">{row.compañia}</TableCell>
        <TableCell align="right">{row.precio_actual}</TableCell>
        <TableCell align="right">
        <Modal />
      
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
               {row.history[0].titulo}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.titulo}  >
                      <TableCell component="th" scope="row">
                        {historyRow.Hitoria_de_la_consola}
                      </TableCell>
                    </TableRow>
                  ))}

                 
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('Estados Unidos','10/09/2022', 'Aerolineas Argentina', 100000),
  createData('Paris', '30/09/2022', 'BritishAero',  120000),
  createData('Alemania', '23/10/2022', 'BritishAero',  150000),
  createData('Argentina', '25/08/2022', 'DubaiAero',  80000),
  createData('Canada', '11/11/2022', 'VuelosGino',  190000),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper} elevation={0} className={estilos.contenedorTabla}>
      <Table aria-label="collapsible table" className={estilos.tabla} >
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>PAIS</TableCell>
            <TableCell align="right">FECHA</TableCell>
            <TableCell align="right">COMPAÑIA</TableCell>
            <TableCell align="right">PRECIO ACTUAL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name}  row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
