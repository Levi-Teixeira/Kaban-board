import React from 'react';

export const ListContext = React.createContext({});

export const ListProvider = (props) => {


    const [columns, setColumns] = React.useState([
        {
        title: 'To Do',
        color: '#5CC4FF', 
        chores:[
            {name:'Nome da tarefa 1', tag:'Tag 1'},
            {name:'Nome da tarefa 2', tag:'Tag 2'},
            {name:'Nome da tarefa 3', tag:'Tag 3'},
        ]},
        {
        title: 'In Progress',
        color: '#945ad1',
        chores:[],    
        },
        {
        title: 'Done',
        color: '#59d090',
        chores:[{name:'Nome da tarefa 1', tag:'Tag 1'},],
        },
    ]);

    const [toDo, setToDo] = React.useState([
        {name:'Nome da tarefa 1', tag:'Tag 1'},
        {name:'Nome da tarefa 2', tag:'Tag 2'},
        {name:'Nome da tarefa 3', tag:'Tag 3'},
    ]);


    return (
        <ListContext.Provider value={{
            columns,
            setColumns,
            toDo,
            }}>
            {props.children}
        </ListContext.Provider>
    )
};