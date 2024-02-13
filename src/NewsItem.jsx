import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    // this is destructuring title or description ke roop main title or description 
    let {title, description} = this.props;
    return (
      <>
        <div className="card" style={{width: "18rem"}}>
  <img src="https://ichef.bbci.co.uk/news/1024/branded_news/2D3E/production/_132628511_e51369c5777ba4fa8575c97a3bed2c110178e280-1.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
      </>
    )
  }
}

export default NewsItem
