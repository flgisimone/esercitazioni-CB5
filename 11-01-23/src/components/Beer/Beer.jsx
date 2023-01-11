import React from 'react'
import Custom_hook_fetch from "../../Custom_hook_fetch/Custom_hook_fetch"
import {ENDPOINTS} from "../../Api/Api"
import "./Beer.scss"

const Beer = () => {

    const {data, error, loading, refetch} = Custom_hook_fetch(ENDPOINTS.BEERS)
    
    if(loading) return <div className='loading'>Caricamento in corso...</div>

    if(error) return <div className='error'>E' stato riscontrato un errore. Prova a ricaricare la pagina...</div>

  return (
    <section className='sectionBeer'>
        <div className='containerBeer'>
            <div className='cardBeer'>
                
                <div className="headName">
                    <h1 className='name'>{data?.name}</h1>
                    <span className='fetch_brand'>{data?.brand}</span>
                </div>
                

                <div className="infoBeer">
                    <div className="headAlcohol">
                        <h2 className="alcohol">Alcohol</h2>
                        <span className='fetch_alcohol'>{data?.alcohol}</span>
                    </div>

                    <div className="headMalts">
                        <h2 className="malts">Malts</h2>
                        <span className='fetch_malts'>{data?.malts}</span>
                    </div>

                    <div className="headBlg">
                        <h2 className="blg">Blg</h2>
                        <span className='fetch_blg'>{data?.blg}</span>
                    </div>
                </div>

            </div>
            
            <button className='btnFetch' onClick={refetch}>
                <i className="fa-solid fa-rotate-right"></i>
            </button>
        </div>
    </section>
  )
}

export default Beer