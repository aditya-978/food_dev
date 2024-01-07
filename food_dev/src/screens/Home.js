import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function Home() {
    const [search, setSearch] = useState([]);
    const [foodCategory, setFoodCategory] = useState([]);
    const [foodItems, setFoodItems] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POSt",
            headers: {
                'Content-Type': "application/json"
            }
        })
        response = await response.json();
        // console.log(response[0], response[1])
        setFoodItems(response[0]);
        setFoodCategory(response[1]);
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div>
            <div><Navbar /></div>
            <div><div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ "objectFit": "contain !important" }}>
                <div className="carousel-inner" id='carousel'>
                    <div className='carousel-caption' style={{ "zIndex": "10" }}>
                        <div className="d-flex justify-content-center">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                            {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" alt="..." style={{ "filter": "brightness(30%)" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?pizza" className="d-block w-100" alt="..." style={{ "filter": "brightness(30%)" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?momos" className="d-block w-100" alt="..." style={{ "filter": "brightness(30%)" }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div></div>
            <div className='container'>{
                foodCategory.length !== 0
                    ? foodCategory.map((data) => {
                        return (<div className='row mb-3'>
                            <div key={data._id} className='fs-3 m-3'>{
                                data.CategoryName
                            }
                            </div>
                            <hr />
                            {foodItems.length !== 0 ? foodItems.filter((items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLocaleString())))
                            .map(filterItems => {
                                return (
                                    <div className='col-12 col-md-6 col-lg-3 m-3' key={filterItems._id}>
                                        <Card foodItem = {filterItems} options={filterItems.options[0]} /></div>
                                )
                            }) : <div>No Such Item</div>}
                        </div>)
                    })
                    : <div>No categories available</div>
            }</div>
            <div><Footer /></div>
        </div>
    )
}