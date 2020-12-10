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
import {sectionListTopics_en, sectionListTopics_zh} from 'utils/sectionList';
import getSectionByLocation from 'utils/getSectionByLocation';
import getNavList from 'utils/getNavList';

const Topics = ({data, location}) => {
  let sectionListDocs = sectionListTopics_en;
  if (location.pathname.indexOf("/zh/") > -1 ) {
    sectionListDocs = sectionListTopics_zh;
  }
  ('docs data');
  (data.markdownRemark);
  
  let directory = sectionListDocs[0].directory;
  let title = directory.indexOf("/zh/") > -1 ? "技术专题" : "Tech Docs";

  return (
    <Layout location={location}>
      <MarkdownPage
        createLink={createLinkDocs}
        location={location}
        markdownRemark={data.markdownRemark}
        sectionList={sectionListDocs}
        sectionList={getSectionByLocation(directory,location,sectionListDocs)}
        navList={getNavList(directory,location,sectionListDocs,title,"/supermap-bigdata-tech/")}
        directory = {directory}
        // titlePostfix=" &ndash; SuperMap"  // 控制页面在浏览器中的标题
      />
    </Layout>
  );
};

Topics.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query TemplateTopicsMarkdown($slug: String!) {
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

export default Topics;
