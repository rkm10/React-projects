import React from 'react';
import { useState, useEffect } from 'react';
import AnimeList from './components/AnimeList';

export default function Manga() {
      const [apiData, setapiData] = useState(null);
      let [pending, setpending] = useState(true);
      let [error, setError] = useState(null);

      useEffect(() => {
            fetch('https://api.jikan.moe/v4/manga')

                  .then((response) => {
                        if (response.ok === false) {
                              throw Error("Searching data not found")
                        }
                        return response.json()
                  })
                  .then((datas) => { setapiData(datas.data); setpending(false) })
                  .catch((err) => { setError(err.message) })
      }, []);

      return (
            <>
                  {error && <h1>{error}</h1>}
                  {pending && <span className="manga-loader"> </span>}
                  {apiData && <div className="Recommendations">
                        <div className='flex flex-wrap justify-center'>
                              <AnimeList apiData={apiData} />
                        </div>
                  </div>}
            </>
      );
}









