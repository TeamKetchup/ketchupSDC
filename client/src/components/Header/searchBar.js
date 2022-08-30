import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GoSearch } from 'react-icons/go'
import "./searchbar.css"

function SearchBar() {
    const [comName, setComName] = useState(null)
    const [load, setLoad] = useState(true)
    const [filterData, setFilterData] = useState([])
    const [inputVal, setInputVal] = useState([])
    useEffect(() => {
        getCom()

    }, [])

    const getCom = () => {
        // axios.get('http://localhost:3025/api/allcommunities')
        axios.get('https://ketchup-db.herokuapp.com/api/allcommunities')
            .then((response) => {
                setComName(response.data.map((value) => {
                    return value.name
                }))
                setLoad(false)

            }
            );


    };
    const handleChange = (e) => {
        
        setInputVal(e.target.value)
        const searchWord = e.target.value
        const mapedWords = comName.filter((data) => {
            return data.toLowerCase().match(inputVal.toLowerCase())
        })
        setFilterData(mapedWords)
        console.log(filterData)
        
        
        }

    
console.log(inputVal)

if(load === true){
    return (
        <div>loading</div>
    )
 }else{
  return (
    <div className='search'>
        <div className='searchInputs'>
            <input type='text' value={inputVal} onChange={handleChange}  />
            <div className='searchIcon'><GoSearch/></div>
        </div>
            {filterData.length !== 0 && (
                <div className={inputVal ? 'dataResult' : 'hide'}>{filterData.map((value) => {
                    return( <Link className='dataItem' to={`/community/${value}`}>{value}</Link>
                        )        
                    })}
                </div>
            )}
                
        

            
    </div>
  )
  }
}


export default SearchBar