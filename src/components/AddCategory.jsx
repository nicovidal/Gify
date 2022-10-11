import {useState} from 'react';

export const AddCategory=()=> {

    const [inputValue, setInputvalue] = useState('')

    const onInputChange=({target})=>{
        setInputvalue(target.value);
    }

    const onSubmit =(event)=>{
        event.preventDefault();
        //insert any things on input
        if(inputValue.trim().length<=1)return;

        setInputvalue('');
        onNewCategory(inputValue.trimm());

    }
  return (
    <div>
        <input 
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={onInputChange}/>
    </div>
  )
}



