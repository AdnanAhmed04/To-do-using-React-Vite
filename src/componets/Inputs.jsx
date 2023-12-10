import React, { useState } from 'react';

function InputFields() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    // hum nay 4 array banayeee hai usestate ko use kar kay takay like  hooks

    const addTodo = () => {
        if (inputText.trim() !== '') {
            // hum nay trim ac leye use kia hai takay sare whte space remove hojayyee or humara input as empty consider na ho
            setTodos([...todos, inputText]);
            // ... ko hum spread operator kahtay hai takay hum sare array kay element ko dek sakay
            setInputText('');
        }
    };

    const updateTodo = (index) => {
        const updatedValue = prompt('Enter new value:', todos[index]);
        if (updatedValue !== null) {
            // condition lagee hai kay updates walee empty tou nhi hai
            const updatedTodos = [...todos];
            updatedTodos[index] = updatedValue;
            setTodos(updatedTodos);
        }
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };


    const deleteAll = () => {
        // hum nay ac may array ko hee empty kardeya hai
        setTodos([]);
    };

    return (
        <div>

            <div>
                <input
                    type="text"
                    placeholder='Enter To Do Here'
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />

                <button className='btn1' onClick={addTodo} type="button">Add</button>
                <button className='btn2' onClick={deleteAll}>Delete All</button>
            </div>


            <div>
                {todos.map((todo, index) => (
                    <div key={index}>
                        {todo}
                        <button className='btn1' onClick={() => updateTodo(index)}>Update</button>
                        <button className='btn2' onClick={() => deleteTodo(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InputFields;
