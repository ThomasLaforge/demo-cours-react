function NameList() {

    const names = ['John', 'Paul', 'George', 'Ringo']

    return (
        <>
            <h2>List of Names</h2>
            <ul>
                {names.map((name, index) => (
                    <li key={index} style={{ color: index % 2 ? "orange" : "blue"}}>{name}</li>
                ))}
            </ul>
        </>
    )
}

export default NameList