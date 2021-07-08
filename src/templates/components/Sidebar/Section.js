/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

import React, { isValidElement } from 'react';
import { colors, media } from 'theme';
import isItemActive from 'utils/isItemActive';
import MetaTitle from '../MetaTitle';
import { Link } from 'gatsby';
import {ChevronSvg, ActiveChevronSvg}  from '../ChevronSvg';
import Nav from './Nav.js'

class Section extends React.Component {
  state = { uid: ('' + Math.random()).replace(/\D/g, '') };

  constructor(props, context) {
    super(props, context);

    this.state = {
      // activeNav: 'WorkspaceManagent',数据管理
      activeNav: [],
    };
  }
  render() {
    const {
      activeItemId,
      createLink,
      isActive,
      isScrollSync,
      location,
      onLinkClick,
      onSectionTitleClick,
      directory,
      _toggleNav,
      section,
    } = this.props;
    const uid = 'section_' + this.state.uid;
    
    const {activeNav} = this.state;

    

    const Chevron = isActive ? ActiveChevronSvg : ChevronSvg;
    
    return (
      <div>
        {!section.subitems ?
          // <li
          // css={{
          //   color:isItemActive(location, section, directory) ? colors.linkblue: colors.subtle,
          //   color:"red",
          //   marginTop :20,
          //   fontSize: 16,
          //   fontWeight: 700 ,
          //   marginLeft: 25 ,
          //   textTransform: 'uppercase',
          //   ':hover': {
          //     color: colors.linkblue,
          //   },
          // }}>
          // {createLink({
          //   isNav :true,
          //   isActive: isScrollSync
          //     ? activeItemId === item.id
          //     : isItemActive(location, item, directory),
          //   item: section.isOrdered
          //     ? { ...section, title: `${index + 1}. ${section.title}` }
          //     : section,
          //   location,
          //   onLinkClick,
          //   section,
          //   directory
          // })}
          // </li>:
          <div>
                  <Link to={directory + "/" + section.href}>
                  <button
                    id={"button"+uid}
                    aria-expanded={isActive}
                    aria-controls={uid}
                    css={{
                      cursor: 'pointer',
                      backgroundColor: 'transparent',
                      border: 0,
                      outline: 'none',

                    }}>
                    <MetaTitle
                      cssProps={{
                        [media.greaterThan('small')]: {
                          // color: isActive ? colors.text : colors.subtle,
                          ':hover': {
                            color: colors.linkblue,
                          },
                        },
                      }}> 
                      {section.title}
                    </MetaTitle>
                  </button>
                  </Link>
                </div>
                :
            <button
              aria-expanded={isActive}
              aria-controls={uid}
              css={{
                cursor: 'pointer',
                backgroundColor: 'transparent',
                border: 0,
                // marginTop: 10,
                outline: 'none',
              }}
              onClick={onSectionTitleClick}>
              <MetaTitle
                cssProps={{
                  [media.greaterThan('small')]: {
                    color: isActive ? colors.text : colors.subtle,
                    ':hover': {
                      color: colors.linkblue,
                    },
                  },
                }}>

                  <Chevron
                    cssProps={{
                    // marginLeft: 7,
                    marginRight:7,
                    [media.lessThan('small')]: {
                      display: 'none',
                    },
                  }}
                />
                {section.title}
              </MetaTitle>
            </button>
        
      }
        {/* {console.log(createLink)} */}
        {section.subitems && section.subitems.map((item, index) => (
          <Nav
            item = {item}
            index = {index}
            activeItemId = {activeItemId}
            createLink = {createLink}
            // isShow = {false}
            isActive = {isActive}
            // activeNav = {activeNav}
            // isOpen = {activeNav.indexOf(item.title) > -1 }
            isScrollSync = {isScrollSync}
            location = {location}
            onLinkClick ={onLinkClick}
            directory={directory}
            section={section}
            _toggleNav = {_toggleNav}
            key = {index}>
            </Nav>
        ))}
      </div>
    );
  }
}
export default Section;
