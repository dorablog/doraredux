import React,{Component,PropTypes} from 'react'

export default class Content extends Component{
  
    render(){
        const {articleDetail} = this.props
        var article = articleDetail.article || {}
        return(
            <div className="article-container">
                <h1 className="title">{article.title}</h1>
                <div className="counts">
                    <span className="views-count">阅读{article.visit_count}</span>
                    <span className="comments-count">评论{article.comment_count}</span>
                    <span className="likes-count">喜欢{article.like_count}</span>
                </div> 
                <div className="markdown-content" dangerouslySetInnerHTML={{__html: article.content}} />
            </div>
        )
    }
}
Content.propTypes = {
    articleDetail: PropTypes.object.isRequired
}