
import '../App.css';
export default function Welcome({ handler }) {

    return (
        <div className="container-fluid justify-content-center">
            <br />
            <h1 className="row text-center d-flex">Shopping list</h1>

            <div className="row text-center d-flex">
                <p className="col-10">
                    <span className="font-weight-bold">Welcome!</span>
                    <br/>
                    This app will help you during shopping at our but also at any other store.
                    Start by writing product name and price, then add it to your list.
                    <br />
                    <span className="font-weight-bold">Happy shopping!</span>
                </p>

            </div>
            <br />
            <div className="row text-center" >
                <button onClick={handler}
                    className="col-6 col-sm-6 col-md-4 col-xl-4 btn-lg btn btn-primary">Start</button>
            </div>

        </div>

    )
}