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

const getNavList = (
  directory:string,
  location: string,
  sections: Array<Section>,
  indexTitle:string,
  indexPage:string
): Section | void => {

  let navs = [];
  let tu = new Object();
  tu.title = indexTitle;
  tu.href = indexPage;
  navs.push(tu);

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

  function hasMatch(items,re) {
    
      if(!find){
        items.forEach(item => {
          let ob = new Object();
          ob.title = item.title;
          ob.href = item.href ? item.href : item.id;
          re.push(ob)
          let has = (item.href && currentPath === (directory + '/' + item.href)) || slugId === slugify(item.id) ;
          if(!find && has){
            find = true;
            throw new Error("");
          }else{
            if( !item.subitems){
              re.pop();
            }else{
              hasMatch(item.subitems,re);        
              }
          }
        }); 
        re.pop();
      }
  };

    sections.forEach(section => {
      let re = [];

      let ob = new Object();
      ob.title = section.title;
      ob.href = section.href;
      re.push(ob);

      if(!find){ 
        try{
          hasMatch(section.subitems,re);
        }catch(e){
          //捕获异常来得到结果
          navs.push.apply(navs, re)
        }
       }
    });
  return navs;
};

export default getNavList;
