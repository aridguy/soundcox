import React, { useState } from "react";
import './Nav.css';
import Cart from '../../Assets/Cart.png';
import Menu from '../../Assets/Menu.png';
import Search from '../../Assets/Search.png';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

   


const Nav = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
      const style = {
          position: 'absolute',
          top: '30%',
          left: '70%',
          transform: 'translate(-50%, -50%)',
          width: 700,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        };
    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Search Here
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <input className="form-control" type="text" placeholder="search for your favourite music here" />
                    </Typography>
                </Box>
            </Modal>

            <nav className="nav navbar-light">
                <ul>
                    <li><img width="32px" src={Menu} alt="menus"/></li>
                    <li>HOME</li>
                    <li>HEADPHONES</li>
                    <li>ABOUT US</li>
                    <li>CONTACT US</li>
                    <li><img onClick={handleOpen} width="32px" src={Search} alt="search" /></li>
                    <li><img width="32px" src={Cart} alt="cartss" /></li>
                  
                </ul>

            </nav>

        </div>
    );
}

export default Nav