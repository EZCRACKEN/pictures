import axios from "axios";

const searchImages = async(term) => { 
    const url = 'https://api.unsplash.com/search/photos/?client_id=6x60b5xCW3ZRnjPGDQ3oHVDsn-DfuDr1np92u3JFAX4'
    
    const response = await axios.get(url, {
        params:{ 
            query: 'cars'
        }
    })

    console.log(response)
    return response.data.results
}

export default searchImages