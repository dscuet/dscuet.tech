import React from 'react';
import Layout from '../components/Layout';

import '../assets/css/main.css';

const IndexPage = () => (
  <Layout fullMenu type="main">
    <section id="wrapper">
      <header>
        <div className="inner height">
          <h2>Page not found</h2>
          <p>Not a valid URL</p>
        </div>
      </header>
    </section>
  </Layout>
);

export default IndexPage;
