import React from 'react'
import Custom_hook_fetch from "../../Custom_hook_fetch/Custom_hook_fetch"
import {ENDPOINTS} from "../../Api/Api"
import "./Blood_types.scss"

const Blood_types = () => {

    const {data, error, loading, refetch} = Custom_hook_fetch(ENDPOINTS.BLOOD_TYPES)
    
    if(loading) return <div className='loading'>Caricamento in corso...</div>

    if(error) return <div className='error'>E' stato riscontrato un errore. Prova a ricaricare la pagina...</div>

  return (
    <section className='sectionBlood'>
        <div className='containerBlood'>
            <div className='cardBlood'>
                
               <div className="headType">
                    <h2 className="type">Type</h2>
                    <span className='fetch_type'>{data?.type}</span>
               </div>

               <div className="headRh_factor">
                    <h2 className="rh_factor">RH Factor</h2>
                    <span className='fetch_rh_factor'>{data?.rh_factor}</span>
               </div>

               <div className="headGroup">
                    <h2 className="group">Group</h2>
                    <span className='fetch_group'>{data?.group}</span>
               </div>

            </div>
            
            <button className='btnFetch' onClick={refetch}>
                <i className="fa-solid fa-rotate-right"></i>
            </button>
        </div>
    </section>
  )
}

export default Blood_types