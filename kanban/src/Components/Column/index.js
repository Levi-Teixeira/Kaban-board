import {Main, Assignment, Tag, Button} from './styles';
import {FiPlus} from 'react-icons/fi';
import { React, useContext} from 'react';
import { ListContext } from "../../Provider/provider";

const Columns = () =>{

    const {columns, setColumns} = useContext(ListContext);

    const addChore = (id) =>{    //Manipulação de objetos
        const modifiedItem = columns[id];
        const newChores = ([...columns[id].chores, {name:'Nova tarefa', tag:'Tag'}]);
        const newitem =({...modifiedItem, chores: newChores});
        const obj =({...columns, [id] : newitem});
        setColumns(Object.values(obj)) // Isso precisa ser feito para o array poder continuar a ser iteravel.
   
    }

    const removeChore = (i, key) => {
        const list = columns[i];
        const removed = (list.chores[key]);
        const newChores = columns[i].chores.filter((n) => n !== removed);
        const newitem = ({...list, chores: newChores});
        const obj =({...columns, [i] : newitem});
        setColumns(Object.values(obj))
      };

    return(
        <>
        {columns.map((item, i)=>(
            <Main color={item.color}>
            <h1>{item.title}</h1>
            {item.chores.map((chores, key)=>(
                <Assignment id={i} order={key} onClick={e=> removeChore(i,key)}>
                    <p>{chores.name}</p>
                    <Tag color={item.color}><p>{chores.tag}</p></Tag>
                </Assignment>
            ))}
            <Button id={i} onClick={() => addChore(i)}>
                <FiPlus/>
                <p>Adicionar outro cartão</p>
            </Button>
        </Main>
        ))}
        </>
        
    )
}

export default Columns;