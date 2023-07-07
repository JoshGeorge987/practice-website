import "../assets/prod-section.css"

export default function Section() {
    return (
        <div className="container-fluid section home">
            <div className="text-box">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br></br>
                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec leo dolor. Morbi varius consequat risus ut maximus. </small>
                </h1>
                <div className="button-box">
                    <a href="#"><button type="button" className="btn btn-primary sec-btn-primary">Get Started</button></a>
                    <a href="#"><button type="button" className="btn btn-default sec-btn-default">Learn More</button></a>
                </div>
            </div>
        </div>
    )
}