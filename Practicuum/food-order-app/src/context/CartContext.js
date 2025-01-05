import React, { useReducer, createContext, useEffect } from 'react';
import axios from 'axios';

// Initial state of the cart
const defaultCartState = {
    items: [],
    totalAmount: 0
};

// Reducer function to handle adding and removing items from the cart
const cartReducer = (state, action) => {
    if (action.type === 'SET_ITEMS') {
        return {
            items: action.items,
            totalAmount: action.totalAmount
        };
    }

    if (action.type === 'ADD_ITEM') {
        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;
        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        const updatedTotalAmount = state.totalAmount - existingCartItem.price;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    return defaultCartState;
};

// Create the CartContext
const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    fetchCart: () => {}
});

// CartProvider component to provide cart context to the app
export const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    // Fetch cart items from the API
    const fetchCartItems = async () => {
        try {
            const response = await axios.get('http://localhost:3006/cartItems');
            const cartItems = response.data;

            const totalAmount = cartItems.reduce((sum, item) => {
                return sum + item.price * item.amount;
            }, 0);

            dispatchCartAction({
                type: 'SET_ITEMS',
                items: cartItems,
                totalAmount: totalAmount
            });
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    };

    useEffect(() => {
        fetchCartItems();
    }, []);

    const addItemToCartHandler = async (item) => {
        try {
            const existingItem = cartState.items.find(i => i.id === item.id);
            console.log("existingItem " + item.id);
            if (existingItem) {
                await axios.put(`http://localhost:3006/cartItems/${item.id}`, {
                    ...existingItem,
                    amount: existingItem.amount + item.amount
                });
            } else {
                await axios.post('http://localhost:3006/cartItems', item);
            }

            dispatchCartAction({ type: 'ADD_ITEM', item: item });
        } catch (error) {
            console.error("Error adding item to cart:", error);
        }
    };

    const removeItemFromCartHandler = async (id) => {
        try {
            const existingItem = cartState.items.find(i => i.id === id);

            if (existingItem.amount === 1) {
                await axios.delete(`http://localhost:3006/cartItems/${id}`);
            } else {
                await axios.put(`http://localhost:3006/cartItems/${id}`, {
                    ...existingItem,
                    amount: existingItem.amount - 1
                });
            }

            dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
        } catch (error) {
            console.error("Error removing item from cart:", error);
        }
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        fetchCart: fetchCartItems
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContext;
