/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

import MarkdownPage from 'components/MarkdownPage';
import React from 'react';
import {graphql} from 'gatsby';
import Layout from 'components/Layout';
import {createLinkTerms} from 'utils/createLink';
import {sectionListTerms_en, sectionListTerms_zh} from 'utils/sectionList';
import getSectionByLocation from 'utils/getSectionByLocation';
import getNavList from 'utils/getNavList';

const Terms = ({data, location}) => {
  let sectionListTutorialTmp = sectionListTerms_en;
  if (location.pathname.indexOf("/zh/") > -1 ) {
    sectionListTutorialTmp = sectionListTerms_zh;
  }
  // console.log('tutorial directory');
  // console.log(sectionListTutorialTmp);  
  

  let directory = sectionListTutorialTmp[0].directory;
  let title = directory.indexOf("/zh/") > -1 ? "GIS 术语" : "GIS Terms";

  return (
    <Layout location={location}>
      <MarkdownPage
        enableScrollSync
        createLink={createLinkTerms}
        location={location}
        markdownRemark={data.markdownRemark}
        // sectionList={sectionListTutorialTmp}
        sectionList={getSectionByLocation(directory,location,sectionListTutorialTmp)}
        navList={getNavList(directory,location,sectionListTutorialTmp,title,"/terms/")}
        directory = {directory}
        hasCurTOC={false}
        // titlePostfix=" &ndash; SuperMap" hasCurTOC={false} // 控制页面在浏览器中的标题
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query TemplateTermsMarkdown($slug: String!) {
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

export default Terms;
