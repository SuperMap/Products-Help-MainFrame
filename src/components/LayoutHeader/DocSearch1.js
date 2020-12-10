import React from 'react';
import algoliasearch from 'algoliasearch/lite';

import { 
  InstantSearch, 
  connectHits, 
  Highlight,
  connectSearchBox,
  connectStateResults, 
  Configure, 
  connectHitInsights 
} from 'react-instantsearch-dom';
import {media,colors } from 'theme';

const algoliaClient = algoliasearch(
  '0260N9RE38',
  'dae5c9960065da104886125c6c71f354'
);
const searchClient = {
  search(requests) {
    if (requests.every(({ params }) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          page: 0,
          processingTimeMS: 0,
        })),
      });
    }

    return algoliaClient.search(requests);
  },
};

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (

  <form noValidate action="" role="search"
     css={{
        display: 'flex',
        flex: '0 0 auto',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '0.25rem',
        paddingRight: '0.25rem',
      
        [media.lessThan('expandedSearch')]: {
          justifyContent: 'flex-end',
          marginRight: 10,
        },
        [media.greaterThan('expandedSearch')]: {
          minWidth: 100,
        },
      }}>
    <input
      type="search"
      value={currentRefinement}
      onChange={event => refine(event.currentTarget.value)}
      css={{
        width: '100%',
        appearance: 'none',  
        background: 'transparent',
        border: 0,
        color: colors.white,
        fontSize: 18,
        fontWeight: 300,
        fontFamily: 'inherit',
        position: 'relative',
        padding: '4px 4px 4px 18px',
        backgroundImage: 'url(/search.svg)',
        backgroundSize: '16px 16px',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'center',
        ':focus': {
            outline: 0,
            backgroundColor: colors.lighter,
            borderRadius: '0.25rem',
          },
              
            [media.lessThan('expandedSearch')]: {
            fontSize: 16,
            width: '16px',
            transition: 'width 0.2s ease, padding 0.2s ease',
            paddingLeft: '16px',
          
         ':focus': {
            paddingLeft: '29px',
            width: '8rem',
            outline: 'none',
            },
          },
      }}
   />
  </form>
);

const CustomSearchBox = connectSearchBox(SearchBox);


const CusHits = ({ hits }) => (  
  <div css={{
    height:600,
    width:280,
    // backgroundColor:"red",
    position: "absolute",
    top:30,
    marginTop:30,
    zIndex: "100",
    right:"15%", 
  }}>
    {hits.map(hit => (
      <div>
        <a href={`/zh/tutorial/TutorialIndex/`}>
        <article>
        <h1>
            <Highlight attribute="firstname" hit={hit} tagName="mark" />
        </h1>
          <button
            onClick={() =>{
              alert("跳转到------")
            }
            }
          >
            Add
          </button>
        </article>
          </a>
      </div>
    ))}
  </div>
);

const CustomHits = connectHits(CusHits);

const Results = connectStateResults(
  ({ searchState, searchResults, children }) =>
    (searchResults && searchResults.nbHits !== 0 ) || !searchState.query ? (
      children
    ) : (
      <div>
        No results have been found for {searchState.query}</div>
    )
);
import { InfiniteHits } from 'react-instantsearch-dom';

const DocSearch = () => (
  
   <InstantSearch 
        searchClient={searchClient} 
        indexName="idesktop-zh"
      > 
      <CustomSearchBox />
      <Results>
        <CustomHits  />
      </Results>
    
    </InstantSearch>
  
);
export default DocSearch;
