import React from 'react';
import { Link } from 'gatsby';
import '../assets/css/main.css'

import Layout from '../components/Layout';
import infosession from '../assets/images/infosession.jpg'

const IndexPage = () => (
  <Layout fullMenu type="blog">
    <section id="wrapper">
      <header>
        <div className="inner height">
          <h2 style={{ border: 'none' }}>⚡ Developer Student Club UET Launch</h2>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner" style={{ letterSpacing: '0.5px' }}>
          <p>
            This year, for the first time in Pakistan, Google introduced its
            student developer community — Developer Student Clubs. <a href="developers.google.com/programs/dsc/"> Developer
            Student Club (DSC)</a> is a Google Developers program for university
            students. It is a Google community designed to help students build
            their mobile and web development skills and knowledge. Up until last
            year, DSC was only limited to a handful of countries in Asia and
            Africa.
          </p>

          <p>
            Google opened DSC applications for Pakistan in April 2019. Thousands
            of students applied, but only some of them got an interview email
            from Google. <a href="https://msaad.dev"> Muhammad Saad</a>, who studies Computer Sciences at the
            University of Engineering and Technology (UET), was one of the
            shortlisted candidates. On the morning of July 26, 2019, he received
            the good news that he would be leading the Developer Student Club at
            his university.
          </p>
          <p>
            Saad began his activities as the DSC Lead as soon as the university
            opened for the fall semester. The first thing that he did was that
            he organized an info session on the Developer Student Club on
            September 11, 2019.
          </p>
          <div align="center">
            <img src={infosession} alt="infosession graphic" style={{ width: '60%' }} /></div>
          <br />
          <h2 className="major">💥 Launch of Developer Student Club in UET</h2>
          <p>
            The info session took place at 11:00 AM in the Software Engineering
            Center at UET, Lahore. Around 70 to 80 students attended it. Most of
            these students were from the Department of Computer Science and
            Engineering and Electrical Engineering Department. Saad led the
            session and explained everything about DSC to them.
          </p>
          <h3 className="major">🔊 Talk By Saad</h3>
          <p>
            Like a good speaker, Saad first introduced himself to the audience.
            He told them that he is currently a sophomore studying Computer
            Sciences at UET. Some of the key points of his introduction were:
          </p>
          <ul>
            <li>
              He works in ReactJS. In fact, he told the audience that he created
              his slides for the info session using ReactJS.
            </li>
            <li>
              He is an open-source enthusiast. That is why he is quite active on
              his GitHub.
            </li>
            <li>
              He is an active writer. You can read some of his articles on his
              <a href="https://msaad.dev/blog"> blog</a>.
            </li>
            <li>He is going to lead this Google community.</li>
          </ul>

          <h3 className="major">🤔 What is DSC?</h3>
          <p>
            No one really knew about DSC as this is the first time Google has
            introduced it in Pakistan. Considering this, Saad started his talk
            by explaining to the audience what DSC is, what we will do in it,
            what we will focus on in this community.
          </p>
          <p>
            Saad started by explaining to the audience that DSC is one of the
            developer communities of Google. It is under an organization —
            Google Developers. The DSC Leads are directly connected to Googlers
            who are working in Google Developer Relations. He also made this
            clear that DSC is a community where any student who has an interest
            in development can come and learn.
          </p>
          <p>
            GitHub is the largest open-source platform in the world. A
            considerable amount of companies use it for their work. So, because
            of that, Saad announced that in DSC every member would be working on
            GitHub. Also, every member will be invited to an organization —
            Developer Student Club - UET, where they will work on their
            projects. Through this step, Saad is aiming to teach students how to
            collaborate on a project using GitHub.
          </p>
          <h3 className="major">🎓 DSC's Mission</h3>
          <p>
            The next thing Saad did was that he explained to the audience what
            the mission of the DSC is. He told them that this mission is given
            to him by the Google Developers itself. He quoted:
            <blockquote>
              "To provide native app and web development skills to students to
              help them work towards employability."
            </blockquote>
          </p>
          <h3 className="major">🧐 Why Google started this initiative?</h3>
          <p>
            After this, Saad took all the students to the past. He said, "You
            guys should know why Google started this initiative in the first
            place so you have a clear image of this program." He shared with the
            audience some history that Google first launched this initiative in
            2017 in India to solve the problems university graduates were facing
            in terms of getting a job.
          </p>
          <p>
            Saad also said that as it is a Google program, so google will be
            providing DSC all the learning resources. By using these resources,
            students will learn new technologies. And this learning will help
            them in the long run when they will be searching for a job or
            starting their own software firm.
          </p>
          <h3 className="major">
            🚀 Why students should apply for the DSC membership?
          </h3>
          <p>
            Often it happens that we weigh the pros and cons of something before
            getting into it. To make it easy for the students, Saad put some
            pros in front of them. Like by becoming a part of the DSC, students
            will be able to{' '}
          </p>
          <ul>
            <li>
              Grow their knowledge of developer technologies through peer to
              peer workshops and events.
            </li>
            <li>
              Gain relevant industry experience by solving problems for local
              organizations with a technology-based solution.
            </li>
            <li>
              Showcase their prototypes and solutions to the local community and
              industry leader.
            </li>
            <li>Participate in the Global Solution Challenge.</li>
          </ul>
          <p>
            Because students were still new to this Google community, Saad
            further explained to them about the Global Solution Challenge that
            is going to take place in early January, next year. He explained to
            them that in this challenge we will be doing a project that will
            help our local or underprivileged community in some way.
          </p>
          <h3 className="major">🌐 DSC Core Team</h3>
          <p>
            Later in the session, Saad also introduced his{' '}
            <Link to="/team"> core team</Link> that will help him lead. This
            team will assist him in areas like public relations, graphics,
            management, etc. He announced the name and designation of his core
            team members as follows:
          </p>
          <ul>
            <li>Ahmad Saeed as the Creative and Management Lead.</li>
            <li>Javeria Urooj as the Graphics Lead.</li>
            <li>Roshan Siddiqui as the Publications Lead.</li>
            <li>Komal Shehzadi as the Developer Lead.</li>
            <li>Ahmad Bilal as the Developer Lead.</li>
            <li>
              Muhammad Ruqaish as the Public Relations and Marketing Lead.
            </li>
          </ul>
          <h3 className="major">📦 Recruitment Drive</h3>
          <p>
            Concluding this info session, Saad announced that the recruitment
            drive for the DSC has opened. Students who are interested should
            apply. No prior experience is required. He also defined criteria
            that the form is only weighing 30% in the selection. The rest of the
            70% will be evaluated during the interview.
          </p>
          <h3 className="major">❓ Q&A Session</h3>
          <p>
            With the recruitment drive, Saad concluded the info session and
            asked the audience if they have any questions. A final year student
            had a query related to how DSC will help the local community. Saad
            presented her with a scenario that let's say we are doing a project
            related to some issue raising website for the local community. Some
            of the members of the DSC, who have expertise in making the
            front-end can make the UI of the site. Some members can work on the
            backend of the site. These two groups will work together on the
            project on the DSC UET GitHub organization.
          </p>
          <p>
            The session was a success overall. More than 200 students applied in
            the DSC UET recruitment drive. Now, let's see where this exciting
            journey will take them. 🙌
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
