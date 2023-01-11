import React from 'react'
import Custom_hook_fetch from "../../Custom_hook_fetch/Custom_hook_fetch"
import {ENDPOINTS} from "../../Api/Api"
import "./Credit_card.scss"

const Blood_types = () => {

    const {data, error, loading, refetch} = Custom_hook_fetch(ENDPOINTS.CREDIT_CARD)
    
    if(loading) return <div className='loading'>Caricamento in corso...</div>

    if(error) return <div className='error'>E' stato riscontrato un errore. Prova a ricaricare la pagina...</div>

  return (
    <section className='sectionCredit_Card'>
        <div className='containerCredit_Card'>
            <div className='cardCredit_Card'>

                <span className='credit_card_number'>{data?.credit_card_number}</span>

                <div className="headDate">
                    <div className="credit_card_expiry_date">Expire date</div>
                    <span className="fetch_date">{data?.credit_card_expiry_date}</span>
                </div>

                <div className="headType">
                    <h2 className="type">Card Type: </h2>
                    <span className="fetch_type">{data?.credit_card_type}</span>
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