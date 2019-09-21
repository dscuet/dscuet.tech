import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import pic8 from '../assets/images/pic09.png';
import pic9 from '../assets/images/pic10.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <img src={pic8} alt="DSC Logo" width="14%" />
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major" style={{ color: '#f4c20d' }}>
              Developer Student Club
            </h2>
            <p>
              The Developer Student Clubs (DSC) program is a grassroots channel
              through which Google provides <strong>development skills</strong>{' '}
              for students, towards employability. In addition to workshops,
              Google also provides an opportunity for students to apply their
              newly gained skills to develop solutions for local organizations,
              and then provide visibility via showcases.
            </p>
            <a
              href="https://developers.google.com/programs/dsc/"
              className="special"
              style={{ color: '#f4c20d' }}
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major" style={{ color: '#f4c20d' }}>
              Our Mission
            </h2>
            <p>
              Provide native app and web development skills to students to help
              them work towards employability.
            </p>
            <a href="/#" className="special" style={{ color: '#f4c20d' }}>
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="https://msaad.dev" className="image">
            <img src={pic9} alt="DSC Lead" />
          </a>
          <div className="content">
            <h2 className="major" style={{ color: '#f4c20d' }}>
              Developer Student Club Lead
            </h2>
            <p>
              This is <a href="https://msaad.dev">Muhammad Saad</a>, a
              sophomore who is studying Computer Sciences at the University of
              Engineering and Technology. During the day, Saad lead one of the
              Google Student Communities —{' '}
              <a href="https://developers.google.com/programs/dsc/">
                {' '}
                Developer Student Clubs
              </a>{' '}
              — at his university. By night, he dabble with ReactJS, GatsbyJS, and
              NodeJS. Other than this, he is an open-source enthusiast, a tech
              lover, and a huge season fanatic.
            </p>
            <Link to="/team">
              <a className="special" style={{ color: '#f4c20d' }}>
                DSC Core  Team
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Blogs</h2>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Nisl placerat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Ante fermentum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Fusce consequat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <Link to="/blog" className="button">
                Browse All
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
