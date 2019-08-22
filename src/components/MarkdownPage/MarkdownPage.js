/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import Container from 'components/Container';
import Flex from 'components/Flex';
import MarkdownHeader from 'components/MarkdownHeader';
import NavigationFooter from 'templates/components/NavigationFooter';
import React from 'react';
import StickyResponsiveSidebar from 'components/StickyResponsiveSidebar';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import findSectionForPath from 'utils/findSectionForPath';
import toCommaSeparatedList from 'utils/toCommaSeparatedList';
import {sharedStyles} from 'theme';
import createOgUrl from 'utils/createOgUrl';
import TOC from 'components/TOC.js';

import DownloadPDF from './DownloadPDF';
import type {Node} from 'types';

type Props = {
  authors: Array<string>,
  createLink: Function, // TODO: Add better flow type once we Flow-type createLink
  date?: string,
  enableScrollSync?: boolean,
  ogDescription: string,
  location: Location,
  markdownRemark: Node,
  sectionList: Array<Object>, // TODO: Add better flow type once we have the Section component
  titlePostfix: string,
  hasCurTOC: Boolean,
};

// const getPageById = (sectionList: Array<Object>, templateFile: ?string) => {
//   if (!templateFile) {
//     return null;
//   }

//   const sectionItems = sectionList.map(section => section.items);
//   const flattenedSectionItems = [].concat.apply([], sectionItems);
//   const linkId = templateFile.replace('.html', '');

//   return flattenedSectionItems.find(item => item.id === linkId);
// };

const MarkdownPage = ({
  authors = [],
  createLink,
  date,
  enableScrollSync,
  ogDescription,
  location,
  markdownRemark,
  sectionList,
  titlePostfix = '-SuperMap',
  hasCurTOC = true,
}: Props) => {
  const hasAuthors = authors.length > 0;
  const titlePrefix = markdownRemark.frontmatter.title || '';

  // const prev = getPageById(sectionList, markdownRemark.frontmatter.prev);
  // const next = getPageById(sectionList, markdownRemark.frontmatter.next);
  // console.log(markdownRemark.html);

  return (
    <Flex
      direction="column"
      grow="1"
      shrink="0"
      halign="stretch"
      css={{
        width: '100%',
        flex: '1 0 auto',
        position: 'relative',
        zIndex: 0,
      }}>
      <TitleAndMetaTags
        ogDescription={ogDescription}
        ogUrl={createOgUrl(markdownRemark.fields.slug)}
        //title={`${titlePrefix}${titlePostfix}`}  //浏览器标题中带有SuperMap后缀
        title={`${titlePrefix}`}
      />
      <div css={{
        flex: '1 0 auto',
        backgroundColor: '#f7f7f7',
      }}>
        <Container>
          <div css={sharedStyles.articleLayout.container}>
          <div css={sharedStyles.articleLayout.sidebar}>
              <StickyResponsiveSidebar
                enableScrollSync={enableScrollSync}
                createLink={createLink}
                defaultActiveSection={findSectionForPath(
                  location.pathname,
                  sectionList,
                )}
                location={location}
                sectionList={sectionList}
              />
            </div>
            <Flex type="article" direction="column" grow="1" halign="stretch" css={sharedStyles.articleLayout.article}>
              <MarkdownHeader title={titlePrefix} />

              {(date || hasAuthors) && (
                <div css={{marginTop: 15}}>
                  {date}{' '}
                  {hasAuthors && (
                    <span>
                      by{' '}
                      {toCommaSeparatedList(authors, author => (
                        <a
                          css={sharedStyles.link}
                          href={author.frontmatter.url}
                          key={author.frontmatter.name}>
                          {author.frontmatter.name}
                        </a>
                      ))}
                    </span>
                  )}
                </div>
              )}

              <div css={sharedStyles.articleLayout.content}>
              <DownloadPDF title="Download" markdownTitle={titlePrefix}/>
                <div id="article_Content"
                  css={[sharedStyles.markdown]}
                  dangerouslySetInnerHTML={{__html: markdownRemark.html}}
                />

                {markdownRemark.fields.path && (
                  <div css={{marginTop: 80}}>
                    <a
                      css={sharedStyles.articleLayout.editLink}
                      href={`https://github.com/reactjs/reactjs.org/tree/master/${
                        markdownRemark.fields.path
                      }`}>
                      Edit this page
                    </a>
                  </div>
                )}
              </div>
            </Flex>
            {hasCurTOC? <div css={sharedStyles.articleLayout.curPageTOC}>
              <TOC/>
            </div>:null}
            
          </div>
        </Container>
      </div>

      {/* {(next || prev) && (
        <NavigationFooter location={location} next={next} prev={prev} />
      )} */}
    </Flex>
  );
};

export default MarkdownPage;
