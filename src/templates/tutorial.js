/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

import MarkdownPage from 'components/MarkdownPage';
import React from 'react';
import {graphql} from 'gatsby';
import Layout from 'components/Layout';
import {createLinkTutorial} from 'utils/createLink';
import {isActived} from 'utils/createLink';
import getSectionByLocation from 'utils/getSectionByLocation';
import getNavList from 'utils/getNavList';

import {sectionListTutorial_en, sectionListTutorial_zh} from 'utils/sectionList';

const Tutorial = ({data, location}) => {
  let sectionListTutorialTmp = sectionListTutorial_en;
  if (location.pathname.indexOf("/zh/") > -1 ) {
    sectionListTutorialTmp = sectionListTutorial_zh;
  }


  let directory = sectionListTutorialTmp[0].directory;
  let title = directory.indexOf("/zh/") > -1 ? "教程" : "Tutorial";

  // console.log("----------------------->")
  // console.log(sectionListTutorialTmp)
  return (
    <Layout location={location}>
      <MarkdownPage
        createLink={createLinkTutorial}
        location={location}
        markdownRemark={data.markdownRemark}
        getDirectory
        sectionList={getSectionByLocation(directory,location,sectionListTutorialTmp)}
        navList={getNavList(directory,location,sectionListTutorialTmp,title,"/TutorialIndex/")}
        directory = {directory}
        // titlePostfix=" &ndash; SuperMap" // 控制页面在浏览器中的标题
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query TemplateTutorialMarkdown($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        next
        prev
      }
      fields {
        path
        slug
        langKey
      }
    }
  }
`;

export default Tutorial;
