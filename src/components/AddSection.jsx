import '../css/addSection.css';
import { useState, useEffect } from 'react';
export default function AddSection({ addHandler }) {
        const [name, setName] = useState('');
        const [price, setPrice] = useState('');
        const [isButtonDisabled, setButton] = useState(true);

        const handleSubmit = (e) => {

                addHandler(name, price);
                setName('');
                setPrice('');

                e.preventDefault();
        }

        useEffect(() => {
                if (name !== "" && price !== "") {
                        setButton(false);
                }
                else {
                        setButton(true);
                }
        }, [name, price]);


        return (

                <form onSubmit={handleSubmit} className="row">
                        <input data-toggle="tooltip"
                                data-placement="top"
                                title="Write name of the product"
                                className="col-5 name text-input "
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                type="text"
                                placeholder="Forks and knives"
                        />
                        <input data-toggle="tooltip"
                                data-placement="top"
                                title="Write price of the product"
                                className="col-5 price text-input "
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                                type="number"
                                placeholder="750 SEK"
                        />
                        <button disabled={isButtonDisabled}
                                className="col-2 addButton btn btn-primary "
                                type="submit"

                        ><i className="fas fa-plus-circle"></i></button>


                </form>
        )
}