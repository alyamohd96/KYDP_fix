import { Modal, Typography, Box, Button } from "@mui/material";
import { useState, useContext } from "react";
import CartContext from "../context/CartContext"; 


const Cart = ({ hidemodleHandler }) => {

    const { items, totalAmount, addItem, removeItem } = useContext(CartContext);
    const [open, setOpen] = useState(true);

    //styling of the Modal
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        borderRadius: '10px',
        boxShadow: 15,
        p: 4,
    };

    // return 
    return (
        <div>
            <Modal open={open} onClose={hidemodleHandler}>
                <Box sx={style}>
                    <h3>Your cart</h3>
                    <div>
                        {items.map((item) => (
                            <Box
                                key={item.id}
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                mb={2}
                            >
                                <Box>
                                    <Typography variant="body1">{item.name}</Typography>
                                    <Typography variant="body2">
                                        ${item.price.toFixed(2)} x {item.amount}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        onClick={() => removeItem(item.id)}
                                    >
                                        -
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        onClick={() => addItem({ ...item, amount: 1 })}
                                        style={{ marginLeft: '8px' }}
                                    >
                                        +
                                    </Button>
                                </Box>
                            </Box>
                        ))}
                        <Typography variant="h6">
                            Total Amount: ${totalAmount.toFixed(2)}
                        </Typography>
                    </div>
                </Box>
            </Modal>
        </div>

    );

};

export default Cart;