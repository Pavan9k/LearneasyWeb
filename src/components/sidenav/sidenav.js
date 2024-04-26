import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './sidenav.css';
import options from './options.png';

function SideNav() {
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    

    return (
        <div className='sidenav'>
            <Button variant="light" onClick={handleShow}>
                <img src={options} alt='' height='30px' />
            </Button>

            <Offcanvas show={show} onHide={handleClose} style={{width: 260 }}>
                <Offcanvas.Header closeButton style={{width: 260 }}>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <Button className='primary' onClick={handleClose}>ASDASD</Button>
                    </div>
                    <button>1</button>

                    <button>1</button>

                    <button>1</button>

                    <button>1</button>

                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default SideNav;