import React from 'react';
import PropTypes from 'prop-types';
import tocbot from 'tocbot';
import {FormattedMessage} from 'react-intl';

class TOC extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount() {
        tocbot.init({
            // Where to render the table of contents.
            tocSelector: `#artile_TocListContainer`,
            // Where to grab the headings to build the table of contents.
            contentSelector: `#article_Content`,
            // Which headings to grab inside of the contentSelector element.
            headingSelector: `h2, h3`,
            headingsOffset: parseInt(this.props.headingsOffset),
            
        })
        // this.addEvent()
    }

//      addEvent(){

//         var list = document.getElementsByClassName("toc-link");
//  
//         for(var i = 0; i <list.length; i++){
//             list[i].addEventListener("click",function (e) {
//             var a = e.target;
//             var className = a.getAttribute('class');
            
//             if(className.indexOf("is-active-link") == -1){
//                 a.className += " is-active-link";
//             }
//             // a.addClass("is-active-link")
//             // alert()
//             });
//         }
//       }

    render() {
        return (
            <nav data-cy="toc" css={{
                position: 'fixed',
                overflowY: 'auto',
                top: '121px',
                bottom: '0',
                fontWeight:"bold",
                fontSize: '23px', // 添加右側目錄的字体大小
              }}>
                {(this.props.showHeading ? <FormattedMessage id="rightcontents_title">
              {txt => (
                <h3 id ={"#"+txt} onDark={true}>{txt}</h3>
              )} </FormattedMessage>: null)}
                <div id ="artile_TocListContainer" className='toc-list-container'></div>
            </nav>
        )
    }
}

TOC.defaultProps = {
    headingsOffset: `5`,
    showHeading: true,
}

TOC.propTypes = {
    headingsOffset: PropTypes.string,
    className: PropTypes.string,
    listClasses: PropTypes.string,
    showHeading: PropTypes.bool,
}


export default TOC
