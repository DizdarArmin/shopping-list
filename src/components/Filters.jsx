import '../css/filters.css';
import { useState } from "react"

export default function Filters({name, price}){
    /**
     * Research about destructuring on YouTube on a channel called Fireship to learn a nice way to avoid
     * using prop.name and prop.price and use name and price directly!
     * The less code the better
     */


    // Always indent your code
    return (
        <div>
          <h3>Shopping list</h3>
          <div className="d-inline-flex justify-content-center">
            <p>Sort by:</p>

              {/* The correct tag is button. Links will introduce bugs as users can open a filter in a new browser tab! */}
              <button onClick={name} href="/">Name</button>
              <button onClick={price} href="/">Price</button> 
          </div>
        </div>
    )
}