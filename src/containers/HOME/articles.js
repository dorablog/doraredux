import React,{Component,PropTypes} from 'react'
import {customTime} from '../../utils'
import {Link} from 'react-router'

//列表View
export default class Articles extends Component{
  constructor(props) {
    super(props)
    this.noContent = false
  }

  componentDidUpdate(prevProps) {
    const {articleList} = prevProps
    if(articleList.length > 0){
      this.noContent = true
    }
  }
  render(){
    const {articleList} = this.props
    const articles = articleList.items
    return (
      <ul className="article-list list-unstyled clearfix">
        {articles.length > 0&&
          articles.map((article,i)=>
            <li className={(article.images.length > 0)?'article-item have-img':'article-item' } key={i}>
              {(article.images.length > 0)&&
                <Link to={'/article/' + article._id } className="wrap-img">
                <img src={article.images[0].url + '-100x100'} />
                </Link>}
              <div>
                <p className="list-top">               
                <span className="time">{ customTime(article.publish_time) }</span>
                </p>
                <h4 className="title">
                  <Link to={'/article/' + article._id } className="link-title">{article.title}</Link>
                </h4>
                <div className="list-footer">
                  <span>阅读 {article.visit_count}</span>
                  <span> · 评论 {article.comment_count}</span>        
                  <span> · 喜欢 {article.like_count}</span>
                </div>
              </div>
            </li>
          )
        }
        {articles.length < 1&& this.noContent && <li className="no-content">正在大力回车...</li>}
      </ul>
    )
  }
}