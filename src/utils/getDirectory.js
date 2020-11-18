/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import {sectionListTutorial_en, sectionListTutorial_zh} from 'utils/sectionList';

const getDirectory =() => {

  let sectionListTutorialTmp = sectionListTutorial_en;
  if (data.markdownRemark.fields.langKey === 'zh') {
    sectionListTutorialTmp = sectionListTutorial_zh;
  }
  alert( sectionListTutorialTmp[0].directory)
  return sectionListTutorialTmp[0].directory;
};

export default getDirectory;
