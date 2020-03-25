/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import slugify from 'utils/slugify';

const toAnchor = (href: string = ''): string => {
  const index = href.indexOf('#');
  return index >= 0 ? href.substr(index) : '';
};

// TODO Account for redirect_from URLs somehow; they currently won't match.
// This comment should not be true anymore since we're using 300 redirects

type Item = {
  id: string,
  href: string,
};

const isItemActive = (location: Location, item: Item, directory): boolean => {
  if (item.href) {
    let pathname = location.pathname;
    let startIndex = pathname.indexOf('/zh/');
    let endIndex = pathname.lastIndexOf('/');
    if (startIndex == -1) {
      startIndex = pathname.indexOf('/en/');
      if (startIndex == -1) {
        startIndex = 0;
      }
    }
    if (endIndex != pathname.length - 1) {
      endIndex = pathname.length;
    }
    const currentPath = pathname.substring(startIndex, endIndex);
    if (currentPath === (directory + '/' + item.href)) {
      return true;
    }
  } else if (item.id.includes('html')) {
    return location.pathname.includes(item.id);
  }
  const pathArray = location.pathname.split('/');
  const slugId = pathArray.slice(pathArray.length - 2)[0];
  return slugId === slugify(item.id);
};

export default isItemActive;
