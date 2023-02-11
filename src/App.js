import { useEffect, useState } from 'react'
import Gallery from './Components/Gallery'
import SearchBar from './Components/SearchBar'
import { DataContext } from './context/DataContext'


function App() {
  let [search, setSearch] = useState('')
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search for Music!')

  useEffect(() => {
    if (search) {
      document.title = `${search} Music`
      const fetchData = async () => {
        const response = await fetch(`https://itunes.apple.com/search?term=${search}`)
        const resData = await response.json()
        if (resData.results.length > 0) {
          setData(resData.results)
        } else {
          setMessage('Not Found')
        }
      }
      fetchData()
    }
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
    </div>
  );
}

export default App;