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
import {sectionListSpecs_en, sectionListSpecs_zh} from 'utils/sectionList';
import getSectionByLocation from 'utils/getSectionByLocation';
import getNavList from 'utils/getNavList';

const Specs = ({data, location}) => {
  let sectionListDocs = sectionListSpecs_en;
  if (location.pathname.indexOf("/zh/") > -1 ) {
    sectionListDocs = sectionListSpecs_zh;
  }
  return (
    <Layout location={location}>
      <MarkdownPage
        createLink={createLinkDocs}
        location={location}
        markdownRemark={data.markdownRemark}
        sectionList={sectionListDocs}
        // titlePostfix=" &ndash; SuperMap" //控制页面在浏览器中的标题
      />
    </Layout>
  );
};

Specs.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query TemplateSpecsMarkdown($slug: String!) {
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

export default Specs;
