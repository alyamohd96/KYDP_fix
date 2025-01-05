import { Button } from "@mui/material";

const Footer = ({user, changeRole}) => {
    return(
        <div>
            <Button variant="contained" onClick={changeRole}>{user ? "Admin" : "User" }</Button>
        </div>
    );
};

export default Footer;