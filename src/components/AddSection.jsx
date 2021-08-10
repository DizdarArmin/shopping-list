import '../css/addSection.css';
import {useState} from 'react';
export default function AddSection({addHandler}){
        const [name, setName] = useState('');
        const [price, setPrice] = useState('');

        const handleSubmit = (e) => {
                e.preventDefault();
                if (name === "" || price === ""){
                        alert("Name or price empty");     
                }
                else {  
                        addHandler(name, price);
                }

                
        }

    return(
        <form onSubmit={handleSubmit} className="container d-flex justify-content-center">
                <input  className="name text-input col-6"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        type="text"
                        placeholder="Forks and knives"
                />
                <input className="price text-input col-4"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                        type="number"
                        placeholder="750 SEK"
                />
                <button className="addButton btn btn-primary col-2"
                        type="submit"
                        
                        >+</button>
                
               
        </form>
    ) 
}