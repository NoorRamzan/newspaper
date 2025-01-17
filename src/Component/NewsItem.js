import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
   let {title,description,imageurl,newsUrl}=this.props
    return (
      <div className='my-3'>
       <div  className="card" style={{width: "10rem;"}}>
  <img src={imageurl}  className="card-img-top" alt="..." url="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"/>
  <div  className="card-body">
    <h5  className="card-title">{title}</h5>
    <p  className="card-text">{description}</p>
    <a href={newsUrl} target='_blank'  className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
