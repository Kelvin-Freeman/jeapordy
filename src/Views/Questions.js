import { useParams } from "react-router-dom" //this is importing a hook
import { useState, useEffect } from "react";

const Questions = () => {
    const [quest, setQuest] = useState(null)

    // 2. use the useEffect hook to make an api call
    useEffect(() => {
        getQuest()
    }, [])

    // 1.store the apikey and currency symbol in different variables
    // const apiKey = 'E1CD9E05-BC47-42C7-BA62-0FDE5C237B34';
    
     // return an object with the matching URL params
    //storing the apikey and currency symbol in different variables in the price component
    const params = useParams() //this is bringing in the hook

   // 3. interpolate the apikey and symbol in the fetch URL
    const url = `https://jservice.io/api/random`

    //fetching the coin data
    const getQuest = async () => {
        try {
            //making the fetch request
            const res = await fetch(url)
            const data = await res.json()
            // 4. save the resulting data in state and render it
            setQuest(data)
        }   catch (error) {
            console.log(error)
        }
    }

    // 5. ====Rendering Data ====
    // If data is loaded
    const loaded = () => {
        return (
          <div>
            <h1>
              {quest.question}/{}
            </h1>
            <h2>{quest.answer}</h2>
          </div>
        );
      };

    // If data is still loading
    const loading = () => {
        return <h1>Loading...</h1>;
      };

    return(
        <div>
            <h1>Question Page</h1>
            {/* if coin has data, run the loaded function, otherwise, run loading */}
            {/* {coin && coin.rate ? loaded() : loading()} */}
        </div>
    )
}

export default Questions