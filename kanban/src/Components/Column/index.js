import {Main, Assignment, Tag, Button} from './styles';
import {FiPlus} from 'react-icons/fi';
import { FiTrash } from 'react-icons/fi';
import { AiOutlineEdit } from 'react-icons/ai';
import { React, useContext, useState} from 'react';
import { ListContext } from "../../Provider/provider";

const Columns = () =>{

    const {columns, setColumns} = useContext(ListContext);
    const [isActive, setIsActive] = useState(false);

    let dragged = ''
    let destiny = ''

    const addChore = (id) =>{    
        const modifiedItem = columns[id];
        const newChores = ([...columns[id].chores, {name:'Nova tarefa', tag:'Tag'}]);  // Utilizando Spread operator para alterar valores de um objeto.
        const newitem =({...modifiedItem, chores: newChores});
        const obj =({...columns, [id] : newitem});
        setColumns(Object.values(obj)) 
   
    }

    const removeChore = (i, key) => {
        const list = columns[i];
        const removed = (list.chores[key]);
        const newChores = columns[i].chores.filter((n) => n !== removed);       // Filtrando o valor a ser removido de dentro do array.
        const newitem = ({...list, chores: newChores});
        const obj =({...columns, [i] : newitem});
        setColumns(Object.values(obj))
    };

    const dragStart = (i, key) =>{
        const list = columns[i];
        dragged = (list.chores[key]);
    }

    const dragOver = (i) =>{
        destiny = columns[i];
    }

    const dragEnd = (i, key) =>{
        if(destiny !== columns[i]){
            destiny.chores.push(dragged)
            const obj = ({...columns, [columns.indexOf(destiny)] : destiny });
            setColumns(Object.values(obj));
            removeChore(i,key);     
        }
    }

    const editChore = (i, key) =>{
        setIsActive(!isActive)
        const list = columns[i].chores[key];
        const state = columns[i].chores[key].editing;
        const newItem = ({...list, editing : !state})
        const newChores = Object.values(({...columns[i].chores, [key] : newItem }));  // Transformando o valor em editável ou não.
        const newColumn = ({...columns[i], chores : newChores});
        const obj = ({...columns, [i]: newColumn});
        setColumns(Object.values(obj));
    }

    const handleChange = (e, i, key) =>{
        const newName = ({...columns[i].chores[key], name: e.target.value});
        const newChores = Object.values(({...columns[i].chores,[key] : newName}));    // Alterando o valor do atributo com base no valor do input
        const newColumn = ({...columns[i], chores : newChores});
        const obj = ({...columns, [i]: newColumn});
        setColumns(Object.values(obj));
    }

    const handleTagChange = (e, i, key) =>{
        const newTag = ({...columns[i].chores[key], tag: e.target.value});
        const newChores = Object.values(({...columns[i].chores,[key] : newTag}));
        const newColumn = ({...columns[i], chores : newChores});
        const obj = ({...columns, [i]: newColumn});
        setColumns(Object.values(obj));
    }

    const editColumn = (i) =>{
        const state = columns[i].editing;
        const list = columns[i];
        const newItem =({...list, editing : !state});
        const obj = ({...columns, [i]: newItem});
        setColumns(Object.values(obj));
    }

    const handleColumnChange = (e, i) =>{
        const newItem = ({...columns[i], title: e.target.value});
        const obj = ({...columns, [i]: newItem});
        setColumns(Object.values(obj));
    }

    return(
        <>
        {columns.map((item, i)=>(
            <Main key={i} onDragOver={e=> dragOver(i)}  color={item.color}>
            
            <div id='row'>
                {!item.editing ? 
                
                <h1>{item.title}</h1> 
                :
                <input value={item.title} onChange={e=>handleColumnChange(e, i)} type='text'/>    // Renderizando um <h1> ou um <input> caso o modo de edição esteja habilitado ou não. 

                }
                        
                {i > 2 &&                                                                         // Botões a serem habilitados apenas nas colunas criadas posteriormente.
                <button id='edit' onClick={e=> editColumn(i)} className={item.editing ? 'active' : ''}> 
                    <AiOutlineEdit/>
                </button>} 

            </div>
            {item.chores.map((chores, key)=>(
                <Assignment key={key} draggable onDragEnd={e=>dragEnd(i,key)} onDragStart={e=>dragStart(i, key)}>
                    
                    <div id='row-1'>
                        {!chores.editing ? <p>{chores.name}</p> : <input value={chores.name} onChange={e=>handleChange(e, i, key)} type='text'/>}
                        
                        <button onClick={e=> editChore(i, key)} className={chores.editing ? 'active' : ''}>
                            <AiOutlineEdit/>
                        </button> 
                    </div>

                    <div id='row-2'>
                    {!chores.editing ? <Tag color={item.color}><p>{chores.tag}</p></Tag> : <input value={chores.tag} onChange={e=>handleTagChange(e, i, key)} type='text'/>}
                        <button onClick={e=> removeChore(i,key)}><FiTrash/></button>  
                    </div>
                </Assignment>
            ))}
            <Button onClick={() => addChore(i)}>
                <FiPlus/>
                <p>Adicionar outro cartão</p>
            </Button>
        </Main>
        ))}
        </>
        
    )
}

export default Columns;