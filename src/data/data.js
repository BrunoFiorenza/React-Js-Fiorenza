const products = [
    {
        id: "aaa111",
        name: "Call of Duty: Black Ops 6",
        description: "Call of Duty: Black Ops 6 presenta la característica Campaña cinematográfica de Black Ops, la mejor experiencia de Multijugador y el épico regreso de Zomis pos rondas.",
        price: 70,
        stock: 5,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2933620/header.jpg?t=1725896510",
        category: "disparos"
    },
    {
        id: "aab111",
        name: "Battlefield 2042",
        description: "Battlefield 2042 es un juego de disparos en primera persona que marca el regreso de la icónica guerra total de la franquicia.",
        price: 60,
        stock: 5,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1517290/header.jpg?t=1728642418",
        category: "disparos"
    },
    {
        id: "aac111",
        name: "Forza Horizon 5",
        description: "Explora los coloridos paisajes del mundo abierto de México con una acción de conducción ilimitada y divertida en los mejores autos del mundo.",
        price: 32,
        stock: 5,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg?t=1727883919",
        category: "conduccion"
    },
    {
        id: "aad111",
        name: "Forza Motorsport",
        description: "Supera a la competencia en el modo Carrera, corre por el mundo en el modo multijugador, compite al volante de más de 500 autos en 27 pistas de fama mundial",
        price: 35,
        stock: 5,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2440510/header.jpg?t=1727723123",
        category: "conduccion"
    },
    {
        id: "aae111",
        name: "EA SPORTS FC 25",
        description: "EA SPORTS FC 25 te ofrece más formas de ganar para el club. Forma equipo con amistades en tus modos favoritos con el nuevo Rush 5 vs. 5 y lidera a tu club hacia la victoria gracias a FC IQ, que te ofrece más control táctico que nunca.",
        price: 70,
        stock: 5,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2669320/header.jpg?t=1728642725",
        category: "deportes"
    },    {
        id: "aaf111",
        name: "NBA 2K25",
        description: "Domina cada cancha con autenticidad y realismo con tecnología ProPLAY, que te brinda el máximo control sobre cómo juegas en NBA 2K25. Define tu legado en MyCAREER, MyTEAM, MyNBA y The W.",
        price: 70,
        stock: 5,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2878980/header.jpg?t=1727833577",
        category: "deportes"
    }
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products)
    }, 1000)
    })
}

const getProduct = (idProduct) => {
    return new Promise( (resolve)=> {
    setTimeout(()=> {
        const product = products.find( (product)=> product.id === idProduct )
        resolve(product)
    }, 1000)
    })
}

export { getProducts, getProduct }