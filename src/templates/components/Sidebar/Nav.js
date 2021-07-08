import React from 'react';
import { colors, media } from 'theme';
import isItemActive from 'utils/isItemActive';
import MetaTitle from '../MetaTitle';
import {ChevronSvg}  from '../ChevronSvg';
import { Alert } from 'antd';
import { Link } from 'gatsby';

import getDirectory from 'utils/getDirectory';

class Nav extends React.Component {
  // this.props 接收父组件传 的值，子组件不允许直接干预父组件的内容
  state = {  } 
  
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
}

    render() {
      const {
        item,
        index,
        activeItemId,
        createLink,
        isActive,
        isOpen,
        isScrollSync,
        location,
        directory,
        onLinkClick,
        section,
      } = this.props;
      const uid = 'section_' + ('' + Math.random()).replace(/\D/g, '');   
      
    function getUrl(item){
        const url = directory + "/" + getAvailbleUrl(item);
        return url;
    }

    function getAvailbleUrl(item){
      if(item.href == null){
        return item.subitems ? getAvailbleUrl(item.subitems[0]) :"";
      }
      return item.href;
    }
      return (
        <ul
          css={{
            fontFeatureSettings: "'tnum'",
            [media.greaterThan('small')]: {
              display:isActive ? 'block' : 'none',
            },
          }}>
            <div>
              {item.subitems ?
                <div>
                  <Link to={getUrl(item)}>
                  
                  <button
                    id={"button"+uid}
                    aria-expanded={isActive}
                    aria-controls={uid}
                    css={{
                      cursor: 'pointer',
                      backgroundColor: 'transparent',
                      border: 0,
                      outline: 'none',
                    }}
                    onClick={this.handleClick}>
                    <MetaTitle
                      cssProps={{
                        [media.greaterThan('small')]: {
                          // color: isActive ? colors.text : colors.subtle,
                          marginLeft:25 ,
                          height:"5px",
                          marginTop:"-5px",
                          ':hover': {
                            color: colors.linkblue,
                          },
                        },
                      }}> 
                      <ChevronSvg
                        cssProps={{
                          // marginLeft: 7,
                          marginRight:7,
                          transition: 'transform 0.2s ease',
  
                          [media.lessThan('small')]: {
                            display: 'none',
                          },
                        }}/>
                      {item.title}
                    </MetaTitle>
                  </button>
                  </Link>
                </div>
                :              
                  <li
                    css={{
                      color:isItemActive(location, item, directory) ? colors.linkblue: colors.subtle,
                      color:"red",
                      marginTop :20,
                      fontSize: 16,
                      fontWeight: 700 ,
                      marginLeft: 25 ,
                      ':hover': {
                        color: colors.linkblue,
                      },
                    }}>
                    {createLink({
                      isNav :true,
                      isActive: isScrollSync
                        ? activeItemId === item.id
                        : isItemActive(location, item, directory),
                      item: section.isOrdered
                        ? { ...item, title: `${index + 1}. ${item.title}` }
                        : item,
                      location,
                      onLinkClick,
                      section,
                      directory
                    })}
                    </li>
                }
              </div>
        </ul>
      )
    }

 handleClick(){
     this.props._toggleNav(this.props.item);
 }
}

export default Nav;