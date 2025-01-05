import AddInventory from "../components/AddInventory";
import Meals from "../components/Meals";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const Admin = ({user}) => {

    const [isVisible, setIsVisible] = useState(false);
    const showModalHandler = () => {
        setIsVisible(true);
    };
    const hideModalHandler = () => {
        setIsVisible(false);
    };

    return (
        <div className="admin-main-container">
            <div>
            <Box style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>
                <Button variant="contained" onClick={showModalHandler} >Add item</Button>
                {isVisible && <AddInventory hidemodleHandler={hideModalHandler} /> }
            </Box>
        </div>
            <h2>
                Available Foods
            </h2>
            <Meals user={user} />            
        </div>
    );
};

export default Admin;