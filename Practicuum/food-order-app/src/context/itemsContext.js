import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const ItemsContext = createContext({
    itemsData: [],
    addNewItem: (item) => { },
    removeItem: (id) => { },
    updateItem: (item) => { },
    uplaodImage: (file) => { }
});

export const ItemsProvider = (props) => {
    const [itemsData, setItemsData] = useState([]);

    // Fetch items from the fake API
    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:3006/foodItems');
            console.log('Fetched items:', response.data); // Add this log to debug
            setItemsData(response.data); // Store the fetched items in state
        } catch (error) {
            console.error('Error fetching food items:', error);
        }
    };

    // Load the items when the provider is first mounted
    useEffect(() => {
        fetchItems();
    }, []);

    // Add a new item to the list (for admin)
    const addNewItemHandler = async (item) => {
        try {
            const response = await axios.post('http://localhost:3006/foodItems', item);
            setItemsData((prevItems) => [...prevItems, response.data]);
        } catch (error) {
            console.error('Error adding new item:', error);
        }
    };

    // Remove an item from the list (for admin)
    const removeItemHandler = async (id) => {
        try {
            await axios.delete(`http://localhost:3006/foodItems/${id}`);
            setItemsData((prevItems) => prevItems.filter(item => item.id !== id));
        } catch (error) {
            console.error('Error removing item:', error);
        }
    };

    // Update an existing item (for admin)
    const updateItemHandler = async (updatedItem) => {
        try {
            await axios.put(`http://localhost:3006/foodItems/${updatedItem.id}`, updatedItem);
            setItemsData((prevItems) =>
                prevItems.map(item => item.id === updatedItem.id ? updatedItem : item)
            );
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    // Upload image to freeimage.host
    const uploadImageHandler = async (file) => {
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('https://freeimage.host/api/1/upload', formData, {
                params: {
                    key: '6d207e02198a847aa98d0a2a901485a5'
                },
            });
            return response.data.image.url;
        } catch (error) {
            console.error('Image upload failed:', error);
            return null;
        }
    };

    const itemsContext = {
        itemsData: itemsData,
        addNewItem: addNewItemHandler,
        removeItem: removeItemHandler,
        updateItem: updateItemHandler,
        uploadImage: uploadImageHandler
    };

    return (
        <ItemsContext.Provider value={itemsContext}>
            {props.children}
        </ItemsContext.Provider>
    );
};

export default ItemsContext;
