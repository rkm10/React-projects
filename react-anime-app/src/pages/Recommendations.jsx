import React from 'react';
import { useState, useEffect } from 'react';
import AnimeList from './components/AnimeList';

export default function Recommendations() {
      const [apiData, setapiData] = useState(null);
      let [pending, setpending] = useState(true);
      let [error, setError] = useState(null);

      useEffect(() => {
            fetch('https://api.jikan.moe/v4/recommendations/anime')
                  .then((response) => {
                        if (response.ok === false) {
                              throw Error("Searching data not found")
                        }
                        return response.json()
                  })
                  .then((datas) => {
                        let allEntries = []
                        datas.data.map((element) => {
                              let entries = element.entry
                              allEntries.push(entries[0]);
                              allEntries.push(entries[1]);
                              return allEntries
                        });
                        setapiData(allEntries);
                        setpending(false)
                  })
                  .catch((err) => { setError(err.message) })
      }, []);

      console.log(apiData);

      return (
            <>
                  {error && <h1>{error}</h1>}
                  {pending && <div className="spinner"> </div>}
                  {apiData && <div className="Recommendations">
                        <div className='flex flex-wrap justify-center'>
                              <AnimeList apiData={apiData} />
                        </div>
                  </div>}
            </>
      );
}
// have to modify this to get proper output
