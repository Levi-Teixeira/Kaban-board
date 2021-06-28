import { Main, Button } from "./styles";
import {React,useContext,useEffect} from "react";
import background from '../../Assets/background.svg';
import Columns from "../../Components/Column";
import {FiPlus} from 'react-icons/fi';
import { ListContext } from "../../Provider/provider";


const Home = () =>{

    const {columns, setColumns} = useContext(ListContext);

    useEffect(()=>{
        if(localStorage.getItem('data') !== null){
            setColumns(JSON.parse(localStorage.getItem('data')));  // Consultando LocalStorage caso já existam dados    
        }    
    }, [setColumns])

    useEffect(()=>{
        localStorage.setItem('data', JSON.stringify(columns))    // Salvando dados no LocalStorage a cada modificação dos dados
    }, [columns])
    
    const addColumn = () =>{
        const obj = ({...columns, columns:
        {
        title: 'New Column',
        color: '#154c79', 
        chores:[],
        editing: false
        },
        })
        setColumns(Object.values(obj))   // O construtor é usado aqui para que os dados continuem a ser iteraveis após o Spread .
    }

    return(
        
        <Main>
            <h1>Kanban do projeto</h1>
            <div id='container'>
                <Columns/>
                <Button onClick={addColumn}>
                    <FiPlus/>
                    <p>Adicionar outra lista</p>
                </Button>     
            </div>    
                    
            <img src={background} alt=''/>
        </Main>
    )
}

export default Home;