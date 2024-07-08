import React, { useState } from 'react';
import Header from '../../component/header';
import Edittemplate from '../../pages/edittemplate'; // Assuming you have a common edit template component
import './fsecond.css';

const Second = () => {
  const [data, setData] = useState({
    firstname: ' ',
    lastname: '',
    
    email: '',
    phone: '',
    profileSummary: '',
    technicalSkills: [],
    technical: ['XHTML', 'CSS', 'Javascript', 'Jquery', 'PHP', 'CVS / Subversion', 'OS X', 'Windows XP/Vista', 'Linux'],
    workExperiences: [],
    education: [],
    projects: [],
    addsection: [],
  });

  return (
    <div>
      
      <Edittemplate data={data} setData={setData} />

       <div className='container1'>
       <>
 
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n       \n.msg { padding: 10px; background: #222; position: relative; }\n.msg h1 { color: #fff;  }\n.msg a { margin-left: 20px; background: #408814; color: white; padding: 4px 8px; text-decoration: none; }\n.msg a:hover { background: #266400; }\n\n/* //-- yui-grids style overrides -- */\nbody { font-family: Georgia; color: #444; }\n#inner { padding: 10px 80px; margin: 80px auto; background: #f5f5f5; border: solid #666; border-width: 8px 0 2px 0; }\n.yui-gf { margin-bottom: 2em; padding-bottom: 2em; border-bottom: 1px solid #ccc; }\n\n/* //-- header, body, footer -- */\n#hd { margin: 2.5em 0 3em 0; padding-bottom: 1.5em; border-bottom: 1px solid #ccc }\n#hd h2 { text-transform: uppercase; letter-spacing: 2px; }\n#bd, #ft { margin-bottom: 2em; }\n\n/* //-- footer -- */\n#ft { padding: 1em 0 5em 0; font-size: 92%; border-top: 1px solid #ccc; text-align: center; }\n#ft p { margin-bottom: 0; text-align: center;   }\n\n/* //-- core typography and style -- */\n#hd h1 { font-size: 48px; text-transform: uppercase; letter-spacing: 3px; }\nh2 { font-size: 152% }\nh3, h4 { font-size: 122%; }\nh1, h2, h3, h4 { color: #333; }\np { font-size: 100%; line-height: 18px; padding-right: 3em; }\na { color: #990003 }\na:hover { text-decoration: none; }\nstrong { font-weight: bold; }\nli { line-height: 24px; border-bottom: 1px solid #ccc; }\np.enlarge { font-size: 144%; padding-right: 6.5em; line-height: 24px; }\np.enlarge span { color: #000 }\n.contact-info { margin-top: 7px; }\n.first h2 { font-style: italic; }\n.last { border-bottom: 0 }\n\n\n/* //-- section styles -- */\n\na#pdf { display: block; float: left; background: #666; color: white; padding: 6px 50px 6px 12px; margin-bottom: 6px; text-decoration: none;  }\na#pdf:hover { background: #222; }\n\n.job { position: relative; margin-bottom: 1em; padding-bottom: 1em; border-bottom: 1px solid #ccc; }\n.job h4 { position: absolute; top: 0.35em; right: 0 }\n.job p { margin: 0.75em 0 3em 0; }\n\n.last { border: none; }\n.skills-list {  }\n.skills-list ul { margin: 0; }\n.skills-list li { margin: 3px 0; padding: 3px 0; }\n.skills-list li span { font-size: 152%; display: block; margin-bottom: -2px; padding: 0 }\n.talent { width: 32%; float: left }\n.talent h2 { margin-bottom: 6px; }\n\n#srt-ttab { margin-bottom: 100px; text-align: center;  }\n#srt-ttab img.last { margin-top: 20px }\n\n/* --// override to force 1/8th width grids -- */\n.yui-gf .yui-u{width:80.2%;}\n.yui-gf div.first{width:12.3%;}\n\n\n\n\t   "
    }}
  />
  <div id="doc2" className="yui-t7">
    <div id="inner">
      <div id="hd">
        <div className="yui-gc">
          <div className="yui-u first">
            <h1>{data.firstname || 'Jonathan'}  {data.lastname || 'john Doe'}</h1>
            {/* <h2>Web Designer, Director</h2> */}
          </div>
          <div className="yui-u">
            <div className="contact-info">
              <h3>
                <a id="pdf" href="#">
                  Download PDF
                </a>
              </h3>
              <h3>
                <a href="mailto:name@yourdomain.com">{data.email || 'name@yourdomain.com'}</a>
              </h3>
              <h3>{data.phone || '(313) - 867-5309'}</h3>
            </div>
            {/*// .contact-info */}
          </div>
        </div>
        {/*// .yui-gc */}
      </div>
      {/*// hd */}
      <div id="bd">
        <div id="yui-main">
          <div className="yui-b">
            <div className="yui-gf">
              <div className="yui-u first">
                <h2>Profile</h2>
              </div>
              <div className="yui-u">
                <p className="enlarge">
                {data.profileSummary || 
                  `Progressively evolve cross-platform ideas before impactful
                  infomediaries. Energistically visualize tactical initiatives
                  before cross-media catalysts for change.`}
                </p>
              </div>
            </div>


            <div className="yui-gf">
              <div className="yui-u first">
                <h2>Projects</h2>
              </div>

              {data.projects.length > 0 ?(
                 data.projects.map((projects,index)=>(
                    <div key={index} className='subheading'>

                        <h3>
                      <a href={projects.projectlink || '#'}>{projects.projectname || 'Project name'}</a> | {projects.projecttechnology || 'Technologies Used'}
                    </h3>
                         <ul>
                          <li>{projects.projectdes}</li>
                         </ul>
                    </div>
                 ))
             ):(
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







              </div>



            {/*// .yui-gf */}
            <div className="yui-gf">
              <div className="yui-u first">
                <h2>Skills</h2>
              </div>

                { data.technicalSkills.length > 0 ? (
                  data.technicalSkills.map((skills,index)=>(
                      <div key={index}>

<div className="yui-u">
                <div className="talent">
                  <h2>{skills.skilltitle || 'Web Design'}</h2>
                  <p>
                    {skills.skill || `Assertively exploit wireless initiatives rather than
                    synergistic core competencies.{" "}`}
                  </p>
                </div>
              
               
              </div>

                      </div>
                  ))
                ):(
                  <div>


                  </div>
                )
                
                }

              
             
            
            {/*// .yui-gf */}

            </div>
            {/*// .yui-gf*/}
            <div className="yui-gf">
              <div className="yui-u first">
                <h2>Experience</h2>
              </div>
              {/*// .yui-u */}
               
               {
                 data.workExperiences.length >  0 ? (
                  
                     data.workExperiences.map((experience,index)=>(
                        <div key={index}>

                       <div className="yui-u">
                       <div className="job">
                        <h2>{experience.company || 'Facebook'} {experience.city}, {experience.state}</h2>
                        <h3>{experience.title || 'Senior Interface Designer'}</h3>
                        <h4>{experience.wstartdate ||   '2005'} - {experience.wenddate || '2007'}</h4>
                        <p>  {experience.des1 ||
                      `Intrinsicly enable optimal core competencies through
                    corporate relationships. Phosfluorescently implement
                    worldwide vortals and client-focused imperatives.
                    Conveniently initiate virtual paradigms and top-line
                    convergence.{" "}`}
                  </p>
                </div>

                       </div>

                        </div>
                     ))

                 ):(
                  <div>

<div className="yui-u">
                <div className="job">
                  <h2>Facebook</h2>
                  <h3>Senior Interface Designer</h3>
                  <h4>2005-2007</h4>
                  <p>
                    Intrinsicly enable optimal core competencies through
                    corporate relationships. Phosfluorescently implement
                    worldwide vortals and client-focused imperatives.
                    Conveniently initiate virtual paradigms and top-line
                    convergence.{" "}
                  </p>
                </div>
                <div className="job">
                  <h2>Apple Inc.</h2>
                  <h3>Senior Interface Designer</h3>
                  <h4>2005-2007</h4>
                  <p>
                    Progressively reconceptualize multifunctional "outside the
                    box" thinking through inexpensive methods of empowerment.
                    Compellingly morph extensive niche markets with
                    mission-critical ideas. Phosfluorescently deliver
                    bricks-and-clicks strategic theme areas rather than scalable
                    benefits.{" "}
                  </p>
                </div>
                <div className="job">
                  <h2>Microsoft</h2>
                  <h3>Principal and Creative Lead</h3>
                  <h4>2004-2005</h4>
                  <p>
                    Intrinsicly transform flexible manufactured products without
                    excellent intellectual capital. Energistically evisculate
                    orthogonal architectures through covalent action items.
                    Assertively incentivize sticky platforms without synergistic
                    materials.{" "}
                  </p>
                </div>
                <div className="job last">
                  <h2>International Business Machines (IBM)</h2>
                  <h3>Lead Web Designer</h3>
                  <h4>2001-2004</h4>
                  <p>
                    Globally re-engineer cross-media schemas through viral
                    methods of empowerment. Proactively grow long-term
                    high-impact human capital and highly efficient innovation.
                    Intrinsicly iterate excellent e-tailers with timely
                    e-markets.
                  </p>
                </div>
              </div>


                   </div>
                 )

               }






           
              {/*// .yui-u */}
            </div>
            {/*// .yui-gf */}
            <div className="yui-gf last">
              <div className="yui-u first">
                <h2>Education</h2>
              </div>
                 
                 {
                     data.education.length > 0 ? (
                           
                      data.education.map((edu,index)=>(
                        <div key={index}>
                         
                         <div className="yui-u">
                <h2>{edu.university || 'Indiana University'} -  {edu.state || 'Indiana'}  {edu.eduStart || '2007'} - {edu.eduEnd || '2010'}</h2>
                <h3>
                 {edu.degree || 'Dual Major, Economics and English'} — <strong>{edu.cgp || '4.0 GPA'}</strong>{" "}
                </h3>
              </div>

                        </div>
                      ))

                     ):(
                        <div>
                          <div className="yui-u">
                <h2>Indiana University - Bloomington, Indiana   2007-2010</h2>
                <h3>
                  Dual Major, Economics and English — <strong>4.0 GPA</strong>{" "}
                </h3>
              </div>

                        </div>
                     )   
                 }



              
            </div>
            {/*// .yui-gf */}
          </div>
          {/*// .yui-b */}
        </div>
        {/*// yui-main */}
      </div>
      {/*// bd */}

      {
                data.addsection.length > 0 ? (
                  data.addsection.map((addsection, index)=>(
                    <div key={index}>
                       
                       
                       <div className="yui-gf">
              <div className="yui-u first">
              <h2>{addsection.sectionname}</h2>
              </div>

                         
                        

                         <p>{addsection.sectiondes}</p>
                          
                         </div> 
                       





                    </div>
                  ))
                     
                ):(
                  <p></p>
                )
              }





      <div id="ft">
        <p>
          {data.firstname || 'Jonathan'} {data.lastname || 'John Doe    '}
          <a href="mailto:name@yourdomain.com">{data.email || 'name@yourdomain.com'}</a> — {data.phone || `(313) -
          867-5309`}
        </p>
      </div>
      {/*// footer */}
    </div>
    {/* // inner */}
  </div>
  {/*// doc */}
</>

    </div>
    </div>
  );
}

export default Second;
