import { useEffect, useState } from "react";

import { Menu_url } from "./constants";



const useResturantsMenu = (Resid) => {

    const [resInfo, setresInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch( Menu_url+Resid+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
        const json = await data.json();
        setresInfo(json);
        
      
        // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
        // console.log(json.data.cards[2].card.card.info);
        //.card.itemCards[0].card.info.name)
    };


    return resInfo;

};

export default useResturantsMenu;