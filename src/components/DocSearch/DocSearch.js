import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import SearchResultList from './SearchResultList';
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
      onBlur={blur}
      onFocus={onFocus}
      onChange={event => refine(event.currentTarget.value)}
      placeholder="Search"
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
  <div id="search-result" css={{
    height:600,
    width:280,
    position: "absolute",
    top:25,
    marginTop:30,
    zIndex: "100",
    right:"25%", 
  }}>
			<SearchResultList find={true} hits={hits}></SearchResultList>
  </div>
);

const CustomHits = connectHits(CusHits);

const Results = connectStateResults(
  ({ searchState, searchResults, children }) =>
    (searchResults && searchResults.nbHits !== 0 ) || !searchState.query ? (
      children
    ) : (
      <div id="search-result" css={{
        height:600,
        width:280,
        position: "absolute",
        top:25,
        marginTop:30,
        zIndex: "100",
        right:"25%", 
      }}>
        <SearchResultList find={false} query={searchState.query}></SearchResultList>
      </div>
    )
);

const DocSearch = () => (
  
   <InstantSearch 
        searchClient={searchClient} 
        indexName="idesktop-zh"
      > 
      <CustomSearchBox />
      <Results>
        <CustomHits/>
      </Results>
    
    </InstantSearch>
  
);

function blur() {
  setTimeout(hiddenResult,500);
}

function hiddenResult(){
  var resut = document.getElementById("search-result");
  if( resut){
    if( resut.style){
        resut.style.display = "none";
   }
  }
}

function onFocus(){
  var resut = document.getElementById("search-result");
  if(resut){
    if( resut.style){
        resut.style.display = "block";
   }
  }
}
export default DocSearch;

