/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

// $FlowExpectedError
import navCommunity from '../../content/zh/community/nav.yml';
// $FlowExpectedError
import navDocs_en from '../../content/en/docs/nav.yml';
import navDocs_zh from '../../content/zh/docs/nav.yml';
import navGuides_en from '../../content/en/guides/nav.yml';
import navGuides_zh from '../../content/zh/guides/nav.yml';
import navTopics_en from '../../content/en/topics/nav.yml';
import navTopics_zh from '../../content/zh/topics/nav.yml';
// $FlowExpectedError
import navTutorial_en from '../../content/en/tutorial/nav.yml';
import navTutorial_zh from '../../content/zh/tutorial/nav.yml';

import navTerms_en from '../../content/en/terms/nav.yml';
import navTerms_zh from '../../content/zh/terms/nav.yml';
import navSpecs_en from '../../content/en/specs/nav.yml';
import navSpecs_zh from '../../content/zh/specs/nav.yml';

const sectionListDocs_en = navDocs_en.map(
  (item: Object): Object => ({
    ...item,
    directory: '/en/docs',
  }),
);

const sectionListDocs_zh = navDocs_zh.map(
  (item: Object): Object => ({
    ...item,
    directory: '/zh/docs',
  }),
);

const sectionListGuides_en = navGuides_en.map(
  (item: Object): Object => ({
    ...item,
    directory: '/en/guides',
  }),
);

const sectionListGuides_zh = navGuides_zh.map(
  (item: Object): Object => ({
    ...item,
    directory: '/zh/guides',
  }),
);

const sectionListTopics_en = navTopics_en.map(
  (item: Object): Object => ({
    ...item,
    directory: '/en/topics',
  }),
);

const sectionListTopics_zh = navTopics_zh.map(
  (item: Object): Object => ({
    ...item,
    directory: '/zh/topics',
  }),
);


const sectionListSpecs_en = navSpecs_en.map(
  (item: Object): Object => ({
    ...item,
    directory: '/en/specs',
  }),
);

const sectionListSpecs_zh = navSpecs_zh.map(
  (item: Object): Object => ({
    ...item,
    directory: '/zh/specs',
  }),
);


const sectionListCommunity = navCommunity.map(
  (item: Object): Object => ({
    ...item,
    directory: 'community',
  }),
);

const sectionListTutorial_en = navTutorial_en.map(
  (item: Object): Object => ({
    ...item,
    directory: '/en/tutorial',
  }),
);

const sectionListTutorial_zh = navTutorial_zh.map(
  (item: Object): Object => ({
    ...item,
    directory: '/zh/tutorial',
  }),
);

const sectionListTerms_en = navTerms_en.map(
  (item: Object): Object => ({
    ...item,
    directory: '/en/terms',
  }),
);

const sectionListTerms_zh = navTerms_zh.map(
  (item: Object): Object => ({
    ...item,
    directory: '/zh/terms',
  }),
);

export {
  sectionListCommunity,
  sectionListDocs_en,
  sectionListDocs_zh,
  sectionListGuides_en,
  sectionListGuides_zh,
  sectionListTopics_en,
  sectionListTopics_zh,
  sectionListTutorial_en,
  sectionListTutorial_zh,
  sectionListTerms_en,
  sectionListTerms_zh,
  sectionListSpecs_en,
  sectionListSpecs_zh,
};
