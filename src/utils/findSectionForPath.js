/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import slugify from './slugify';

/**
 * Helper method to locate the section containing the current URL/path.
 * This method specifically works with the nav_*.yml format.
 */

type Item = {
  id: string,
  subitems: Array<Item>,
};

type Section = {
  items: Array<Item>,
};

const findSectionForPath = (
  directory:string,
  pathname: string,
  sections: Array<Section>,
): Section | void => {
  let activeSection;
  const pathArray = pathname.split('/');
  const index = pathArray.length - 2;
  const slugId = pathArray.slice(index)[0];

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

  function hasMatch(items) {
    return items.some(
      item => (item.href && currentPath === (directory + '/' + item.href)) || slugId === slugify(item.id) ||
        (item.subitems && hasMatch(item.subitems, directory))
    );
  };
  // console.log(sections)
  sections.forEach(section => {
    const match = section.subitems && hasMatch(section.subitems);
    if (match) {
      activeSection = section;
    }
  });

  return activeSection;
};

export default findSectionForPath;
