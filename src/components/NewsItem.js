import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
let {title, description,imageUrl, newsUrl} = this.props;

    return (
      <div>
        <div className="card" >

            <img src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2024/02/06/1600x900/PAYTM-INDIA-INVESTIGATION-0_1707219302172_1707219331302.JPG":imageUrl} 
            className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsUrl} rel="noopener" target="__blank" className="btn btn-sm btn-primary">Read more</a>
            </div>
          </div>
    </div>
    )
  }
}

export default NewsItem
