import { Dialog, DialogTitle, IconButton, DialogContent } from "@mui/material";
import { useContext } from "react";
import CloseIcon from '@mui/icons-material/Close';
import {ModalContext} from "../context/modalContext";

interface ModalProps {
    children: React.ReactNode
    title: string
    
}

export default function Modal({ children, title }: ModalProps) {
    const { modal, close } = useContext(ModalContext)

    return (
        <>
            <Dialog
                open={modal}
                onClose={close}
                maxWidth="lg"
                aria-labelledby='dialog-title'
                aria-describedby='dialog-description'
        >
                <DialogTitle id='dialog-title' >
                    {title}

                    <IconButton
                        aria-label="close"
                        onClick={close}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                        }}
                    >
                        <CloseIcon fontSize="large"/>
                    </IconButton>

                </DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>
            </Dialog>
        </>
    );
}
