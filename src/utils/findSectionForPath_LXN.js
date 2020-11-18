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

  sections.forEach(section => {
    const match = section.subitems.some(
      item =>
        slugId === slugify(item.id) ||
        (item.subitems &&
          item.subitems.some(subitem => slugId === slugify(subitem.id))),
    );
    if (match) {
      activeSection = section;
    }
  });

  return activeSection;
};

export default findSectionForPath;
