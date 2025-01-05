import { Box, Button } from "@mui/material";

const Appbar = ({modleHandler}) => {

    return(
        <div>
            <Box style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>
                <Button variant="contained" onClick={modleHandler} style={{}} >Your Cart</Button>
            </Box>
        </div>
    );
};

export default Appbar;