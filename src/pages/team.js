import React from 'react';

import Layout from '../components/Layout';
import '../assets/css/team.css';
import pic10 from '../assets/images/pic10.jpg';
import pic11 from '../assets/images/pic11.png';
import pic12 from '../assets/images/pic12.png';
import pic13 from '../assets/images/pic13.png';
import pic14 from '../assets/images/pic14.png';
import pic15 from '../assets/images/pic15.jpeg';
import pic16 from '../assets/images/pic16.png';

const IndexPage = () => (
  <Layout fullMenu type="team">
    <section id="wrapper">
      <header>
        <div className="inner" style={{ height: '36vh' }}></div>
      </header>

      <div className="wrapper">
        <div
          className="inner"
          style={{
            paddingTop: '10px',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
        >
          {/* DSC Lead */}
          <div align="center" className="DSC">
            <img src={pic10} alt="DSC Lead" />
            <figcaption
              style={{
                paddingTop: '20px',
                textAlign: 'center',
                fontSize: '20px',
                fontFamily: 'Raleway, Helvetica, sans-serif',
              }}
            >
              Muhammad Saad
            </figcaption>
            <figcaption
              style={{
                paddingTop: '0px',
                paddingBottom: '5px',
                textAlign: 'center',
                color: '#db3236	',
                fontFamily: 'Raleway, Helvetica, sans-serif',
                fontWeight: 600,
              }}
            >
              DSC Lead
            </figcaption>
            <div className="socials">
              <a href="https://github.com/msaaddev" className="image">
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>

              <a href="https://twitter.com/msaaddev" className="image">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://msaad.dev" className="image">
                <i class="fa fa-globe" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <h2
            style={{
              fontSize: '35px',
              textAlign: 'center',
              paddingTop: '20px',
            }}
          >
            DSC Core Team
          </h2>
          <div className="DSC_core" align="center">
            {/* Management */}
            <div className="management">
              <img src={pic14} alt="Creative and Management Lead" />
              <figcaption
                style={{
                  paddingTop: '20px',
                  fontSize: '20px',
                  fontFamily: 'Raleway, Helvetica, sans-serif',
                }}
              >
                Ahmad Saeed
              </figcaption>
              <figcaption
                style={{
                  paddingTop: '0px',
                  paddingBottom: '5px',
                  color: '#4182EF',
                  fontFamily: 'Raleway, Helvetica, sans-serif',
                  fontWeight: 600,
                }}
              >
                Creative and Mangement Lead
              </figcaption>
              <div className="socials">
                <a href="https://github.com/ehmadsaeed" className="image">
                  <i class="fa fa-github" aria-hidden="true"></i>
                </a>

                <a href="https://twitter.com/justEhmadSaeed" className="image">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="http://ehmadsaeed.github.io" className="image">
                  <i class="fa fa-globe" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            {/* Graphics */}
            <div className="graphics">
                <img src={pic12} alt="Graphics Lead" />
              <figcaption
                style={{
                  paddingTop: '20px',
                  fontSize: '20px',
                  fontFamily: 'Raleway, Helvetica, sans-serif',
                }}
              >
                Javeria Urooj
              </figcaption>
              <figcaption
                style={{
                  paddingTop: '0px',
                  paddingBottom: '5px',
                  color: '#f4c20d',
                  fontFamily: 'Raleway, Helvetica, sans-serif',
                  fontWeight: 600,
                }}
              >
                Graphics Lead
              </figcaption>
              <div className="socials">
                <a href="https://github.com/javeriaurooj" className="image">
                  <i class="fa fa-github" aria-hidden="true"></i>
                </a>
                <a href="https://facebook.com/jiya.arooj.37" className="image">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="https://instagram.com/javeriaurooj" className="image">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            {/* Publications */}
            <div className="publications">
                <img src={pic13} alt="Publications Lead" />
              <figcaption
                style={{
                  paddingTop: '20px',
                  fontSize: '20px',
                  fontFamily: 'Raleway, Helvetica, sans-serif',
                }}
              >
                Roshan Siddiqui
              </figcaption>
              <figcaption
                style={{
                  paddingTop: '0px',
                  paddingBottom: '5px',
                  color: '#3cba54	',
                  fontFamily: 'Raleway, Helvetica, sans-serif',
                  fontWeight: 600,
                }}
              >
                Publications Lead
              </figcaption>
              <div className="socials">
                <a href="https://github.com/rosh2004" className="image">
                  <i class="fa fa-github" aria-hidden="true"></i>
                </a>

                <a href="https://www.facebook.com/rosh2004" className="image">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="https://www.instagram.com/rosh_siddiqui/" className="image">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="DSC_core" align="center">
            {/* Developer Lead 1 */}
            <div className="developer1">
                <img src={pic11} alt="Developer Lead" />

              <figcaption
                style={{
                  paddingTop: '20px',

                  fontSize: '20px',
                  fontFamily: 'Raleway, Helvetica, sans-serif',
                }}
              >
                Komal Shehzadi
              </figcaption>
              <figcaption
                style={{
                  paddingTop: '0px',
                  paddingBottom: '5px',
                  color: '#f4c20d',
                  fontFamily: 'Raleway, Helvetica, sans-serif',
                  fontWeight: 600,
                }}
              >
                Developer Lead
              </figcaption>
              <div className="socials">
                <a href="https://github.com/Komal303" className="image">
                  <i class="fa fa-github" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.facebook.com/aflaatoon.lrkii"
                  className="image"
                >
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.instagram.com/busiest_munchkin/"
                  className="image"
                >
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            {/* Developer Lead 2 */}
            <div className="developer2">
              <img src={pic16} alt="Developer Lead" />
              <figcaption
                style={{
                  paddingTop: '20px',
                  fontSize: '20px',
                  fontFamily: 'Raleway, Helvetica, sans-serif',
                }}
              >
                Ahmad Bilal
              </figcaption>
              <figcaption
                style={{
                  paddingTop: '0px',
                  paddingBottom: '5px',
                  color: '#3cba54',
                  fontFamily: 'Raleway, Helvetica, sans-serif',
                  fontWeight: 600,
                }}
              >
                Developer Lead
              </figcaption>
              <div className="socials">
                <a href="https://github.com/ahmadbilaldev" className="image">
                  <i class="fa fa-github" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/ahmadbilaldev" className="image">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="https://ahmadbilal.dev" className="image">
                  <i class="fa fa-globe" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            {/* Public Relations and Marketing Lead */}
            <div className="PR_Marketing">
              <img src={pic15} alt="Public Relations and Marketing Lead" />
              <figcaption
                style={{
                  paddingTop: '20px',
                  fontSize: '20px',
                  fontFamily: 'Raleway, Helvetica, sans-serif',
                }}
              >
                M. Ruqaish
              </figcaption>
              <figcaption
                style={{
                  paddingTop: '0px',
                  paddingBottom: '5px',
                  color: '#4885ed',
                  fontFamily: 'Raleway, Helvetica, sans-serif',
                  fontWeight: 600,
                }}
              >
                Public Relations and Marketing Lead
              </figcaption>
              <div className="socials">
                <a href="https://github.com/muhammadruqaish" className="image">
                  <i class="fa fa-github" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/muhammadruqaish" className="image">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.instagram.com/muhammadruqaish/"
                  className="image"
                >
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
