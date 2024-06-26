import React, { Component } from 'react';
import { withRouter } from './RouterHelperFunction';
import { wikiData } from './_WikiData.ts';
import { Link } from 'react-router-dom';

class TopicPage extends Component {
  render() {
    const { category, topic } = this.props.params; // Extract params from props

    // Find the category in the wikiData array
    const categoryData = wikiData.find(cat => cat.title.toLowerCase() === category.toLowerCase());

    if (!categoryData) {
      return <div>Category not found.</div>;
    }

    // Find the topic in the category's topics array
    const topicData = categoryData.topics.find(t => t.title.toLowerCase().replace(/ /g, '-') === topic);

    if (!topicData) {
      return <div>Topic not found.</div>;
    }

    let paragraphs = [];
    for (let i = 0; i < topicData.content.paragraphs.length; i++){
      paragraphs.push(<p key={i}>{topicData.content.paragraphs[i]}</p>)
    }
    
    let similarPages = [];
    for (let i = 0; i < topicData.content.seeSimilar.length; i++){
      similarPages.push(<><Link to={`/wiki${topicData.content.seeSimilar[i].path}`}>{topicData.content.seeSimilar[i].visibleName}</Link><br/></>)
    }
    return (
      <div className="topic-page">
        <br/>
        <Link to={`/wiki/${categoryData.title.toLowerCase()}`} className='returnLink'>
          Link back to: {categoryData.title}
        </Link>
        <h2>{topicData.title}</h2>
        {topicData.content.primaryCode.length > 0 && (<CodeViewer codeLines={topicData.content.primaryCode} />)}
        {paragraphs}
        {topicData.content.seeSimilar.length > 0 && (
          <>
            <h2>See Related Pages</h2>
            {similarPages}
          </>
        )}
      </div>
    );
  }
}

class CodeViewer extends React.Component {
  render() {
    let codeDisplay = this.props.codeLines.map((value, index) => value === "" ? <div key={index} className="code-line">&nbsp;</div> : <div key={index} className="code-line">{value}</div>);
    return (
      <div className="code-interface">
        <pre>
          <code>
            {codeDisplay}
          </code>
        </pre>
      </div>
    )
  }
}

export default withRouter(TopicPage);
