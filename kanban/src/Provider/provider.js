import React from 'react';

export const ListContext = React.createContext({});

export const ListProvider = (props) => {


    const [columns, setColumns] = React.useState([
        {
        title: 'To Do',
        color: '#5CC4FF', 
        chores:[],
        }, 
        {
        title: 'In Progress',
        color: '#945ad1',
        chores:[],   
        },
        {
        title: 'Done',
        color: '#59d090',
        chores:[],
        },
    ]);


    return (
        <ListContext.Provider value={{
            columns,
            setColumns,
            }}>
            {props.children}
        </ListContext.Provider>
    )
};