import KoderCard from "./components/KoderCard"


const koders={
    user1:{
        name:'Alex', 
        city:'CDMX',
        hobby:'Playing piano'
    }
}

export default function App(){
    return (
    <main>
        <h1>Koders</h1>
        <section className="kodersCardsContainer">
            <KoderCard 
            name={koders.user1.name.split('').join('.')} 
            city={koders.user1.city} 
            hobby ={koders.user1.hobby} 
            luckyNum={9}/>
            <KoderCard name='El Benjas' city='CDMX'hobby='Videojuegos'/>
            <KoderCard name='El Sebano' city ='CDMX'hobby='Tocar piano'/>
            <KoderCard name= 'Chío' city ='Edomex' hobby='Leer'/>
        </section>
    </main>
    )
}
