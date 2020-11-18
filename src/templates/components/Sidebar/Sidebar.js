/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

import React, {Component} from 'react';
import Flex from 'components/Flex';
import Section from './Section';
import ScrollSyncSection from './ScrollSyncSection';
import {media} from 'theme';

class Sidebar extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      activeSection: props.defaultActiveSection,
      // title :""
    };
  }

  render() {
    const {
      closeParentMenu,
      createLink,
      enableScrollSync,
      location,
      directory,
      sectionList,
    } = this.props;
    const {activeSection} = this.state;

    

    const SectionComponent = enableScrollSync ? ScrollSyncSection : Section;


    // const SectionComponent = ScrollSyncSection ;

    // alert(this.state.title) 
    return (
      <Flex
        type="nav"
        direction="column"
        halign="stretch"
        css={{
          width: '250px',
          // backgroundColor:"red",
          position: 'relative',

          [media.greaterThan('largerSidebar')]: {
            // paddingLeft: 40,
          },

          [media.lessThan('small')]: {
            paddingBottom: 100,
          },
        }}>
        {sectionList.map((section, index) => (
          <SectionComponent
            createLink={createLink}
            isActive={activeSection === section}
            key={index}
            location={location}
            onLinkClick={closeParentMenu}
            directory={directory}
            onSectionTitleClick={() => this._toggleSection(section,location.pathname)}
            _toggleNav = {this._toggleNav.bind(this)}
            section={section}
          />
        ))}
      </Flex>
    );
  }

  
  _toggleNav = val => {
    // this.setState({
    //   title: val.title,
    // });
  }

  _toggleSection(section) {
    this.setState(state => ({
      activeSection: state.activeSection === section ? null : section,
    }));
  }
}

export default Sidebar;
