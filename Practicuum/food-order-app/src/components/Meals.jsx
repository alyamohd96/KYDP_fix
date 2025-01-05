import { Grid } from "@mui/material";
import MealsItem from "./MealsItem";
import { useContext } from "react";
import ItemsContext from "../context/itemsContext";

const Meals = ({user}) => {

    const { itemsData } = useContext(ItemsContext);

      // Log the itemsData to check if it’s being received correctly
    console.log('Meals component itemsData:', itemsData);

    // Check if itemsData is being correctly fetched
    if (!itemsData || itemsData.length === 0) {
        return <p>No meals available.</p>;
    }

    return (
        <div>
            <Grid
                container
                direction='row'
                spacing={2}
                justifyContent={"flex-start"}
                alignItems="flex-start"
                style={{ backgroundColor: "#FFFFFF", marginTop: "1px", marginLeft: "0px" }}>
                {itemsData.map((meal) => (
                    <Grid item key={meal.id}>
                        <MealsItem
                            name={meal.name}
                            img={meal.image}
                            description={meal.description || "Delicious meal"}
                            price={meal.price}
                            user={user}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );

}

export default Meals;