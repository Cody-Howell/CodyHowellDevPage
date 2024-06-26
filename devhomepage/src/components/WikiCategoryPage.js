import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { wikiData } from './_WikiData.ts';
import { withRouter } from './RouterHelperFunction';

class CategoryPage extends Component {
  render() {
    const { category } = this.props.params;

    // Find the category in the wikiData array
    const categoryData = wikiData.find(cat => cat.title.toLowerCase() === category.toLowerCase());

    if (!categoryData) {
      return <div>Category not found.</div>;
    }

    // Add in an optional class if the data contains (SG) or (LB) to color it red and blue respectively
    console.log(categoryData);

    return (
      <div className="category-page">
        <Link to={`/wiki`} className='returnLink'>Link back to: Wiki</Link>
        <h1>{categoryData.title}</h1>
        <h3>Topics</h3>
        <div className='categoryLinks'>
          {categoryData.topics.map((topic, index) => {
            let classname = 'categoryLink';
            if (topic.title.includes('(SG)')){
              classname += " styleGuide";
            } else if (topic.title.includes('(LB)')){
              classname += " library"
            }

            console.log(classname);
            console.log(topic);

            return (<p key={index}>
              <Link to={`/wiki/${category}/${topic.title.toLowerCase().replace(/ /g, '-')}`} className={classname}>
                {topic.title}
              </Link>
            </p>
          )})}
        </div>
      </div>
    );
  }
}

export default withRouter(CategoryPage);
