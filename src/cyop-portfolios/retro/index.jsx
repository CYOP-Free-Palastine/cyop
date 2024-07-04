import React, { useEffect, useState } from 'react';
import navLogo from './assets/image/navbar-logo.png';
import homeImg from './assets/image/home-img.png';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore'; // Import doc and getDoc from firebase/firestore
import { db } from '@api/firebase';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

async function fetchPortfolioById(portfolioId) {
    const docRef = doc(db, "portfolios", portfolioId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        throw new Error("Portfolio not found");
    }
}

export default function Retro() {
    const location = useLocation();
    const pathname = location.pathname;
    const portfolioId = pathname.split('/').pop();

    const [portfolioData, setPortfolioData] = useState({
        name: "",
        position: "",
        about: "",
        education: [
            { date: "", description: "" },
            { date: "", description: "" },
            { date: "", description: "" },
        ],
        skills: [
            { skill_name: "", description: "" },
            { skill_name: "", description: "" },
            { skill_name: "", description: "" },
        ],
        contact: [
            { contact_type: "Email", description: "" },
            { contact_type: "Phone", description: "" },
            { contact_type: "Telegram", description: "" },
        ],
        projects: [
            { project_name: "", project_link: "", description: "" },
            { project_name: "", project_link: "", description: "" },
            { project_name: "", project_link: "", description: "" },
        ],
    });

    const [loading, setLoading] = useState(false);

    const handleInputChange = (e, section, index, field) => {
        const value = e.target.value;
        setPortfolioData((prevData) => {
            const updatedSection = [...prevData[section]];
            updatedSection[index][field] = value;
            return { ...prevData, [section]: updatedSection };
        });
    };

    const handleGeneralChange = (e, field) => {
        const value = e.target.value;
        setPortfolioData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleCreate = async () => {
      try {
          const userId = localStorage.getItem('userId');
          if (!userId) {
              toast.warning("Please register to create a portfolio", {
                  position: "top-center"
              });
              return;
          }

          setLoading(true);

          const docRef = await addDoc(collection(db, 'portfolios'), {
              userId: userId,
              portfolioData: portfolioData,
              createdAt: new Date(),
              portfolioName: "retro"
          });

          toast.success('Portfolio created successfully!', {
              position: "top-right"
          });
      } catch (e) {
          console.error('Error adding document: ', e);
          toast.error('Something went wrong');
      } finally {
          setLoading(false);
      }
  };

  const { data: portfolio, isLoading } = useQuery(["portfolio", portfolioId], () => fetchPortfolioById(portfolioId), { keepPreviousData: true, enabled: !!portfolioId });

  if (location.pathname.startsWith("/templates/retro/")) {
    if (isLoading) {
      return (
        <>
          <div className='fixed w-full h-full bg-black/40 backdrop-blur-sm  top-0 left-0 z-50'></div>
          <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50">
              <svg aria-hidden="true" role="status" className="inline w-16 h-16 me-3 animate-spin text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
              </svg>
          </div>
        </>
      )
    } else {
      return (
        <div className='bg-gray-100'>
          <section className="pt-10 md:pt-16">
            <div className="container max-w-screen-xl mx-auto px-4">
              <nav className="flex items-center justify-between mb-40">
                <img src={navLogo} alt="Logo" />
              </nav>
  
              <div className="text-center w-full">
                <div className="flex justify-center mb-16">
                  <div className='w-[400px] h-[400px] rounded-[50%] bg-slate-400'>
                    <img className='w-full h-full object-cover rounded-[50%] scale-75' src={homeImg} alt="Home" />
                  </div>
                </div>

                <h1 className='font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8 text-center'>{portfolio.portfolioData.name}</h1>

                <h1 className='font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8 text-center'>{portfolio.portfolioData.position}</h1>

                <p className='font-normal text-gray-600 resize-none text-md md:text-xl sm:mb-0 mb-4 text-center'>{portfolio.portfolioData.about}</p>

              </div>
            </div>
          </section>
  
          <section className="py-10 md:py-16">
            <div className="container max-w-screen-xl mx-auto px-4">
              <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Education</h1>
              <p className="font-normal text-gray-500 text-xs md:text-base mb-20">Below is a summary of the places I studied</p>
  
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolio.portfolioData.education.map((edu, index) => (
                  <div key={index} className="bg-gray-50 px-8 py-10 rounded-md">
                    <input
                      type="text"
                      className='font-medium text-gray-700 text-lg mb-4 bg-transparent outline-none'
                      defaultValue={edu.date}
                      disabled
                    />
                    <textarea
                      maxLength={160}
                      rows={5}
                      className='resize-none w-full font-normal text-gray-500 text-md bg-transparent outline-none'
                      defaultValue={edu.description}
                      disabled
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          <section className="py-10 md:py-16">
            <div className="container max-w-screen-xl mx-auto px-4">
              <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Skills</h1>
              <p className="font-normal text-gray-500 text-xs md:text-base mb-20">Below is a summary of my skills</p>
  
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolio.portfolioData.skills.map((skill, index) => (
                  <div key={index} className="bg-gray-50 px-8 py-10 rounded-md">
                    <input
                      type="text"
                      className='font-medium text-gray-700 text-lg mb-4 bg-transparent outline-none'
                      defaultValue={skill.skill_name}
                      disabled
                    />
                    <textarea
                      maxLength={160}
                      rows={5}
                      className='font-normal text-gray-500 text-md mb-4 bg-transparent outline-none resize-none w-full'
                      defaultValue={skill.description}
                      disabled
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          <section className="py-10 md:py-16">
            <div className="container max-w-screen-xl mx-auto px-4">
              <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Contact</h1>
              <p className="font-normal text-gray-500 text-xs md:text-base mb-20">Below is my contact information</p>
  
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolio.portfolioData.contact.map((contact, index) => (
                  <div key={index} className="bg-gray-50 px-8 py-10 rounded-md">
                    <input
                      type="text"
                      className='font-medium text-gray-700 text-lg mb-4 bg-transparent outline-none'
                      defaultValue={contact.contact_type}
                      disabled
                    />
                    <textarea
                      rows={5}
                      maxLength={160}
                      className='w-full resize-none font-normal text-gray-500 text-md mb-4 bg-transparent outline-none'
                      defaultValue={contact.description}
                      disabled
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          <section className="py-10 md:py-16">
            <div className="container max-w-screen-xl mx-auto px-4">
              <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Projects</h1>
  
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolio.portfolioData.projects.map((project, index) => (
                  <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <div className='bg-slate-200 rounded-t-lg p-6'>
                      <a href={project.project_link} target='_blank' className='text-center'>
                        <h2 className='text-black font-bold text-2xl'>{project.project_name}</h2>
                      </a>
                    </div>
                    <div className='p-6'>
                      <textarea
                        rows={5}
                        maxLength={160}
                        className='bg-transparent outline-none mb-3 font-normal text-gray-700 w-full resize-none'
                        defaultValue={project.description}
                        disabled
                      />
                      <a href={project.project_link} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-400 rounded-lg hover:bg-slate-500 focus:ring-4 focus:outline-none">
                        Live demo
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          <footer className='text-center py-4 bg-black'>
            <p>© 2024 CYOP. All Rights Reserved.</p>
          </footer>
        </div>
      )
    }
  }
  
  return (
    <>
      {
        loading === true && 
        <>
          <div className='fixed w-full h-full bg-black/40 backdrop-blur-sm  top-0 left-0 z-50'></div>
          <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50">
              <svg aria-hidden="true" role="status" className="inline w-16 h-16 me-3 animate-spin text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
              </svg>
          </div>
        </>
      }
      <div className='bg-gray-100'>
        <button onClick={handleCreate} className=" bg-gray-800 fixed z-50 left-[50%] translate-x-[-50%] top-[5%] border focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 ">Create Portfolio</button>
        <section className="pt-10 md:pt-16">
          <div className="container max-w-screen-xl mx-auto px-4">
            <nav className="flex items-center justify-between mb-40">
              <img src={navLogo} alt="Logo" />
            </nav>

            <div className="text-center w-full">
              <div className="flex justify-center mb-16">
                <div className='w-[400px] h-[400px] rounded-[50%] bg-slate-400'>
                  <img className='w-full h-full object-cover rounded-[50%] scale-75' src={homeImg} alt="Home" />
                </div>
              </div>

              <input
                className='font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8 bg-[transparent] text-center border-none outline-none'
                placeholder="Your Name"
                type="text"
                value={portfolioData.name}
                onChange={(e) => handleGeneralChange(e, "name")}
              />

              <input
                type="text"
                className='font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8 bg-[transparent] border-none outline-none text-center w-full'
                placeholder='Junior Frontend Dev'
                value={portfolioData.position}
                onChange={(e) => handleGeneralChange(e, "position")}
              />

              <textarea
                rows={3}
                maxLength={100}
                className='font-normal text-gray-600 resize-none text-md md:text-xl sm:mb-0 mb-4 bg-[transparent] border-none outline-none w-full text-center'
                placeholder='About yourself'
                value={portfolioData.about}
                onChange={(e) => handleGeneralChange(e, "about")}
              ></textarea>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="container max-w-screen-xl mx-auto px-4">
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Education</h1>
            <p className="font-normal text-gray-500 text-xs md:text-base mb-20">Below is a summary of the places I studied</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="bg-gray-50 px-8 py-10 rounded-md">
                  <input
                    type="text"
                    placeholder='e.g: 2015 - 2016'
                    className='font-medium text-gray-700 text-lg mb-4 bg-transparent outline-none'
                    value={edu.date}
                    onChange={(e) => handleInputChange(e, "education", index, "date")}
                  />
                  <textarea
                    maxLength={160}
                    rows={5}
                    placeholder='description'
                    className='resize-none w-full font-normal text-gray-500 text-md bg-transparent outline-none'
                    value={edu.description}
                    onChange={(e) => handleInputChange(e, "education", index, "description")}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="container max-w-screen-xl mx-auto px-4">
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Skills</h1>
            <p className="font-normal text-gray-500 text-xs md:text-base mb-20">Below is a summary of my skills</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.skills.map((skill, index) => (
                <div key={index} className="bg-gray-50 px-8 py-10 rounded-md">
                  <input
                    type="text"
                    placeholder='skill name'
                    className='font-medium text-gray-700 text-lg mb-4 bg-transparent outline-none'
                    value={skill.skill_name}
                    onChange={(e) => handleInputChange(e, "skills", index, "skill_name")}
                  />
                  <textarea
                    maxLength={160}
                    rows={5}
                    placeholder='description'
                    className='font-normal text-gray-500 text-md mb-4 bg-transparent outline-none resize-none w-full'
                    value={skill.description}
                    onChange={(e) => handleInputChange(e, "skills", index, "description")}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="container max-w-screen-xl mx-auto px-4">
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Contact</h1>
            <p className="font-normal text-gray-500 text-xs md:text-base mb-20">Below is my contact information</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.contact.map((contact, index) => (
                <div key={index} className="bg-gray-50 px-8 py-10 rounded-md">
                  <input
                    type="text"
                    defaultValue={`Example: ${contact.contact_type}`}
                    className='font-medium text-gray-700 text-lg mb-4 bg-transparent outline-none'
                    value={contact.contact_type}
                    onChange={(e) => handleInputChange(e, "contact", index, "contact_type")}
                  />
                  <textarea
                    rows={5}
                    maxLength={160}
                    className='w-full resize-none font-normal text-gray-500 text-md mb-4 bg-transparent outline-none'
                    placeholder='description'
                    value={contact.description}
                    onChange={(e) => handleInputChange(e, "contact", index, "description")}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="container max-w-screen-xl mx-auto px-4">
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.projects.map((project, index) => (
                <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                  <div className='bg-slate-200 rounded-t-lg p-6'>
                    <input
                      type="text"
                      placeholder='project name'
                      className='bg-transparent outline-none text-black'
                      value={project.project_name}
                      onChange={(e) => handleInputChange(e, "projects", index, "project_name")}
                    />
                    <input
                      type="text"
                      placeholder='link'
                      className='bg-transparent outline-none text-black'
                      value={project.project_link}
                      onChange={(e) => handleInputChange(e, "projects", index, "project_link")}
                    />
                  </div>
                  <div className='p-6'>
                    <textarea
                      rows={5}
                      maxLength={160}
                      placeholder='description'
                      className='bg-transparent outline-none mb-3 font-normal text-gray-700 w-full resize-none'
                      value={project.description}
                      onChange={(e) => handleInputChange(e, "projects", index, "description")}
                    />
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-400 rounded-lg hover:bg-slate-500 focus:ring-4 focus:outline-none">
                      Live demo
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className='text-center py-4 bg-black'>
          <p>© 2024 CYOP. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}