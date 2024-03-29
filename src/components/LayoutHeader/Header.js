/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import Container from 'components/Container';
import HeaderLink from './HeaderLink';
import {Link} from 'gatsby';
import React from 'react';
import {colors, fonts, media} from 'theme';
import {version} from 'site-constants';
import ExternalLinkSvg from 'templates/components/ExternalLinkSvg';
import DocSearch from 'components/DocSearch';

import logoSvg from 'icons/logo.svg';
import {FormattedMessage} from 'react-intl';
import { Dropdown, Icon } from 'antd';
import menu from './menu';
import "antd/dist/antd.css";

// const activeStyle = {
//   color: colors.brand,

//   [media.greaterThan('small')]: {
//     position: 'relative',
//   },
// };
const Header = ({location, langsMenu}) => {
  let curLan;
  let toLanObj = {};
  langsMenu.map(item => {
    if (item.selected) {
      curLan = item.langKey;
    } else {
      if (item.langKey === 'zh') {
        toLanObj.txt = '简体中文';
      } else {
        toLanObj.txt = 'English';
      }
      toLanObj.link = item.link;
    }
  });
  
  // 指定当前显示的产品名称
  let productName="iDesktop";
  let dropDown = 'SuperMap ' + productName;
  return (
    <header
      css={{
        backgroundColor: colors.darker,
        color: colors.white,
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        top: 0,
        left: 0,
      }}>
      <Container>
        <div
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: 60,
            [media.between('small', 'large')]: {
              height: 50,
            },
            [media.lessThan('small')]: {
              height: 40,
            },
          }}>
          {/* <Link
            css={{
              display: 'flex',
              marginRight: 10,
              height: '100%',
              alignItems: 'center',
              color: colors.brand,

              ':focus': {
                outline: 0,
                color: colors.white,
              },

              [media.greaterThan('small')]: {
                width: 'calc(100% / 6)',
              },
              [media.lessThan('small')]: {
                flex: '0 0 auto',
              },
            }}
            to={'/' + curLan}>
            <img src={logoSvg} alt="" height="20" />
            <FormattedMessage id="site_productName">
              {txt => (
                <span
                  css={{
                    color: 'inherit',
                    marginLeft: 10,
                    fontWeight: 700,
                    fontSize: 20,
                    lineHeight: '20px',
                    [media.lessThan('large')]: {
                      fontSize: 16,
                      marginTop: 1,
                    },
                    [media.lessThan('small')]: {
                      // Visually hidden
                      position: 'absolute',
                      overflow: 'hidden',
                      clip: 'rect(0 0 0 0)',
                      height: 1,
                      width: 1,
                      margin: -1,
                      padding: 0,
                      border: 0,
                    },
                  }}>
                  {txt}
                </span>
              )}
            </FormattedMessage>
          </Link> */}
            <Dropdown overlay={menu} placement="bottomCenter">
            <a href={'/' + productName + '/' + curLan + '/'}  className="ant-dropdown-link" css={{
              color: colors.white,
              marginRight: 10,
              fontWeight: 700,
              fontSize: 20,
              lineHeight: '20px',
              padding: '10px 0',

              ':hover': {
                color: colors.brand,
              },

              ':focus': {
                outline: 0,
                backgroundColor: colors.lighter,
                borderRadius: 15,
              },
              [media.lessThan('large')]: {
                fontSize: 16,
                marginTop: 1,
              },
              [media.lessThan('small')]: {
                // Visually hidden
                position: 'absolute',
                overflow: 'hidden',
                clip: 'rect(0 0 0 0)',
                height: 1,
                width: 1,
                margin: -1,
                padding: 0,
                border: 0,
              },
            }}>
              {dropDown} <Icon type="down" />
            </a>
            </Dropdown>
          <nav
            css={{
              flex: '1',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'stretch',
              overflowX: 'auto',
              overflowY: 'hidden',
              WebkitOverflowScrolling: 'touch',
              height: '100%',

              // Hide horizontal scrollbar
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              '::-webkit-scrollbar': {
                display: 'none',
              },

              [media.size('xsmall')]: {
                flexGrow: '1',
                width: 'auto',
              },
              [media.greaterThan('xlarge')]: {
                width: null,
              },
              [media.lessThan('small')]: {
                maskImage:
                  'linear-gradient(to right, transparent, black 20px, black 90%, transparent)',
              },
            }}>
            <FormattedMessage id="header_home">
              {txt => (
                <HeaderLink
                isActive={!(location.pathname.includes('/guides/') || location.pathname.includes('/topics/')
                || location.pathname.includes('/terms/') || location.pathname.includes('/tutorial/'))}
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '5px 10px',
                  whiteSpace: 'nowrap',
                  ...fonts.small,
                  color: colors.white,
                  ':hover': {
                    color: colors.linkblue,
                  },
  
                  ':focus': {
                    outline: 0,
                    backgroundColor: colors.lighter,
                    borderRadius: 15,
                  },
                }}
                  title={txt}
                  to={'/' + curLan + '/'}
                />
              )}
            </FormattedMessage>
            
            <FormattedMessage id="header_guides">
              {txt => (
                <HeaderLink
                  isActive={location.pathname.includes('/guides/')}
                  title={txt}
                  to={'/' + curLan + '/guides/getting-started/'}
                />
              )}
            </FormattedMessage>
            <FormattedMessage id="header_tutorial">
              {txt => (
                <HeaderLink
                  isActive={location.pathname.includes('/tutorial/')}
                  title={txt}
                  to={'/' + curLan + '/tutorial/TutorialIndex/'}
                />
              )}
            </FormattedMessage>
            <FormattedMessage id="header_topics">
              {txt => (
                <HeaderLink
                  isActive={location.pathname.includes('/topics/')}
                  title={txt}
                  to={'/' + curLan + '/topics/supermap-bigdata-tech/'}
                />
              )}
            </FormattedMessage>
            <FormattedMessage id="header_terms">
              {txt => (
                <HeaderLink
                  isActive={location.pathname.includes('/terms/')}
                  title={txt}
                  to={'/' + curLan + '/terms/terms/'}
                />
              )}
            </FormattedMessage>
            <FormattedMessage id="header_api">
              {txt => (
                <a
                css={{
                  fontSize: "16px",
                  marginLeft: 16,
                  whiteSpace: 'nowrap',
                  marginTop: "18px",
                  color: "#fff",
    
                  ':hover': {
                    color: colors.linkblue,
                  },
    
                  ':focus': {
                    outline: 0,
                    backgroundColor: colors.lighter,
                    borderRadius: 15,
                  },
    
                  [media.lessThan('large')]: {
                    display: 'none',
                  },
                }}
                href="http://support.supermap.com.cn"
                target="_blank"
                rel="noopener">
                {txt}
                <ExternalLinkSvg
                  cssProps={{
                    marginLeft: 5,
                    verticalAlign: -2,
                    color: colors.subtle,
                  }}
                />
              </a>
              )}
            </FormattedMessage>
            {/* <FormattedMessage id="header_specs">
              {txt => (
                <HeaderLink
                isActive={location.pathname.includes('/specs/')}
                  title={txt}
                  to={'/' + curLan + '/specs/Standard-of-terms/'}
                />
              )}
            </FormattedMessage> */}
          </nav>
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              width: 'auto',

              [media.lessThan('medium')]: {
                width: 'auto',
              },
              [media.greaterThan('large')]: {
                width: 'calc(100% / 4)',
              },
            }}>
            <DocSearch />
            {/* <Link
            css={{
              padding: '5px 10px',
              whiteSpace: 'nowrap',
              ...fonts.small,

              ':hover': {
                color: colors.brand,
              },

              ':focus': {
                outline: 0,
                backgroundColor: colors.lighter,
                borderRadius: 15,
              },

              [media.lessThan('medium')]: {
                display: 'none',
              },
            }}
            to="/versions">
            v{version}
          </Link> */}
          <Link
              css={{
                display: 'flex',
                alignItems: 'center',
                padding: '5px 10px',
                whiteSpace: 'nowrap',
                ...fonts.small,
                color: colors.white,
                ':hover': {
                  color: colors.linkblue,
                },

                ':focus': {
                  outline: 0,
                  backgroundColor: colors.lighter,
                  borderRadius: 15,
                },
              }}
              to={toLanObj.link}>
              <span
                css={{
                  marginLeft: '0.5rem',

                  // [media.lessThan('medium')]: {
                  //   display: 'none',
                  // },
                }}>
                {toLanObj.txt}
              </span>
            </Link>
            {/* <Link
              css={{
                display: 'flex',
                alignItems: 'center',
                padding: '5px 10px',
                whiteSpace: 'nowrap',
                ...fonts.small,

                ':hover': {
                  color: colors.brand,
                },

                ':focus': {
                  outline: 0,
                  backgroundColor: colors.lighter,
                  borderRadius: 15,
                },
              }}
              to={langsMenu[1].link}>
              <span
                css={{
                  marginLeft: '0.5rem',

                  // [media.lessThan('medium')]: {
                  //   display: 'none',
                  // },
                }}>
                {langsMenu[1].langKey}
              </span>
            </Link> */}
            {/* <Link
            css={{
              display: 'flex',
              alignItems: 'center',
              padding: '5px 10px',
              whiteSpace: 'nowrap',
              ...fonts.small,

              ':hover': {
                color: colors.brand,
              },

              ':focus': {
                outline: 0,
                backgroundColor: colors.lighter,
                borderRadius: 15,
              },
            }}
            to="/languages">
            <LanguagesIcon />{' '}
            <span
              css={{
                marginLeft: '0.5rem',

                [media.lessThan('medium')]: {
                  display: 'none',
                },
              }}>
              Languages
            </span>
            </Link>*/}
            <a
            css={{
              padding: '5px 10px',
              marginLeft: 10,
              whiteSpace: 'nowrap',
              ...fonts.small,
              color: colors.white,

              ':hover': {
                color: colors.linkblue,
              },

              ':focus': {
                outline: 0,
                backgroundColor: colors.lighter,
                borderRadius: 15,
              },

              [media.lessThan('large')]: {
                display: 'none',
              },
            }}
            href="https://github.com/SuperMap/iDesktop-Java-docs"
            target="_blank"
            rel="noopener">
            GitHub
            <ExternalLinkSvg
              cssProps={{
                marginLeft: 5,
                verticalAlign: -2,
                color: colors.subtle,
              }}
            />
          </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

// const LanguagesIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24">
//     <path d="M0 0h24v24H0z" fill="none" />
//     <path
//       css={{fill: 'currentColor'}}
//       d="
//         M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5
//         7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09
//         5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62
//         7l1.62-4.33L19.12 17h-3.24z
//       "
//     />
//   </svg>
// );

export default Header;
