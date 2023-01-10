import React, {useState} from 'react'
import { useEffect } from 'react'
import "./Fetch.scss"

const Fetch = () => {

  const url_card = "https://random-data-api.com/api/v2/credit_cards"

  const [card, setCard] = useState()
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(null)

  const fetchCard = () =>{
    setLoading(true)
    setNotFound(null)

    fetch(url_card)
    .then(res => res.json())
    .then(card => setCard(card))
    .catch((err) => {
      console.log("Error: " + err) 
      setNotFound(notFound)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    fetchCard()
  }, [])

  if(loading) return "Caricamento in corso"
  if(notFound || !card) return "Errore di connessione al server, provare a ricaricare la pagina"

  return (
    <div className='card' key={card.id}>
      <h2>Carda di credito</h2>
      <div className='containerCard'>
        <div className='container_cardNumber'>
          <h5>Numero carta</h5>
          <span className='cardNumber'>{ card.credit_card_number}</span>
        </div>

        <div className='container_cardDate'>
          <h5>Scadenza</h5>
          <span className='cardDate'>{card.credit_card_expiry_date}</span>
        </div>

        <div className='container_cardType'>
          <h5>Banca</h5>
          <span className='cardType'>{card.credit_card_type}</span>
        </div>

        <div className='container_cardUid'>
          <h5>Uid:</h5>
          <span className='cardUid'> {card.uid}</span>
        </div>
      </div>
    </div>
  )
}

export default Fetch