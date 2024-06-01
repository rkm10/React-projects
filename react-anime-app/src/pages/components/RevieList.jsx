import React from 'react';
import { Link } from 'react-router-dom';

export default function ReviewList({ apiData }) {

      return (
            <>
                  {
                        apiData.map((data, index) => {
                              return (
                                    <div className="card w-100 glass m-3" key={data.mal_id}>
                                          {/* skeleton */}
                                          <figure>
                                                {/* <Link to={`/animedetails/${data.mal_id}`}>
                                                      <img src={apiData[index].images.jpg.image_url} alt="poster" />
                                                </Link> */}
                                          </figure>
                                          <div className='card-body'>
                                                <h1 className="card-title"><label>Date:-</label> {data.date}</h1>
                                                <p className="CardContent"><label>Type:-</label> {data.type} {apiData[index].nicknames} </p>
                                                <p className="CardContent"><label>Url :-</label> {data.url}  </p>
                                                <p className="CardContent"><label>Score:-</label>{data.score} </p>
                                          </div>
                                    </div>
                              )
                        })
                  }
            </>
      );
}
