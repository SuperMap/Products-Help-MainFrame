/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import Container from 'components/Container';
import ExternalFooterLink from './ExternalFooterLink';
import FooterLink from './FooterLink';
import FooterNav from './FooterNav';
import MetaTitle from 'templates/components/MetaTitle';
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {colors, media} from 'theme';
import {sectionListGuides_en, sectionListGuides_zh, 
  sectionListDocs_en, sectionListDocs_zh,
  sectionListTopics_en,
  sectionListTopics_zh,
  sectionListTutorial_en,
  //sectionListTutorial_zh,
} from 'utils/sectionList';

import ossLogoPng from 'icons/supermap_logo.svg';
import { sectionListTutorial_zh } from '../../utils/sectionList';

const Footer = ({layoutHasSidebar = false, curLan = 'en'}: {layoutHasSidebar: boolean, curLan: string}) => {
  let sectionListGuides = sectionListGuides_en;
  let sectionListDocs = sectionListDocs_en;
  let sectionListTopics = sectionListTopics_en;
  let sectionListTutorial = sectionListTutorial_en;
  let count=0;
  if (curLan === 'zh') {
    sectionListGuides = sectionListGuides_zh;
    sectionListDocs = sectionListDocs_zh;
    sectionListTopics = sectionListTopics_zh;
    sectionListTutorial = sectionListTutorial_zh;
  }
  return (
  <footer
    css={{
      backgroundColor: colors.darker,
      color: colors.white,
      paddingTop: 10,
      paddingBottom: 50,
      zIndex:2,
      [media.size('sidebarFixed')]: {
        paddingTop: 40,
      },
    }}
  >
    <Container>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',

          [media.between('small', 'medium')]: {
            // paddingLeft: layoutHasSidebar ? 240 : null,
          },

          [media.between('large', 'largerSidebar')]: {
            // paddingLeft: layoutHasSidebar ? 280 : null,
          },
          [media.between('largerSidebar', 'sidebarFixed', true)]: {
            // paddingLeft: layoutHasSidebar ? 380 : null,
          },
        }}>
        <div
          css={{
            flexWrap: 'nowrap',
            display: 'flex',
            [media.lessThan('small')]: {
              flexWrap: 'wrap',
            },

            [media.lessThan('large')]: {
              width: '100%',
            },
            [media.greaterThan('xlarge')]: {
              width: 'calc(100% / 3 * 2)',
              paddingLeft: 40,
            },
          }}>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <FormattedMessage id="footer_guides">
              {txt => (
                <MetaTitle onDark={true}>{txt}</MetaTitle>
              )}
            </FormattedMessage>
             {sectionListGuides.map(section => {
               const defaultItem = section.subitems[0];
                return (
                <FooterLink
                  to={curLan+`/guides/${defaultItem.id}/`}
                  key={section.title}>
                  {section.title}
                </FooterLink>
                );
                })}
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <FormattedMessage id="footer_tutorial">
              {txt => (
                <MetaTitle onDark={true}>{txt}</MetaTitle>
              )}
            </FormattedMessage>
            {
              sectionListTutorial.map(section => {
                //添加限定显示目录树
              if(count>=4){
                return ""
              }
              const defaultItem = section.subitems[0];
              count++
              return (
                <FooterLink
                  to={curLan+`/tutorial/${defaultItem.id}/`}
                  key={section.title}>
                  {section.title}
                </FooterLink>
              );
            })}
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <FormattedMessage id="footer_topics">
              {txt => (
                <MetaTitle onDark={true}>{txt}</MetaTitle>
              )}
            </FormattedMessage>
            {sectionListTopics.map(section => {
              const defaultItem = section.subitems[0];
              return (
                <FooterLink
                  to={curLan+`/topics/${defaultItem.id}/`}
                  key={section.title}>
                  {section.title}
                </FooterLink>
              );
            })}
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
           <FormattedMessage id="footer_api">
              {txt => (
                <MetaTitle onDark={true}>{txt}</MetaTitle>
              )}
            </FormattedMessage>
            <ExternalFooterLink
              href="http://support.supermap.com.cn/DataWarehouse/WebDocHelp/iDesktop911/WebHelp_JavaAPI/SuperMap_iDesktop_Java_API.htm"
              target="_blank"
              rel="noopener">
              API
            </ExternalFooterLink>
            {/* 有REST、OGC开发语言的，可以把下面的代码段开放出来。 */}
            {/* <ExternalFooterLink
              href="http://www.supermap.com"
              target="_blank"
              rel="noopener">
              REST
            </ExternalFooterLink>
            <ExternalFooterLink
              href="http://www.supermap.com"
              target="_blank"
              rel="noopener">
              OGC
            </ExternalFooterLink> */}
          </FooterNav>
          {/* 以下内容为文档规范的链接内容 */}
          {/* <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <FormattedMessage id="footer_specs">
              {txt => (
                <MetaTitle onDark={true}>{txt}</MetaTitle>
              )}
            </FormattedMessage>
            {sectionListTopics.map(section => {
              const defaultItem = section.subitems[0];
              return (
                <FooterLink
                  to={curLan+`/specs/${defaultItem.id}/`}
                  key={section.title}>
                  {section.title}
                </FooterLink>
              );
            })}
          </FooterNav> */}
        </div>
        <section
          css={{
            paddingTop: 40,
            display: 'block !important', // Override 'Installation' <style> specifics

            [media.greaterThan('xlarge')]: {
              width: 'calc(100% / 3)',
              order: -1,
            },
            [media.greaterThan('large')]: {
              order: -1,
              width: layoutHasSidebar ? null : 'calc(100% / 3)',
            },
            [media.lessThan('large')]: {
              textAlign: 'center',
              width: '100%',
              paddingTop: 40,
            },
          }}>
          <a
           href="https://www.supermap.com/cn/"
            target="_blank"
            rel="noopener">
            <img
              alt="Supermap Open Source"
               css={{
                maxWidth: 160,
                height: 'auto',
              }}
              src={ossLogoPng}
            />
          </a>
          <p
            css={{
              color: colors.subtleOnDark,
              paddingTop: 15,
            }}>
            {`Copyright © ${new Date().getFullYear()} SuperMap Software Co., Ltd.`}
          </p>
        </section>
      </div>
    </Container>
  </footer>
);}

export default Footer;
