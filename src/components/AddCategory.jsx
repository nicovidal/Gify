import {useState} from 'react';

export const AddCategory=({onNewCategory})=> {

    const [inputValue, setInputvalue] = useState('')

    const onInputChange=({target})=>{
        setInputvalue(target.value);
    }

    const onSubmit =(event)=>{
        event.preventDefault();
        //insert any things on input
        if(inputValue.trim().length<=1)return;

        setInputvalue('');
        onNewCategory(inputValue.trim());

    }
  return (
    <form onSubmit={onSubmit}>
        <input 
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={onInputChange}/>
    </form>
  )
}



