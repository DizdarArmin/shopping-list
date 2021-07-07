import '../css/task.css';

// 1. Consistency. Here you use export default to make the export a single line, but on App.js you do the export at the end.
// I do prefer this style as a single line, but do the same in App.js
export default function Task(props){

    return(
        
        // always indent your tags
        <div className="task form-check d-inline-flex justify-content-between">
            <input  className="form-check-input" 
                    type="checkbox"
                    checked={props.state}
                    onClick={props.changed}
                    ></input>
            <p className="form-check">{props.name}, {props.price}</p>
            {/* <i  className="form-check" style={{fontSize:"2.2em"}} class="fas fa-image"></i> */}
        </div>

    )
}