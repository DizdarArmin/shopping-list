import '../css/task.css';

export default function Task(props){

    return(
        
        <div className="task form-check d-inline-flex justify-content-between">
        <input  className="form-check-input" 
                type="checkbox" 
                ></input>
        <p className="form-check">{props.name}, {props.price}</p>
        {/* <i  className="form-check" style={{fontSize:"2.2em"}} class="fas fa-image"></i> */}
        </div>

    )
}