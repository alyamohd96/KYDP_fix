import { Modal, Typography, Box, Button, TextField } from "@mui/material";
import { useState, useContext } from "react";
import ItemsContext from "../context/itemsContext";

const AddInventory = ({ hidemodleHandler }) => {

    const [open, setOpen] = useState(true);

    const [foodName, setFoodName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const { addNewItem, removeItem, updateItem, uploadImage } = useContext(ItemsContext);

    // Handle file input change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };



    // add new item handler
    const addItemHandler = () => {

        if (!imageFile) {
            alert('Please upload an image.');
            return;
        }

        const imageUrl = uploadImage(imageFile);

        addNewItem({
            name: foodName,
            description: description,
            price: parseFloat(price),
            image: "https://freeimage.host/i/burger.dQcu4ea"
        });
    };

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

    return (
        <div>
            <Modal open={open} onClose={hidemodleHandler}>
                <Box sx={style}>
                    <Typography variant="h6" component="h2" gutterBottom>
                        Add New Food Item
                    </Typography>
                    <TextField
                        label="Food Name"
                        fullWidth
                        value={foodName}
                        onChange={(e) => setFoodName(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Description"
                        fullWidth
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Price"
                        type="number"
                        fullWidth
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        margin="normal"
                    />
                    <Button variant="contained" component="label">
                        Upload Image
                        <input type="file" hidden onChange={(e) => handleImageChange(e.target.value)}/>
                    </Button>

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                        <Button variant="outlined" style={{ marginRight: '8px' }}>
                            Cancel
                        </Button>
                        <Button variant="contained" onClick={addItemHandler}>
                            Add
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );

};

export default AddInventory;