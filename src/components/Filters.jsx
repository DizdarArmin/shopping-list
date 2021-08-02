import '../css/filters.css';

export default function Filters({name, price}){
    /**
     * Research about destructuring on YouTube on a channel called Fireship to learn a nice way to avoid
     * using prop.name and prop.price and use name and price directly!
     * The less code the better
     */


    // Always indent your code
    return (
        <div>
          <div className="text-center justify-content-space-around d-flex align-items-center">
            <label>Sort by:</label>

              {/* The correct tag is button. Links will introduce bugs as users can open a filter in a new browser tab! */}
              <button className="btn-link btn" onClick={name}>Name</button>
              <button className="btn-link btn" onClick={price}>Price</button> 
          </div>
        </div>
    )
}