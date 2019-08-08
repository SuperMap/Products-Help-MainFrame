import React from 'react';
import PropTypes from 'prop-types';
import tocbot from 'tocbot';

class TOC extends React.Component {
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
    }

    render() {
        return (
            <nav data-cy="toc" css={{
                position: 'fixed',
                overflowY: 'auto',
                top: '101px',
                bottom: '0',
              }}>
                {(this.props.showHeading ? <h3>本主题内容</h3> : null)}
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
