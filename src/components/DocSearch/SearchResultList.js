import React from 'react';
import { colors, media } from 'theme'; 
import { Link } from 'gatsby';
import {
    // Highlight,
    connectHighlight
  } from 'react-instantsearch-dom';

const Highlight = ({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });

  return (
    <span>
      {parsedHit.map(
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

const CustomHighlight = connectHighlight(Highlight);

class SearchResultList extends React.Component {
    
    render(){
        const hits = this.props.hits;
        const find = this.props.find;
        const query = this.props.query;
    
        const listItems = find ? hits.map((hit) =>
            <Link to={hit.href}>
                <li key={ ('' + Math.random()).replace(/\D/g, '')} className='search-list'>
                    <div className="search-title">
                         <span>{hit.title}</span>
                    </div>
                    <div className="centerdiv"></div> 
                    <div className="search-content">
                        <CustomHighlight attribute="title" hit={hit} tagName="mark" />
                    </div>
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