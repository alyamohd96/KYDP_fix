import { Card, CardMedia, CardContent, CardActions, Typography, Button } from "@mui/material";
//import DeleteIcon from '@mui/icons-material/Delete';
//import img from "../assets/laksa.jpg";
import CartContext from "../context/CartContext";
import { useContext } from "react";
import ItemsContext from "../context/itemsContext";


const MealsItem = ({ name, description, image, price, id, user }) => {

    const foodName = "Food";
    const foodDescription = "Food Description";
    const { addItem } = useContext(CartContext);
    const { updateItem, removeItem } = useContext(ItemsContext);

    // add item to cart
    const addToCartHandler = () => {
        addItem({
            id,
            name,
            amount: 1, // You can make this dynamic if needed
            price
        });
    };

    // handle deleting the item for admins
    const deleteItemHandler = () => {
        removeItem(id);
    };

    return (

        <div style={{ padding: "0px" }}>
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={image}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {description}
                        <br />
                        ${price.toFixed(2)}
                    </Typography>
                </CardContent>
                <CardActions>
                    {user ?
                        (<Button size="small" onClick={addToCartHandler}>Add to cart</Button>) :
                        (<div>
                            <Button size="small" onClick={updateItem()}>Edit</Button>
                            <Button size="small" onClick={removeItem}>Delete</Button>
                        </div>
                        )}
                </CardActions>
            </Card>
        </div>
    );

}

export default MealsItem;