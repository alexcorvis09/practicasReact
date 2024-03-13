export default function KoderCard(props){
    return (
    <>
        <article className="koderCard">
            <h2>Nombre:{props.name}</h2>
            <p>Ciudad:{props.city}</p>
            <p>Hobby:{props.hobby}</p>
            <p>Número favorito:{props.luckyNum}</p>
        </article>    
    </>
    )
}