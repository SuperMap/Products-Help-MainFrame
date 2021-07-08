import React from 'react';
import { colors, media } from 'theme'; 
import { Link } from 'gatsby';
import {
    // Highlight,
    connectHighlight
  } from 'react-instantsearch-dom';

const TitleHighlight = ({ highlight,attribute, hit }) => {

  const titleHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  }); 

  return (
    <span>
      {titleHit.map(
        (part, index) =>
          part.isHighlighted ? (
            <span style={{"backgroundColor":"#FFE564"}} key={index}>{part.value}</span>
          ) : (
            <span key={index}>{part.value}</span>
          )
      )}
    </span>
  );
};

const ContentHighlight = ({ highlight,attribute, hit }) => {

  const contentHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });

  return (
    <span>
      {contentHit.map(
        (part, index) =>
          part.isHighlighted ? (
            <span style={{"backgroundColor":"#FFE564"}} key={index}>{part.value}</span>
          ) : (
            <span key={index}>{part.value}</span>
          )
      )}
    </span>
  );
};

const CustomTitleHighlight = connectHighlight(TitleHighlight);
const CustomContentHighlight = connectHighlight(ContentHighlight);

class SearchResultList extends React.Component {
    
    render(){
        const hits = this.props.hits;
        const find = this.props.find;
        const query = this.props.query;
    
        var result = [];
        for(var i in hits){
          if(i >= 5){
            break;
          }
          result[i] = hits[i];
        }
        const listItems = find ? result.map((hit) =>
            <Link to={hit.href}>
                <li key={ ('' + Math.random()).replace(/\D/g, '')} className='search-list'>
                    <div className="search-title">
                       <CustomTitleHighlight  attribute="title" hit={hit} tagName="mark" />
                    </div>
                   <div className="search-content">
                        <CustomContentHighlight  attribute="content" hit={hit} tagName="mark" />
                    </div>
                    <div className="bottom-border"></div>
                
                </li>
            </Link>
		):(
            <li key={ ('' + Math.random()).replace(/\D/g, '')} className='no-results'>
              No results have been found for {query}
             </li>
        );
    return (
        <div>
            <ul className="search-results">
                {listItems}  
                {!find || hits.length > 0 ? 
                <li className="search-image">
                    <span style={{"color":"#61DAFB"}}>Search by</span>
                     <img src="/Algolia_logo_bg-white.svg" alt=""  height="15" width="60" />
                </li>
                :null}
            </ul>
        </div>
    );
    }
  }
  
  
export default SearchResultList;