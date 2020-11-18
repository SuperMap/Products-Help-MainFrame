/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

import MarkdownPage from 'components/MarkdownPage';
import PropTypes from 'prop-types';
import React from 'react';
import {graphql} from 'gatsby';
import Layout from 'components/Layout';
import {createLinkDocs} from 'utils/createLink';
import {sectionListGuides_en, sectionListGuides_zh} from 'utils/sectionList';
import getSectionByLocation from 'utils/getSectionByLocation';
import getNavList from 'utils/getNavList';

const Guides = ({data, location}) => {
  let sectionListDocs = sectionListGuides_en;
  if (data.markdownRemark.fields.langKey === 'zh') {
    sectionListDocs = sectionListGuides_zh;
  }
  // console.log('guides data');
  // console.log(data.markdownRemark);
  console.log(sectionListDocs)
  let directory = sectionListDocs[0].directory;
  let title = directory.indexOf("/zh/")> -1 ? "入门" : "Guides";

  return (
    <Layout location={location}>
      <MarkdownPage
        createLink={createLinkDocs}
        location={location}
        markdownRemark={data.markdownRemark}
        sectionList={sectionListDocs}
        sectionList={getSectionByLocation(directory,location,sectionListDocs)}
        navList={getNavList(directory,location,sectionListDocs,title,"/getting-started/")}
        directory = {directory}
        //titlePostfix=" &ndash; SuperMap" //控制页面在浏览器中的标题
      />
    </Layout>
  );
};

Guides.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query TemplateGuidesMarkdown($slug: String!) {
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

export default Guides;
