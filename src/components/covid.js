import React, { useEffect, useState } from "react";
import './covid.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const Covid = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch(err){
            console.log(err);
        }
    }

useEffect(() =>{
    getCovidData();
}, []);
return (
    <>
    <section>
 
    <div class="card text-white bg-primary mb-3"  >
  
  <div class="card-body">
  <p className="card__name">COUNTRY</p>
        <p className="card__total card__small"></p>INDIA
    <p>Recovered Cases: {data.recovered}</p>
  </div>
</div>
<div class="card text-white bg-secondary mb-3" >
  
  <div class="card-body">
  <p>Confirmed Cases: {data.confirmed}</p>
  </div>
</div>
<div class="card text-white bg-success mb-3" >
  
  <div class="card-body">
  <p>Active Cases: {data.active}</p>
    
  </div>
</div>
<div class="card text-white bg-danger mb-3">
 
  <div class="card-body">
  <p>Death Cases: {data.deaths}</p>
  </div>
</div>


    </section>
    </>
)
}
export default Covid
