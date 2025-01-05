import Appbar from "../components/Appbar";
import { useState } from "react";
import Cart from "../components/Cart";
import AboutUs from "../components/AboutUs";
import Meals from "../components/Meals";

const Users = ({user}) => {

    const [isVisible, setIsVisible] = useState(false);
    const showModalHandler = () => {
        setIsVisible(true);
    };
    const hideModalHandler = () => {
        setIsVisible(false);
    };

    return (
        <div>
            <Appbar modleHandler={showModalHandler} position="fixed"/>
            {isVisible && <Cart hidemodleHandler={hideModalHandler} /> }
            <AboutUs />
            <Meals user={user} />
        </div>
    );
};

export default Users;
