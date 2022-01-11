import React from 'react'
import Filter from '../Components/Filter'
import Footer from '../Components/Footer'
import GridProduct from '../Components/GridProduct'
import MobileNav from '../Components/MobileNav'
import Nav from '../Components/Nav'


function Day13() {
    return (
        <div>
        <Nav desc="Shop Grid Default"/>
        <MobileNav desc="Shop Grid Default"/>
        
        
        <div className="container">
          <div className="section-4">
            <Filter/>
          </div>
          <div className="main">
            <div className="row">
              <GridProduct pic="chair.png" productName="Chair 1" />
              <GridProduct pic="chair4.png" productName="Chair 4"/>
              <GridProduct pic="chair3.png" productName="Chair 3"/>
              <GridProduct pic="chair2.png" productName="Chair 2"/>
              <GridProduct pic="watch1.png" productName="Watch 1" mt="20px"/>
              <GridProduct pic="watch2.png" productName="Watch 2" mt="20px"/>
              <GridProduct pic="bag.png" productName="Bag" mt="20px"/>
              <GridProduct pic="headset.png" productName="Headset" mt="20px" />
             
            <div style={{marginBottom: "80px"}}></div>
             
            </div>
          </div>
       
        </div>
        <Footer/>
    
      </div>
    )
}

export default Day13
