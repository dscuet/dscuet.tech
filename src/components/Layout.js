import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import '../assets/sass/main.scss';
import Footer from './Footer';
import SideBar from './Sidebar';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children, fullMenu, type } = this.props;
    const { isPreloaded } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'Developer Student Club UET Chapter Official Website',
                  content: 'Developer Student Club UET',
                },
                {
                  name: 'DSC, Google Developers, Developer Student Clubs',
                  content: 'site, web',
                },
              ]}
            >
              <html lang="en" />
            </Helmet>
            {type === 'main' && (
              <div
                className={
                  isPreloaded && type === 'blog'
                    ? ' main-body  is-preload'
                    : ' main-body'
                }
              >
                <div id="page-wrapper">
                  <SideBar fullMenu={fullMenu} />
                  {children}
                  <Footer />
                </div>
              </div>
            )}
            {type === 'blog' && (
              <div
                className={
                  isPreloaded && type === 'blog'
                    ? ' main-body2  is-preload'
                    : ' main-body2'
                }
              >
                <div id="page-wrapper">
                  <SideBar fullMenu={fullMenu} />
                  {children}
                  <Footer />
                </div>
              </div>
            )}
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
