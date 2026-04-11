function TabButton({ children }) {

    function handleClick() {
        console.log("You clicked this button!");
    }

    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}

export default TabButton
