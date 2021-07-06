import { useState } from "react"

export default function Filters(props){



    return (
        <div>
        <h3>Shopping list</h3>
        <div className="d-inline-flex justify-content-center">
        <p className="p-2">Sort by:</p>

          <a className="p-2" onClick={props.name} href="/">Name</a>
          <a className="p-2" onClick={props.price} href="/">Price</a> 
        </div>
        </div>
    )
}