import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import estilos from './modal.module.css';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 400,
  bgcolor: 'rgba(74, 11, 156, 0.999)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
       <Button variant="outlined" onClick={handleOpen}>Comprar</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           <h3>
           Que tenga un buen viaje!
           </h3>
          </Typography>
          <div>
            <ul className={estilos.inputs}>
            <TextField fullWidth className={estilos.textfield}  id="standard-basic" label="Nombre" variant="standard" color='secondary' />
            <TextField  fullWidth className={estilos.textfield} id="standard-basic" label="Apellido" variant="standard" />
            <TextField fullWidth className={estilos.textfield} id="standard-basic" label="Numero de tarjeta" variant="standard" />
            <Button variant='outlined' className={estilos.btncomprar} >Comprar</Button>
            </ul>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
