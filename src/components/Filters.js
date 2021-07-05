export default function Filters(){

    return (
        <div>
        <h3>Shopping list</h3>
        <div className="d-inline-flex justify-content-center">
        <p className="p-2">Sort by:</p>
          <a className="p-2" href="/">Name</a>
          <a className="p-2" href="/">Price</a> 
        </div>
        </div>
    )
}