import React from 'react'
import Custom_hook_fetch from "../../Custom_hook_fetch/Custom_hook_fetch"
import {ENDPOINTS} from "../../Api/Api"
import "./Bank.scss"

const Bank = () => {

    const {data, error, loading, refetch} = Custom_hook_fetch(ENDPOINTS.BANK)
    
    if(loading) return <div className='loading'>Caricamento in corso...</div>

    if(error) return <div className='error'>E' stato riscontrato un errore. Prova a ricaricare la pagina...</div>

  return (
    <section className='sectionBank'>
        <div className='containerBank'>
            <div className='cardBank'>

                <div className="headBank">
                    <h1 className='bank_name'>BANK</h1>
                    <span className='fetch_name'>{data?.bank_name}</span>
                </div>

                <div className="headIban">
                    <h2 className='iban'>IBAN</h2>
                    <span className='fetch_iban'>{data?.iban}</span>
                </div>

                <div className='infoNumber'>
                    <div className="headAccountNumber">
                        <span className='account_number'>N° Account</span>
                        <span className='fetch_account_number'>{data?.account_number}</span>
                    </div>

                    <div className="headRoutingNumber">
                        <span className='routing_number'>N° Routing</span>
                        <span className='fetch_routing_number'>{data?.routing_number}</span>
                    </div>

                    <div className="headSwiftBic">
                        <span className='swift_bic'>Swift</span>
                        <span className='fetch_swift_bic'>{data?.swift_bic}</span>
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

export default Bank