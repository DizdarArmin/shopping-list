import '../css/task.css';
// 1. Consistency. Here you use export default to make the export a single line, but on App.js you do the export at the end.
// I do prefer this style as a single line, but do the same in App.js
export default function Task({item, handler,index}){
    
    const {id, name, price, isFinished } = item;

    return(
        <div className="form-check d-flex justify-content-between row ">
               
            <input  className="col form-check-input" 
                    type="checkbox"
                    onChange={() => handler(index, id)} 
                    defaultChecked={isFinished}></input>
                    <span>#{id}</span>
                <label className="col text-left label form-check-label">{name}</label>
                <label className="col text-right font-weight-bold label form-check-label">{price} SEK</label>
        </div>

    )
}