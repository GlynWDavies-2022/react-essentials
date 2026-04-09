function CoreConcept({img, title, description}) {
    return (
        <li>
           <img src={img} alt="A nice components picture" />
           <h3>{title}</h3>
           <p>{description}</p> 
        </li>
    )
}

export default CoreConcept;
