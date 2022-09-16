import React, { Component } from 'react'
import Header from './Header'
import Banner from './Banner'
import Item from './Item'
import Footer from './Footer'
export default class Main extends Component {
  render() {
    return (
   <div classname="row">
  <div>
   <Header/>
  </div>
  <div>
  <Banner/>
  </div>
  <div>
 <Item/>
  </div>
  <div>
 <Footer/>
  </div>
</div>

    
    )
  }
}
