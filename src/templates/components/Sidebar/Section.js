/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

import React from 'react';
import {colors, media} from 'theme';
import isItemActive from 'utils/isItemActive';
import MetaTitle from '../MetaTitle';
import ChevronSvg from '../ChevronSvg';

class Section extends React.Component {
  state = {uid: ('' + Math.random()).replace(/\D/g, '')};
renderSectionItems(items) {
    const {
      activeItemId,
      createLink,
      isActive,
      isScrollSync,
      location,
      onLinkClick,
      onSectionTitleClick,
      section,
    } = this.props;
    const uid = 'section_' + this.state.uid;
    return (
      <ul
        id={uid}
        css={{
          fontFeatureSettings: "'tnum'",
          marginBottom: 10,

          [media.greaterThan('small')]: {
            display: isActive ? 'block' : 'none',
          },
        }}>
        {items.map((item, index) => (
          <li
            key={item.id}
            css={{
              marginTop: 5,
              marginLeft: 20,
            }}>
            {createLink({
              isActive: isScrollSync
                ? activeItemId === item.id
                : isItemActive(location, item),
              item: section.isOrdered
                ? {...item, title: `${index + 1}. ${item.title}`}
                : item,
              location,
              onLinkClick,
              section,
            })}

            {item.subitems && (
              this.renderSectionItems(item.subitems)
            )}
          </li>
        ))}
      </ul>
    )
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
      section,
    } = this.props;
    const uid = 'section_' + this.state.uid;
    return (
      <div>
        <button
          aria-expanded={isActive}
          aria-controls={uid}
          css={{
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: 0,
            marginTop: 10,
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
            {section.title}
            <ChevronSvg
              cssProps={{
                marginLeft: 7,
                transform: isActive ? 'rotateX(180deg)' : 'rotateX(0deg)',
                transition: 'transform 0.2s ease',

                [media.lessThan('small')]: {
                  display: 'none',
                },
              }}
            />
          </MetaTitle>
        </button>
     
        {
          this.renderSectionItems(section.items)
        }
      </div>
    );
  }
}

export default Section;
