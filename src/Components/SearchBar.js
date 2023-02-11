import { useState } from 'react'

function SearchBar(props) {
    let [search, setSearch] = useState('')

    return (
        <form onSubmit={(e) => props.handleSearch(e, search)}>
            <input type="text" placeholder="Search Here" onChange={(e) => setSearch(e.target.value)} />
            <input type="submit" />
        </form>
    )
}

export default SearchBar