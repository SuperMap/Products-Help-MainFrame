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
  subitems: Array<Item>,
};

const getSectionByLocation = (
  directory:string,
  location: string,
  sections: Array<Section>,
): Section | void => {

  let findItem;
  let pathname = location.pathname;

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
  
  let find = false;
  function hasMatch(parent,items) {
    items.forEach(item => {
      
      let has = (item.href && currentPath === (directory + '/' + item.href)) || slugId === slugify(item.id) ;
        if(!find && has){
          if(item.subitems){
            findItem = items;
          }else{
            findItem = parent;
          }
          find = true;
        }else{
          item.subitems && hasMatch(items,item.subitems);
        }
    });
  };
  sections.forEach(section => {
    if(!find){
       hasMatch(sections,section.subitems);
       if(findItem != null){
          sections = findItem;
      }
    }
  });
  // console.log(sections)
  return sections;
};

export default getSectionByLocation;
