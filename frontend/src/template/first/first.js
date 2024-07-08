// src/components/template/first/first.js
import React, { useState, useRef } from 'react';
import Edittemplate from '../../pages/edittemplate';
import './fstyle.css';


const First = () => {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    edusection: 'Education',
    education: [],
    profilesection: 'Profile Summary',
    profileSummary: '',
    workExperiences: [],
    projects: [],
    technicalSkills: [],
    addsection: [],
  });

  

  return (
    <div>
      <Edittemplate data={data} setData={setData} />
     
      <div className='t'>
        <div className="container1" >
          <header>
            <h1>{data.firstname || 'First Name'} {data.lastname || 'Last Name'}</h1>
            <p>
              {data.phone || 'Phone'} | 
              <a href={`mailto:${data.email}`}>{data.email || 'Email'}</a> |
              <a href="https://linkedin.com/in/nitesh-baghel-287">linkedin.com/in/nitesh-baghel-287</a> | 
              <a href="https://github.com/Niteshwebdev">github.com/Niteshwebdev</a>
            </p>
          </header>
          <section>
            <h2>{data.edusection || 'Education'}</h2>
            {data.education.length > 0 ? (
              data.education.map((edu, index) => (
                <div key={index}>
                  <div className="subheading">
                    <h3>{edu.university || 'University'}, {edu.state || 'State'}</h3>
                    <p>{edu.degree || 'Degree'}</p>
                    <h3>CGPA : {edu.cgp}</h3>
                    <p>{edu.eduStart || 'Start Date'} -- {edu.eduEnd || 'End Date'}</p>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <div className="subheading">
                  <h3>{data.university || 'University'}, {data.state || 'State'}</h3>
                  <p>{data.degree || 'Degree'}</p>
                  <h3>CGPA : {data.cgp}</h3>
                  <p>{data.eduStart || 'Start Date'} -- {data.eduEnd || 'End Date'}</p>
                </div>
              </div>
            )}
          </section>
          <section>
            <h2>{data.profilesection || 'Profile Summary'}</h2>
            <ul>
              <p>{data.profileSummary || `I am recently graduated with a degree in BCA, equipped with a solid understanding of HTML, CSS, and JavaScript, as well as exposure to modern frameworks like React.js, Node.js, and Express.js through coursework and projects.<br/>
                Demonstrated ability to learn quickly and adapt to new technologies, ready to apply analytical and problem-solving skills to front-end development challenges with enthusiasm and dedication
                Excited about translating user interface designs into responsive and visually appealing web experiences, utilizing creativity and attention to detail to deliver intuitive interfaces that enhance user engagement.
                Committed to continuous learning and professional development, eager to stay updated on industry trends and best practices to continually improve as a front-end web developer and contribute positively to the team's success.`}
              </p>
            </ul>
          </section>
          <section>
            <h2>Work Experience</h2>
            {data.workExperiences.length > 0 ? (
              data.workExperiences.map((experience, index) => (
                <div key={index} className='subheading'>
                  <h3>{experience.title || 'Web Development'}, {experience.company || 'Infolabz'}, {experience.state || 'Gujarat'}, {experience.city || 'Ahmedabad'}</h3>
                  <p>{experience.wstartdate || 'July 2023 '} -- {experience.wenddate || 'May 2024'}</p>
                  <ul>
                    <p>{experience.des1 || `Developed full-stack web applications utilizing MongoDB, Express.js, React.js, and Node.js (MERN stack).
                    Built and deployed dynamic, responsive UIs with React.js and managed state using hooks.
                    Implemented component-based architecture in React.js, promoting reusability and maintainability.
                    Utilized React Router for seamless navigation and enhanced user experience in single-page applications.
                    Gained proficiency in MongoDB, including CRUD operations, indexing, and schema design.`}</p>
                  </ul>
                </div>
              ))
            ) : (
              <div className='subheading'>
                <h3>Web Development, Infolabz, Gujarat, Ahmedabad</h3>
                <p>July 2023 -- May 2024</p>
                <ul>
                  <p>Developed full-stack web applications utilizing MongoDB, Express.js, React.js, and Node.js (MERN stack).
                  Built and deployed dynamic, responsive UIs with React.js and managed state using hooks.
                  Implemented component-based architecture in React.js, promoting reusability and maintainability.
                  Utilized React Router for seamless navigation and enhanced user experience in single-page applications.
                  Gained proficiency in MongoDB, including CRUD operations, indexing, and schema design.</p>
                </ul>
              </div>
            )}
          </section>
          <section>
            <h2>Projects</h2>
            {data.projects.length > 0 ? (
              data.projects.map((project, index) => (
                <div key={index} className='subheading'>
                  <h3>
                    <a href={project.projectlink || '#'}>{project.projectname || 'Project name'}</a> | {project.projecttechnology || 'Technologies Used'}
                  </h3>
                  <ul>
                    <li>{project.projectdes}</li>
                  </ul>
                </div>
              ))
            ) : (
              <>
                <div className="subheading">
                  <h3><a href="https://github.com/Niteshwebdev/News_api">Api Based News Website</a> | React.js, Rest API</h3>
                  <ul>
                    <li>Developed a dynamic news website leveraging external news APIs.</li>
                    <li>Designed and implemented a responsive frontend using React.js.</li>
                    <li>Implemented caching mechanisms to improve loading times and reduce API call overhead.</li>
                    <li>Implemented search functionality for users to find news articles by keywords.</li>
                  </ul>
                </div>
                <div className="subheading">
                  <h3><a href="https://github.com/Niteshwebdev/crud">Crud Website</a> | React.js, Node.js, Express.js, MongoDB</h3>
                  <ul>
                    <li>Developed a full-stack CRUD application using the MERN (MongoDB, Express.js, React.js, Node.js) stack, demonstrating proficiency in both frontend and backend development.</li>
                    <li>Designed and implemented RESTful API endpoints for Create, Read, Update, and Delete operations, ensuring efficient communication between the frontend and backend.</li>
                    <li>Created a user-friendly interface with React.js.</li>
                  </ul>
                </div>
                <div className="subheading">
                  <h3><a href="https://github.com/Niteshwebdev/salon_appoinment_system">Salon Appointment System</a> | React.js, Node.js, Express.js, MongoDB</h3>
                  <ul>
                    <li>Developed salon appointment application with three modules: Admin, User, Barber.</li>
                    <li>Developed a full-stack Salon Appointment application using the MERN (MongoDB, Express.js, React.js, Node.js) stack, demonstrating proficiency in both frontend and backend development.</li>
                    <li>User can easily book appointment and can also make online payment.</li>
                    <li>Created a user-friendly interface with React.js.</li>
                  </ul>
                </div>
              </>
            )}
          </section>
          <section>
            <h2>Technical Skills</h2>
            {data.technicalSkills.length > 0 ? (
              data.technicalSkills.map((skill, index) => (
                <div key={index}>
                  <ul>
                    <li><strong>{skill.skilltitle + ': ' || 'Languages: '}</strong>{skill.skill || 'Javascript, Python, Java, SQL'}</li>
                  </ul>
                </div>
              ))
            ) : (
              <div>
                <ul>
                  <li><strong>Languages:</strong> Javascript, Python, Java, SQL</li>
                  <li><strong>Frameworks and Libraries:</strong> React.js, Node.js, Express.js</li>
                  <li><strong>Developer Tools:</strong> Git, VS Code, Android Studio, Postman</li>
                </ul>
              </div>
            )}
          </section>
          {data.addsection.length > 0 && data.addsection.map((section, index) => (
            <section key={index}>
              <h2>{section.sectionname}</h2>
              <p>{section.sectiondes}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default First;
