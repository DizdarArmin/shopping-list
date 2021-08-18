// Logic should be here not just JSX tags. -1

export default function Filters({ name, price }) {
  return (
    <div>
      <div className="row text-center justify-content-space-around d-flex align-items-center">
        <label>Sort by:</label>

        {/* The correct tag is button. Links will introduce bugs as users can open a filter in a new browser tab! */}
        <button className="btn-link btn" onClick={name}>
          Name
        </button>
        <button className="btn-link btn" onClick={price}>
          Price
        </button>
      </div>
    </div>
  );
}
