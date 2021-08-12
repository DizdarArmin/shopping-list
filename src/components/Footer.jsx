export default function Footer(){
    return (
        <footer className="d-flex footer text-center justify-content-around">
        <div className="container row">
          <a
            className="col"
            target="_blank"
            href="https://www.linkedin.com/armindizdar"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in fa-2x"></i>
          </a>
          <a
            className="col"
            target="_blank"
            href="https://github.com/DizdarArmin/shopping-list"
            rel="noreferrer"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </footer>
    )
}