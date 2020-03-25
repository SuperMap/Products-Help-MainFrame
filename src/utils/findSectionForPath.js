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

  function hasMatch(items, directory) {
    return items.some(
      item => (item.href && currentPath === (directory + '/' + item.href)) || slugId === slugify(item.id) ||
        (item.subitems && hasMatch(item.subitems, directory))
    );
  };

  sections.forEach(section => {
    const match = hasMatch(section.items, section.directory);
    if (match) {
      activeSection = section;
    }
  });

  return activeSection;
};

export default findSectionForPath;
