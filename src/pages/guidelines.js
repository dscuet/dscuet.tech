import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>GuideLines</h2>
          <p>Phasellus non pulvinar erat. Fusce tincidunt nisl eget ipsum.</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h2 className="major">Code of Conduct</h2>
          <ul>
            <li>
              In case of any event or a workshop, the presence of every member
              of the DSC community is mandatory. If a member can not attend due
              to some valid reason, he/she is required to tell the DSC Lead
              beforehand.
            </li>
            <li>
              If any member of the DSC community has a concern, he/she is
              required to submit it to directly to the DSC Lead.
            </li>
            <li>
              The general body of the community is required to follow every
              instruction of the DSC Lead and the core body.
            </li>
            <li>
              The DSC Lead can issue two warning letters to the underperforming
              members of the marketing team. If no improvement is made, then and
              only then will the final termination letter be issued by the team
              lead.
            </li>
            <li>
              Any disrespect towards the DSC Lead and core body of the community
              will not be tolerated.
            </li>
            <li>
              Any disrespect among the general body of the DSC community will
              not be tolerated.
            </li>
            <li>
              Any kind of immoral activity among the DSC community will not be
              tolerated.
            </li>
            <li>
              Any member who does not follow the code of conduct will be removed
              from the community.
            </li>
          </ul>

          <h2 className="major">Standard Operating Procedures</h2>
          <h3>Graphics Team</h3>
          <ul>
            <li>
              The tasks will be equally distributed between the team members
              ensuring the no team member is overburdened.
            </li>
            <li>
              The task will be conveyed to the Graphics Lead and the lead has to
              allocate the task to a member of the design team. If the Design
              Lead doesn’t reply within four hours, then the DSC Lead will
              assign the task to a member.
            </li>
            <li>
              If a member knows that he/she cannot complete the task within the
              deadline due to some reason, he has to inform the team lead.
            </li>
            <li>
              The task’s deadline will be given according to the circumstances,
              however on average; the member will be given at least 24 hours to
              complete the task.
            </li>
            <li>
              If a task has to be assigned then, the details of that task will
              be posted in the group as well.
            </li>
            <li>
              The written content (if required) will be provided by the
              publications team or the one assigning the task.
            </li>
            <li>
              In case of any inquiry, the members will contact their team lead
              immediately.
            </li>
            <li>
              The team will work together efficiently to ensure the smooth
              completion of tasks.
            </li>
            <li>
              The performance of each person in the team will be evaluated based
              on their tasks.
            </li>
            <li>
              If any member’s performance goes down considerably, he will be
              given a warning letter. If that member again fails to work, then
              he will be dismissed from the team.
            </li>
          </ul>
          <h3>Public Relations and Marketing Team</h3>
          <ul>
            <li>
              The public relation Lead will deal with every kind of
              communication inside the university.
            </li>
            <li>
              The public relations Lead can make his own public relations team
              if he/she thinks it is required.
            </li>
            <li>
              The Marketing team will prime focus on social, on-ground and
              peer-to-peer marketing.
            </li>
            <li>
              The DSC Lead will coordinate with the team lead to have feedback
              about the marketing team.
            </li>
            <li>
              Public Relations and Marketing Lead will be authorized to assign
              ambassadors to different departments to promote ground marketing
              for events.
            </li>
            <li>
              Peer-to-Peer marketing will be done by assigning representatives
              for each batch or each class if possible.
            </li>
            <li>
              Public Relations and Marketing Lead has to make sure that all the
              tasks assigned within his team are completed on time.
            </li>
            <li>
              Public Relations and Marketing Lead will have full access to all
              the social media accounts of DSC. He/She will be in charge of
              communicating with Graphics and Publication Leads to post info
              related to the happening in the tech world.
            </li>
            <li>
              The Public Relation and Marketing Lead will give his feedback to
              the DSC Lead regarding the performance of his team members.
            </li>
            <li>
              The DSC Lead can issue two warning letters to the underperforming
              members of the marketing team. If no improvement is made, then and
              only then will the final termination letter be issued by the team
              lead.
            </li>
            <li>
              The team lead will deal with any disciplinary violence within the
              team, and report to DSC Lead if the issue is not resolved.
            </li>
          </ul>
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
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
