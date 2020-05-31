import React from 'react';

const Imagen = ({imagen}) => {

    const {largeImageURL, likes, previewURL, tags, views} = imagen;

    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top" style={{"maxHeight": "150px"}}/>
                <div className="card-body">
                    <p className="card-text">Le gusta a {likes}</p>
                    <p className="card-text">{views} vistas</p>
                </div>
                <div className="card-footer">
                    <a
                        href={largeImageURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-block"
                    >Ver imágenes</a>
                </div>
            </div>
        </div>
     );
}
 
export default Imagen;