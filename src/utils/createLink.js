/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import { Link } from 'gatsby';
import React from 'react';
import ExternalLinkSvg from 'templates/components/ExternalLinkSvg';
import slugify from 'utils/slugify';
import { colors, media } from 'theme';

import type { Node } from 'react';

type CreateLinkBaseProps = {
  isActive: boolean,
  item: Object,
  section: Object,
};

const createLinkBlog = ({
  isActive,
  item,
  section,
}: CreateLinkBaseProps): Node => {
  if (item.href) {
    return (
      <a css={[linkCss]} href={item.href}>
        {item.title}
      </a>
    );
  }
  return (
    <Link css={[linkCss, isActive && activeLinkCss]} to={item.id}>
      {isActive && <span css={activeLinkBefore} />}
      {item.title}
    </Link>
  );
};

const createLinkCommunity = ({
  isActive,
  item,
  section,
}: CreateLinkBaseProps): Node => {
  if (item.href) {
    return (
      <a css={[linkCss]} href={item.href} target="_blank" rel="noopener">
        {item.title}
        <ExternalLinkSvg
          cssProps={{
            verticalAlign: -2,
            display: 'inline-block',
            marginLeft: 5,
            color: colors.subtle,
          }}
        />
      </a>
    );
  }
  return createLinkDocs({
    isActive,
    item,
    section,
  });
};

const createLinkDocs = ({
  isActive,
  isNav,
  item,
  section,
  directory
}: CreateLinkBaseProps): Node => {
  let href = item.href ? directory + '/' + item.href : slugify(item.id, directory);
  return (
    <Link
      css={[isNav ? linkCss && navColor:linkCss, isActive && activeLinkCss]}      
      to={href}>
      {isActive && <span css={activeLinkBefore} />}
      {item.title}
    </Link>
  );
};

type CreateLinkTutorialProps = {
  onLinkClick: Function,
} & CreateLinkBaseProps;

const isActived = ({
  isActive,
}: CreateLinkTutorialProps): Node => {
  return true;
};

const createLinkTutorial = ({
  isNav,
  isActive,
  item,
  onLinkClick,
  section,
  directory,
}: CreateLinkTutorialProps): Node => {
  let href = item.href ? directory + '/' + item.href : slugify(item.id, directory); 
  return(
    <Link
      css={[isNav ? linkCss && navColor:linkCss, isActive && activeLinkCss]}
      onClick={onLinkClick}
      to={href} >
      {isActive && <span css={activeLinkBefore} />}
      {item.title}
    </Link>
  ); 
};

const createLinkTerms = ({
  isActive,
  item,
  section,
}: CreateLinkBaseProps): Node => {
  if (item.href) {
    return (
      <a css={[linkCss]} href={item.href}>
        {item.title}
      </a>
    );
  }
  return createLinkDocs({
    isActive,
    item,
    section,
  });
};

const createLinkapi = ({
  isActive,
  item,
  section,
  directory
}: CreateLinkBaseProps): Node => {
  let href = item.href ? directory + '/' + item.href : slugify(item.id, directory);
  return (
    <Link
      css={[linkCss, isActive && activeLinkCss]}
      to={href}>
      {isActive && <span css={activeLinkBefore} />}
      {item.title}
    </Link>
  );
};

const activeLinkCss = {
  fontWeight: 600,
  color: colors.linkblue,
};

const activeLinkBefore = {
  width: 4,
  height: 25,
  borderLeft: `4px solid ${colors.linkblue}`,
  paddingLeft: 16,
  position: 'absolute',
  left: -15,
};

const navColor = {
  color:colors.subtle,
  textTransform: "none"
}
const linkCss = {
  color: colors.text,
  display: 'inline-block',
  borderBottom: '1px solid transparent',
  transition: 'border 0.2s ease',
  fontSize: '96px', //定义侧目录二级标题的字体
  marginTop: 5,
  fontweight: 500,

  '&:hover': {
    color: colors.linkblue,
  },
};

export {
  createLinkBlog,
  createLinkCommunity,
  createLinkDocs,
  createLinkTutorial,
  createLinkTerms,
  createLinkapi,
  isActived,
};
