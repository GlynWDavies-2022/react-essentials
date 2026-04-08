function CoreConcept(props) {
    return (
        <li>
           <img src={props.img} alt="A nice components picture" />
           <h3>{props.title}</h3>
           <p>{props.description}</p> 
        </li>
    )
}

export default CoreConcept
