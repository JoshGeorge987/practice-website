import '../assets/cards.css';

export default function Cards() {

    return(
        <div className='container-fluid cards-box'>
            <div className='row text'>
                <div className='col-sm-4 card'>
                    <div className='card-icon'>
                        <span className='glyphicon glyphicon-briefcase card-icon'></span>
                    </div>
                    <h2 className='card-title'><strong>Title</strong></h2>
                    <h3 className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor in orci sed volutpat.</h3>
                    <a href='#' id='card-link'>Call to action <span className='glyphicon glyphicon-arrow-right card-glyph'></span></a>
                </div>
                <div className='col-sm-4 card'>
                    <div className='card-icon'>
                        <span className='glyphicon glyphicon-flash card-icon'></span>
                    </div>
                    <h2 className='card-title'><strong>Title</strong></h2>
                    <h3 className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor in orci sed volutpat.</h3>
                    <a href='#' id='card-link'>Call to action <span className='glyphicon glyphicon-arrow-right card-glyph'></span></a>
                </div>
                <div className='col-sm-4 card'>
                    <div className='card-icon'>
                        <span className='glyphicon glyphicon-music card-icon'></span>
                    </div>
                    <h2 className='card-title'><strong>Title</strong></h2>
                    <h3 className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor in orci sed volutpat.</h3>
                    <a href='#' id='card-link'>Call to action <span className='glyphicon glyphicon-arrow-right card-glyph'></span></a>
                </div>
            </div>
        </div>
    )
}