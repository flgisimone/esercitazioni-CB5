import {useState, useEffect} from 'react'

const Custom_hook_fetch = (urlFetch) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(false)
    
    const fetchData = async () =>{
        try {
            const data = await fetch(urlFetch)
            .then(res => res.json())
            setData(data)
        }
        catch(error){
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    


  return {
    data,
    error,
    loading,
    refetch: fetchData //metodo per richiamare la fetch al click del bottone
  }
}

export default Custom_hook_fetch