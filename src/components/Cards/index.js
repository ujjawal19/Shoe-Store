import React from 'react'

function Cards({ id, data }) {
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

                <div style={{ display: "flex", justifyContent: "space-between" }} className="content">
                    <p>
                    {data.category}
                    </p>
                    <p>RS.&nbsp;{data.price}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cards