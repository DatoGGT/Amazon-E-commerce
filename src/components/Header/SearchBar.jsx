import ArrowIcon from "./images/arrow.png";
import styled from 'styled-components';
import SearchIcon from './images/search.png';
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


const BUTTON = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color:#f3f3f3;
    width: 50px;
    height: 38px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-style: none;
    & .arrowimg {
        padding-left: 5px;
    width: 11px;
}

`
const FORM = styled.form`
    display: flex;
    & input {
        width: 800px;
        height: 38px;
        border-radius: 1px;
        border-style: none;
    }
`
const SEARCHICONBUTTON=styled.button`
display: flex;
align-items: center;
justify-content: center;
border-top-right-radius: 4px;
border-bottom-right-radius: 4px;
border-style: none;
background-color:#febd69;
width: 51px;
height: 38px;
& .searchicoon{
    width: 60%;
}

    
`
const SEARCHDIV = styled.div`
    display: flex;
    align-items: center;
    .searchResults {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 880px;
        max-height: 400px;
        background-color: #fffbfb;
        position: absolute;
        top: 49px;
        z-index: 1;
        overflow-x: hidden;
        overflow-y:thin;
        padding: 5px 0 0 20px;
        border-radius: 3px;
        & a {
            text-decoration: none;
            color: #000000;
        }
        & a:hover {
            text-decoration: underline;
            color: #1c1a9c;
        }
        & ul li {
            list-style: none;
            font-size: 17px;
            font-family: sans-serif;
        }  
    }

`

const SearchBar =  () => {
    const navigate = useNavigate()
    const handlenavigate = (id) =>{
        navigate(`/AboutProducts/${id}`)
    }
        useEffect(() =>  {
        fetch("https://digitalamazon.azurewebsites.net/api/product/products?PageSize=" + 20)
        .then((res) => res.json())
        .then((data) => {
            setFilterSearch(data)

        })
        .catch((err) => console.log(err))
            
        },[])
        const [data, setData] = useState([]);
        const [filterSearch, setFilterSearch] = useState([]);
        const [inputValue, setInputValue] = useState('');
    
    const handleFilter = (value) => {
        setInputValue(value);
        if(value.trim()===""){
            setData([])
        }
        else {
            const res = filterSearch.filter((product) => product.name.toLowerCase().includes(value)|| product.name.toUpperCase().includes(value))
            setData(res)
        }
    }
    return (
        <SEARCHDIV>
            <BUTTON>All 
            <img src={ArrowIcon} alt="" className="arrowimg" />
            </BUTTON>

        <FORM>
        <label for="search"> </label>
        <input type="text" name="search" id="search" placeholder="Search Amazon"  onChange={(e)=>handleFilter(e.target.value)}/>
        </FORM>
        {inputValue.trim() !== '' && (
                <div className="searchResults">
                    {data.map((product, id) => {
                        return (
                            <ul key={id}>
                        <a href=""> <li onClick={()=>handlenavigate(product.id)}>{product.name.length > 20 ? product.name.slice(0,20) + '...' : product.name}</li> </a> 
                            </ul>
                        )
                            
                    })}
                </div>
            )}
        <SEARCHICONBUTTON><img src={SearchIcon} alt=""  className="searchicoon"/></SEARCHICONBUTTON>
        </SEARCHDIV>
    )
}


export default SearchBar