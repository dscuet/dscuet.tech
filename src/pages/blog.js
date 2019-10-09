import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import '../assets/css/main.css'

import pic18 from '../assets/images/pic18.jpeg';

const IndexPage = () => (
  <Layout fullMenu type="blog">
    <section id="wrapper">
      <header className="blogBg">
        <div className="inner height">
          <h2 style={{ border: 'none' }}>Blog</h2>
          <p>We are not documenting. We are blogging about our events to make them interesting for you to read.</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <section className="features">
            <article>
              <Link to="/dscuetinfosession">
                <a className="image">
                  <img src={pic18} alt="DSC UET Launch" />
                </a>
              </Link>
              <h3 className="major">⚡ Developer Student Club UET Launch</h3>
              <p>
                This year, for the first time in Pakistan, Google introduced its
                student developer community — Developer Student Clubs.
              </p>
              <Link to="/dscuetinfosession">
                <a className="special">Read more</a>
              </Link>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
