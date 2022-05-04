import React from 'react'

function Cards({ data }) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={data.img} alt="shoe image" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={data.img} alt="shoe image" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{data.name}</p>
                        <p className="subtitle is-6">size&nbsp; {data.size}</p>
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between"}} className="content" >
                    <p>
                    <strong>{data.category}</strong>
                    </p>
                    <p><strong>RS.&nbsp;{data.price}</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cards