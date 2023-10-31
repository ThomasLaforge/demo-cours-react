import { useCallback, useMemo, useState } from "react"

function NameForm() {
    const [name, setName] = useState("")
    const [color, setColor] = useState("")

    const uppercaseName = useMemo(
        () => {
            console.log('uppercaseName called');
            return name.toUpperCase()
        },
        [name]
    )

    const handleChangeName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }, [])

    const handleChangeColor = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value)
    }, [])

    return (
        <>
            <h1>Name Form</h1>
            <label htmlFor="nom">Nom</label>
            <input type="text" name="nom" onChange={handleChangeName}/>
            <label htmlFor="color">Couleur</label>
            <input type="color" name="color" onChange={handleChangeColor} />
            <p style={{ color }}>{uppercaseName}</p>
        </>
    )
}

export default NameForm