import React from 'react'
import "./src/css/style.css"
import work1 from "./src/img/works/1.jpg"
import work2 from "./src/img/works/2.jpg"
import work3 from "./src/img/works/3.jpg"
import work4 from "./src/img/works/4.jpg"
import work5 from "./src/img/works/5.jpg"
import work6 from "./src/img/works/6.jpg"
import work7 from "./src/img/works/7.jpg"
import work8 from "./src/img/works/8.jpg"
import work9 from "./src/img/works/9.jpg"

export default function Brutalist() {
  return (
    <section>
      <header
    className="fixed inset-x-0 z-40 top-0 bg-white text-black h-[96px] py-5 lg:py-6 border-t-2 border-b-2 border-black">
    <div className="container px-4 lg:px-8 mx-auto flex justify-between items-center">
      <div className="text-4xl font-extrabold">Brutalist</div>
      <button data-toggle="#target-nav"
        className="[&.show_.btn-open]:!hidden [&.show_.btn-close]:!block w-12 h-12 flex items-center justify-center border-2 border-black rounded lg:hidden shadow-[2px_2px_0_0_#000000]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
          className="btn-open block bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
          className="btn-close hidden bi bi-x-lg" viewBox="0 0 16 16">
          <path
            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </button>

      <div id="target-nav"
        className="uppercase max-lg:fixed max-lg:w-72 max-lg:inset-y-0 max-lg:left-0 max-lg:[&.show]:translate-x-0 max-lg:bg-white max-lg:border-r-2 max-lg:border-black max-lg:z-50 max-lg:-translate-x-full transform duration-300">
        <nav className="max-lg:flex max-lg:flex-col max-lg:h-full max-lg:overflow-auto lg:space-x-4">
          <a href="#"
            className="active max-lg:py-3 max-lg:px-4 max-lg:border-b max-lg:border-black hover:text-[#00a6a2] [&.active]:text-[#00a6a2]">Home</a>
          <a href="#"
            className="max-lg:py-3 max-lg:px-4 max-lg:border-b max-lg:border-black hover:text-[#00a6a2] [&.active]:text-[#00a6a2]">About</a>
          <a href="#"
            className="max-lg:py-3 max-lg:px-4 max-lg:border-b max-lg:border-black hover:text-[#00a6a2] [&.active]:text-[#00a6a2]">Works</a>
          <a href="#"
            className="max-lg:py-3 max-lg:px-4 max-lg:border-b max-lg:border-black hover:text-[#00a6a2] [&.active]:text-[#00a6a2]">Blogs</a>
          <a href="#"
            className="max-lg:py-3 max-lg:px-4 max-lg:border-b max-lg:border-black hover:text-[#00a6a2] [&.active]:text-[#00a6a2]">Contact</a>
        </nav>
      </div>

      <button data-toggle="#target-nav"
        className="max-lg:fixed max-lg:bg-black max-lg:[&.show]:inset-0 max-lg:opacity-0 max-lg:[&.show]:opacity-70 transform duration-300 lg:hidden"></button>
    </div>
  </header>

  <main className="overflow-hidden">
    <section id="hero" className="relative bg-neutral-100 border-b-2 border-black overflow-hidden z-0">
      <div className="absolute  inset-y-0 right-auto left-0 h-full w-1/2 bg-[#fec494]" style={{zIndex: -1}}></div>
      {/* bg */}
      <div 
        className="bg absolute top-0 right-0 left-auto w-full md:w-1/2 h-full bg-[#02d1c3]"
    ></div>


      <div className="container px-4 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="hidden md:block order-2 lg:pl-12">
          <figure className="relative !opacity-100 !scale-100 transform duration-1000 delay-100">
            <svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
                <path fill="#ffffff" stroke="black" strokeWidth="1"
                      d="M36.3,-63.1C48.1,-56.1,59.4,-48.5,62.3,-37.9C65.3,-27.2,59.7,-13.6,59.1,-0.3C58.5,12.9,62.9,25.9,60.4,37.2C57.9,48.5,48.6,58.3,37.4,61.4C26.2,64.5,13.1,61,1.7,58.1C-9.7,55.2,-19.4,52.9,-33.8,51.6C-48.2,50.3,-67.2,50,-69.1,41.6C-71.1,33.2,-55.9,16.6,-55.1,0.5C-54.3,-15.7,-67.9,-31.4,-67.4,-42.1C-66.8,-52.9,-52,-58.7,-38.4,-64.7C-24.8,-70.6,-12.4,-76.8,-0.1,-76.6C12.3,-76.5,24.5,-70.1,36.3,-63.1Z"
                      transform="translate(100 100)"/>
                <defs>
                    <clipPath id="ones">
                        <path fill="#ffffff"
                              d="M36.3,-63.1C48.1,-56.1,59.4,-48.5,62.3,-37.9C65.3,-27.2,59.7,-13.6,59.1,-0.3C58.5,12.9,62.9,25.9,60.4,37.2C57.9,48.5,48.6,58.3,37.4,61.4C26.2,64.5,13.1,61,1.7,58.1C-9.7,55.2,-19.4,52.9,-33.8,51.6C-48.2,50.3,-67.2,50,-69.1,41.6C-71.1,33.2,-55.9,16.6,-55.1,0.5C-54.3,-15.7,-67.9,-31.4,-67.4,-42.1C-66.8,-52.9,-52,-58.7,-38.4,-64.7C-24.8,-70.6,-12.4,-76.8,-0.1,-76.6C12.3,-76.5,24.5,-70.1,36.3,-63.1Z"
                              transform="translate(100 100)"/>
                    </clipPath>
                </defs>
                <image transform="matrix(1 0 0 1 0 0)" clipPath="url(#ones)" xlinkHref={"https://t3.ftcdn.net/jpg/06/32/90/80/360_F_632908077_GJySZsZDWNOnDwKcCqHGe18WhKpbwLYm.jpg"} width="235"
                      height="200"/>
            </svg>
          </figure>

          </div>

          <div className="order-1 xl:pr-12 xl:py-16">
            <div
              className="text-left lg:mr-8 py-16 md:pb-0 lg:py-16 transform duration-1000 translate-y-8 delay-100"
              data-view="!opacity-100 !translate-y-0">
              <h1 className="text-4xl lg:text-5xl leading-tight font-bold text-black mb-6">I'am Roman Andreas, Grapics
                Designer</h1>
              <p className="text-gray-800 leading-relaxed font-light text-xl mx-auto mb-8">Hello there! I'm Roman Andreas, a
                passionate graphics to bringing your creative vision to life. With extensive experience and a talented
                team, we create stunning and effective design solutions.</p>

              <a className="py-3 px-4 relative inline-flex flex-row items-center justify-center gap-x-2 rounded font-bold text-lg tracking-[.00714em] border-2 border-black hover:-translate-y-0.5 transform duration-200 shadow-[4px_4px_0_0_#000000] focus:-translate-y-0.5 bg-yellow-300 text-black"
                href="#">
                About Me
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                  className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="border-b-2 border-black">
      <div className="marquee py-3 text-2xl font-bold w-full">
        <a href="works.html">Welcome to Roman Andreas portfolio, Transform your imagination into stunning visual
          reality!</a>
      </div>
    </section>

    <section className="bg-white py-16">
      <div className="container px-4 lg:px-8 mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-black">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="relative bg-white rounded-lg border-2 border-black shadow-[6px_6px_0_0_#000000] overflow-hidden transform duration-700"
            data-view="!opacity-100 !translate-y-0">
            <a href="" data-gallery="gallery1">
              <img src={work1} alt="Project 1" className="glightbox3 w-full hover:scale-110 duration-1000" />
            </a>
            <button data-toggle="#catalog1"
              className="absolute [&.show]:!hidden left-2 text-sm bottom-2 py-2 px-4 bg-black opacity-90 text-white rounded">Detail</button>
            <button data-toggle="#catalog1"
              className="absolute [&.show]:!flex hidden right-2 text-sm top-2 w-10 h-10 items-center justify-center bg-white text-black border-2 border-black opacity-90 rounded-full z-20">x</button>
            <div id="catalog1"
              className="absolute [&.show]:!translate-y-0 [&.show]:!opacity-100 inset-4 bg-black text-white p-6 rounded-lg translate-y-[120%] transform duration-300 scrollbars overflow-auto">
              <h3 className="text-lg font-bold uppercase mb-4">Logo Redesign for XYZ Company</h3>
              <p>Redesigned the logo for XYZ Company to give it a modern and vibrant look that reflects their brand
                identity.</p>
            </div>
          </div>

          <div
            className="relative bg-white rounded-lg border-2 border-black shadow-[6px_6px_0_0_#000000] overflow-hidden transform duration-700 delay-200"
            data-view="!opacity-100 !translate-y-0">
            <a href="" data-gallery="gallery1">
              <img src={work2} alt="Project 2" className="glightbox3 w-full hover:scale-110 duration-1000" />
            </a>
            <button data-toggle="#catalog2"
              className="absolute [&.show]:!hidden left-2 text-sm bottom-2 py-2 px-4 bg-black opacity-90 text-white rounded">Detail</button>
            <button data-toggle="#catalog2"
              className="absolute [&.show]:!flex hidden right-2 text-sm top-2 w-10 h-10 items-center justify-center bg-white text-black border-2 border-black opacity-90 rounded-full z-20">x</button>
            <div id="catalog2"
              className="absolute [&.show]:!translate-y-0 [&.show]:!opacity-100 inset-4 bg-black text-white p-6 rounded-lg translate-y-[120%] transform duration-300 scrollbars overflow-auto">
              <h3 className="text-lg font-bold uppercase mb-4">Branding Package for ABC Startup</h3>
              <p>Developed a comprehensive branding package for ABC Startup, including a new logo, business cards, and
                marketing materials.</p>
            </div>
          </div>

          <div
            className="relative bg-white rounded-lg border-2 border-black shadow-[6px_6px_0_0_#000000] overflow-hidden transform duration-700 delay-500"
            data-view="!opacity-100 !translate-y-0">
            <a href="" data-gallery="gallery1">
              <img src={work3} alt="Project 3" className="glightbox3 w-full hover:scale-110 duration-1000" />
            </a>
            <button data-toggle="#catalog3"
              className="absolute [&.show]:!hidden left-2 text-sm bottom-2 py-2 px-4 bg-black opacity-90 text-white rounded">Detail</button>
            <button data-toggle="#catalog3"
              className="absolute [&.show]:!flex hidden right-2 text-sm top-2 w-10 h-10 items-center justify-center bg-white text-black border-2 border-black opacity-90 rounded-full z-20">x</button>
            <div id="catalog3"
              className="absolute [&.show]:!translate-y-0 [&.show]:!opacity-100 inset-4 bg-black text-white p-6 rounded-lg translate-y-[120%] transform duration-300 scrollbars overflow-auto">
              <h3 className="text-lg font-bold uppercase mb-4">Print Campaign for Events and Promotions</h3>
              <p>Designed a series of eye-catching print materials for events and promotions, ensuring a cohesive and
                memorable brand presence.</p>
            </div>
          </div>

          <div
            className="relative bg-white rounded-lg border-2 border-black shadow-[6px_6px_0_0_#000000] overflow-hidden transform duration-700"
            data-view="!opacity-100 !translate-y-0">
            <a href="" data-gallery="gallery1">
              <img src={work4} alt="Project 4" className="glightbox3 w-full hover:scale-110 duration-1000" />
            </a>
            <button data-toggle="#catalog4"
              className="absolute [&.show]:!hidden left-2 text-sm bottom-2 py-2 px-4 bg-black opacity-90 text-white rounded">Detail</button>
            <button data-toggle="#catalog4"
              className="absolute [&.show]:!flex hidden right-2 text-sm top-2 w-10 h-10 items-center justify-center bg-white text-black border-2 border-black opacity-90 rounded-full z-20">x</button>
            <div id="catalog4"
              className="absolute [&.show]:!translate-y-0 [&.show]:!opacity-100 inset-4 bg-black text-white p-6 rounded-lg translate-y-[120%] transform duration-300 scrollbars overflow-auto">
              <h3 className="text-lg font-bold uppercase mb-4">Website UI/UX for Tech Innovations</h3>
              <p>Created a modern and user-friendly UI/UX design for the website of Tech Innovations, enhancing user
                engagement and satisfaction.</p>
            </div>
          </div>

          <div
            className="relative bg-white rounded-lg border-2 border-black shadow-[6px_6px_0_0_#000000] overflow-hidden transform duration-700 delay-200"
            data-view="!opacity-100 !translate-y-0">
            <a href="" data-gallery="gallery1">
              <img src={work5} alt="Project 5" className="glightbox3 w-full hover:scale-110 duration-1000" />
            </a>
            <button data-toggle="#catalog5"
              className="absolute [&.show]:!hidden left-2 text-sm bottom-2 py-2 px-4 bg-black opacity-90 text-white rounded">Detail</button>
            <button data-toggle="#catalog5"
              className="absolute [&.show]:!flex hidden right-2 text-sm top-2 w-10 h-10 items-center justify-center bg-white text-black border-2 border-black opacity-90 rounded-full z-20">x</button>
            <div id="catalog5"
              className="absolute [&.show]:!translate-y-0 [&.show]:!opacity-100 inset-4 bg-black text-white p-6 rounded-lg translate-y-[120%] transform duration-300 scrollbars overflow-auto">
              <h3 className="text-lg font-bold uppercase mb-4">Social Media Graphics for Lifestyle Brand</h3>
              <p>Developed visually appealing graphics for a lifestyle brand's social media channels, increasing brand
                visibility and engagement.</p>
            </div>
          </div>

          <div
            className="relative bg-white rounded-lg border-2 border-black shadow-[6px_6px_0_0_#000000] overflow-hidden transform duration-700 delay-500"
            data-view="!opacity-100 !translate-y-0">
            <a href="" data-gallery="gallery1">
              <img src={work6} alt="Project 6" className="glightbox3 w-full hover:scale-110 duration-1000" />
            </a>
            <button data-toggle="#catalog6"
              className="absolute [&.show]:!hidden left-2 text-sm bottom-2 py-2 px-4 bg-black opacity-90 text-white rounded">Detail</button>
            <button data-toggle="#catalog6"
              className="absolute [&.show]:!flex hidden right-2 text-sm top-2 w-10 h-10 items-center justify-center bg-white text-black border-2 border-black opacity-90 rounded-full z-20">x</button>
            <div id="catalog6"
              className="absolute [&.show]:!translate-y-0 [&.show]:!opacity-100 inset-4 bg-black text-white p-6 rounded-lg translate-y-[120%] transform duration-300 scrollbars overflow-auto">
              <h3 className="text-lg font-bold uppercase mb-4">Packaging Design for Organic Products</h3>
              <p>Crafted eco-friendly and attractive packaging designs for a line of organic products, emphasizing
                sustainability and brand appeal.</p>
            </div>
          </div>

          <div
            className="relative bg-white rounded-lg border-2 border-black shadow-[6px_6px_0_0_#000000] overflow-hidden transform duration-700"
            data-view="!opacity-100 !translate-y-0">
            <a href="" data-gallery="gallery1">
              <img src={work7} alt="Project 7" className="glightbox3 w-full hover:scale-110 duration-1000"/>
            </a>
            <button data-toggle="#catalog7"
              className="absolute [&.show]:!hidden left-2 text-sm bottom-2 py-2 px-4 bg-black opacity-90 text-white rounded">Detail</button>
            <button data-toggle="#catalog7"
              className="absolute [&.show]:!flex hidden right-2 text-sm top-2 w-10 h-10 items-center justify-center bg-white text-black border-2 border-black opacity-90 rounded-full z-20">x</button>
            <div id="catalog7"
              className="absolute [&.show]:!translate-y-0 [&.show]:!opacity-100 inset-4 bg-black text-white p-6 rounded-lg translate-y-[120%] transform duration-300 scrollbars overflow-auto">
              <h3 className="text-lg font-bold uppercase mb-4">Logo Redesign for XYZ Company</h3>
              <p>Redesigned the logo for XYZ Company to give it a modern and vibrant look that reflects their brand
                identity.</p>
            </div>
          </div>

          <div
            className="relative bg-white rounded-lg border-2 border-black shadow-[6px_6px_0_0_#000000] overflow-hidden transform duration-700 delay-200"
            data-view="!opacity-100 !translate-y-0">
            <a href="" data-gallery="gallery1">
              <img src={work8} alt="Project 8" className="glightbox3 w-full hover:scale-110 duration-1000" />
            </a>
            <button data-toggle="#catalog8"
              className="absolute [&.show]:!hidden left-2 text-sm bottom-2 py-2 px-4 bg-black opacity-90 text-white rounded">Detail</button>
            <button data-toggle="#catalog8"
              className="absolute [&.show]:!flex hidden right-2 text-sm top-2 w-10 h-10 items-center justify-center bg-white text-black border-2 border-black opacity-90 rounded-full z-20">x</button>
            <div id="catalog8"
              className="absolute [&.show]:!translate-y-0 [&.show]:!opacity-100 inset-4 bg-black text-white p-6 rounded-lg translate-y-[120%] transform duration-300 scrollbars overflow-auto">
              <h3 className="text-lg font-bold uppercase mb-4">Branding Package for ABC Startup</h3>
              <p>Developed a comprehensive branding package for ABC Startup, including a new logo, business cards, and
                marketing materials.</p>
            </div>
          </div>

          <div
            className="relative bg-white rounded-lg border-2 border-black shadow-[6px_6px_0_0_#000000] overflow-hidden transform duration-700 delay-500"
            data-view="!opacity-100 !translate-y-0">
            <a href="" data-gallery="gallery1">
              <img src={work9} alt="Project 9" className="glightbox3 w-full hover:scale-110 duration-1000" />
            </a>
            <button data-toggle="#catalog9"
              className="absolute [&.show]:!hidden left-2 text-sm bottom-2 py-2 px-4 bg-black opacity-90 text-white rounded">Detail</button>
            <button data-toggle="#catalog9"
              className="absolute [&.show]:!flex hidden right-2 text-sm top-2 w-10 h-10 items-center justify-center bg-white text-black border-2 border-black opacity-90 rounded-full z-20">x</button>
            <div id="catalog9"
              className="absolute [&.show]:!translate-y-0 [&.show]:!opacity-100 inset-4 bg-black text-white p-6 rounded-lg translate-y-[120%] transform duration-300 scrollbars overflow-auto">
              <h3 className="text-lg font-bold uppercase mb-4">Print Campaign for Events</h3>
              <p>Designed a series of eye-catching print materials for events and promotions, ensuring a cohesive and
                memorable brand presence.</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section className="bg-white pt-4 pb-16">
      <div className="container px-4 lg:px-8 mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-black">Our Services</h2>
        <div
          className="p-8 border-2 border-black bg-purple-300 rounded-xl shadow-[6px_6px_0_0_#000000] transform duration-700 delay-200"
          data-view="!opacity-100 !translate-y-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-10 gap-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div>
                <div
                  className="relative flex items-center justify-center w-20 h-20 max-sm:mb-2 text-black p-6 bg-yellow-300 rounded-lg border-2 border-black shadow-[6px_6px_0_0_#000000]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                    className="bi bi-palette2" viewBox="0 0 16 16">
                    <path
                      d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 .5.5v5.277l4.147-4.131a.5.5 0 0 1 .707 0l3.535 3.536a.5.5 0 0 1 0 .708L10.261 10H15.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H3a2.99 2.99 0 0 1-2.121-.879A2.99 2.99 0 0 1 0 13.044m6-.21 7.328-7.3-2.829-2.828L6 7.188v5.647zM4.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M15 15v-4H9.258l-4.015 4zM0 .5v12.495z" />
                    <path d="M0 12.995V13a3.07 3.07 0 0 0 0-.005" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 md:mb-2">Logo Design</h3>
                <p className="text-gray-700">Create a distinctive and memorable brand identity with custom logo designs that
                  represent your business or personal brand.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div>
                <div
                  className="relative flex items-center justify-center w-20 h-20 max-sm:mb-2 text-black p-6 bg-[#02d1c3] rounded-lg border-2 border-black shadow-[6px_6px_0_0_#000000]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                    className="bi bi-fingerprint" viewBox="0 0 16 16">
                    <path
                      d="M8.06 6.5a.5.5 0 0 1 .5.5v.776a11.5 11.5 0 0 1-.552 3.519l-1.331 4.14a.5.5 0 0 1-.952-.305l1.33-4.141a10.5 10.5 0 0 0 .504-3.213V7a.5.5 0 0 1 .5-.5Z" />
                    <path
                      d="M6.06 7a2 2 0 1 1 4 0 .5.5 0 1 1-1 0 1 1 0 1 0-2 0v.332c0 .409-.022.816-.066 1.221A.5.5 0 0 1 6 8.447c.04-.37.06-.742.06-1.115zm3.509 1a.5.5 0 0 1 .487.513 11.5 11.5 0 0 1-.587 3.339l-1.266 3.8a.5.5 0 0 1-.949-.317l1.267-3.8a10.5 10.5 0 0 0 .535-3.048A.5.5 0 0 1 9.569 8Zm-3.356 2.115a.5.5 0 0 1 .33.626L5.24 14.939a.5.5 0 1 1-.955-.296l1.303-4.199a.5.5 0 0 1 .625-.329Z" />
                    <path
                      d="M4.759 5.833A3.501 3.501 0 0 1 11.559 7a.5.5 0 0 1-1 0 2.5 2.5 0 0 0-4.857-.833.5.5 0 1 1-.943-.334Zm.3 1.67a.5.5 0 0 1 .449.546 10.72 10.72 0 0 1-.4 2.031l-1.222 4.072a.5.5 0 1 1-.958-.287L4.15 9.793a9.72 9.72 0 0 0 .363-1.842.5.5 0 0 1 .546-.449Zm6 .647a.5.5 0 0 1 .5.5c0 1.28-.213 2.552-.632 3.762l-1.09 3.145a.5.5 0 0 1-.944-.327l1.089-3.145c.382-1.105.578-2.266.578-3.435a.5.5 0 0 1 .5-.5Z" />
                    <path
                      d="M3.902 4.222a4.996 4.996 0 0 1 5.202-2.113.5.5 0 0 1-.208.979 3.996 3.996 0 0 0-4.163 1.69.5.5 0 0 1-.831-.556Zm6.72-.955a.5.5 0 0 1 .705-.052A4.99 4.99 0 0 1 13.059 7v1.5a.5.5 0 1 1-1 0V7a3.99 3.99 0 0 0-1.386-3.028.5.5 0 0 1-.051-.705ZM3.68 5.842a.5.5 0 0 1 .422.568c-.029.192-.044.39-.044.59 0 .71-.1 1.417-.298 2.1l-1.14 3.923a.5.5 0 1 1-.96-.279L2.8 8.821A6.531 6.531 0 0 0 3.058 7c0-.25.019-.496.054-.736a.5.5 0 0 1 .568-.422Zm8.882 3.66a.5.5 0 0 1 .456.54c-.084 1-.298 1.986-.64 2.934l-.744 2.068a.5.5 0 0 1-.941-.338l.745-2.07a10.51 10.51 0 0 0 .584-2.678.5.5 0 0 1 .54-.456Z" />
                    <path
                      d="M4.81 1.37A6.5 6.5 0 0 1 14.56 7a.5.5 0 1 1-1 0 5.5 5.5 0 0 0-8.25-4.765.5.5 0 0 1-.5-.865Zm-.89 1.257a.5.5 0 0 1 .04.706A5.478 5.478 0 0 0 2.56 7a.5.5 0 0 1-1 0c0-1.664.626-3.184 1.655-4.333a.5.5 0 0 1 .706-.04ZM1.915 8.02a.5.5 0 0 1 .346.616l-.779 2.767a.5.5 0 1 1-.962-.27l.778-2.767a.5.5 0 0 1 .617-.346Zm12.15.481a.5.5 0 0 1 .49.51c-.03 1.499-.161 3.025-.727 4.533l-.07.187a.5.5 0 0 1-.936-.351l.07-.187c.506-1.35.634-2.74.663-4.202a.5.5 0 0 1 .51-.49" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 md:mb-2">Branding and Identity</h3>
                <p className="text-gray-700">Develop a strong brand presence through cohesive branding and identity
                  solutions, including color schemes, typography, and visual elements.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div>
                <div
                  className="relative flex items-center justify-center w-20 h-20 max-sm:mb-2 text-black p-6 bg-[#f32b81] rounded-lg border-2 border-black shadow-[6px_6px_0_0_#000000]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                    className="bi bi-palette-fill" viewBox="0 0 16 16">
                    <path
                      d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07M8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 md:mb-2">Print Design</h3>
                <p className="text-gray-700">Design eye-catching print materials such as business cards, brochures, posters,
                  and banners that effectively communicate your message.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div>
                <div
                  className="relative flex items-center justify-center w-20 h-20 max-sm:mb-2 text-black p-6 bg-blue-400 rounded-lg border-2 border-black shadow-[6px_6px_0_0_#000000]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="32" height="32"
                    viewBox="0 0 512 512">
                    <rect
                        stroke="currentColor"
                        x="32"
                        y="64"
                        width="448"
                        height="320"
                        rx="32"
                        ry="32"
                        style={{
                            fill: 'none',
                            strokeLinejoin: 'round',
                            strokeWidth: '32px'
                        }}
                    />
                    <polygon
                        fill="currentColor"
                        points="304 448 296 384 216 384 208 448 304 448"
                        style={{
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: '32px'
                        }}
                    />
                    <line
                        stroke="currentColor"
                        x1="368"
                        y1="448"
                        x2="144"
                        y2="448"
                        style={{
                            fill: 'none',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: '32px'
                        }}
                    />
                    <path
                        fill="currentColor"
                        d="M32,304v48a32.09,32.09,0,0,0,32,32H448a32.09,32.09,0,0,0,32-32V304Zm224,64a16,16,0,1,1,16-16A16,16,0,0,1,256,368Z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 md:mb-2">Digital Design</h3>
                <p className="text-gray-700">Craft visually appealing digital designs for websites, social media, and online
                  marketing materials to enhance your online presence.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div>
                <div
                  className="relative flex items-center justify-center w-20 h-20 max-sm:mb-2 text-black p-6 bg-red-300 rounded-lg border-2 border-black shadow-[6px_6px_0_0_#000000]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                    className="bi bi-brush-fill" viewBox="0 0 16 16">
                    <path
                      d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 md:mb-2">Illustration</h3>
                <p className="text-gray-700">Create unique and captivating illustrations for various purposes, including
                  book covers, editorial content, and digital media.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div>
                <div
                  className="relative flex items-center justify-center w-20 h-20 max-sm:mb-2 text-black p-6 bg-lime-300 rounded-lg border-2 border-black shadow-[6px_6px_0_0_#000000]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-front"
                    viewBox="0 0 16 16">
                    <path
                      d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 md:mb-2">UI/UX Design</h3>
                <p className="text-gray-700">Design user-friendly and visually appealing interfaces for websites and
                  applications, focusing on enhancing the overall user experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white border-b-2 border-black pb-16">
      <div className="container px-4 lg:px-8 mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-black">Practice</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-[#00a6a2] py-6 px-8 rounded-lg border-2 border-black shadow-[6px_6px_0_0_#000000] transform duration-700"
            data-view="!opacity-100 !translate-y-0">
            <div className="flex items-center gap-4 mb-4">
              <img src="https://t3.ftcdn.net/jpg/03/33/09/88/360_F_333098851_oaiN8o7glILcg7nsT1vhSPewI1wSjzyN.jpg" alt="Client 1"
                className="w-12 h-12 rounded-full inline-block border-2 border-black bg-yellow-300 object-cover" />
              <div className="inline-block">
                <h3 className="text-lg font-bold">David</h3>
                <p className="text-gray-600">Donz Corp</p>
              </div>
            </div>
            <div className="flex mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fedf63" viewBox="0 0 24 24" stroke="currentColor"
                className="h-6 w-6 inline-block">
                <polygon fill="#fedf63"
                  points="12 2 15.092 8.82 22 9.18 17 14 18.182 21.82 12 17.6 5.818 21.82 7 14 2 9.18 8.908 9.18">
                </polygon>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fedf63" viewBox="0 0 24 24" stroke="currentColor"
                className="h-6 w-6 inline-block">
                <polygon fill="#fedf63"
                  points="12 2 15.092 8.82 22 9.18 17 14 18.182 21.82 12 17.6 5.818 21.82 7 14 2 9.18 8.908 9.18">
                </polygon>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fedf63" viewBox="0 0 24 24" stroke="currentColor"
                className="h-6 w-6 inline-block">
                <polygon fill="#fedf63"
                  points="12 2 15.092 8.82 22 9.18 17 14 18.182 21.82 12 17.6 5.818 21.82 7 14 2 9.18 8.908 9.18">
                </polygon>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fedf63" viewBox="0 0 24 24" stroke="currentColor"
                className="h-6 w-6 inline-block">
                <polygon fill="#fedf63"
                  points="12 2 15.092 8.82 22 9.18 17 14 18.182 21.82 12 17.6 5.818 21.82 7 14 2 9.18 8.908 9.18">
                </polygon>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fedf63" viewBox="0 0 24 24" stroke="currentColor"
                className="h-6 w-6 inline-block">
                <polygon fill="#fedf63"
                  points="12 2 15.092 8.82 22 9.18 17 14 18.182 21.82 12 17.6 5.818 21.82 7 14 2 9.18 8.908 9.18">
                </polygon>
              </svg>
            </div>
            <p className="text-gray-700">Working with [Roman] was an incredible experience. Their attention to detail and
              creative flair brought our vision to life. Highly recommended!</p>
          </div>

          <div
            className="bg-[#00a6a2] py-6 px-8 rounded-lg border-2 border-black shadow-[6px_6px_0_0_#000000] transform duration-700 delay-200"
            data-view="!opacity-100 !translate-y-0">
            <div className="flex items-center gap-4 mb-4">
              <img src="https://t3.ftcdn.net/jpg/03/33/09/88/360_F_333098851_oaiN8o7glILcg7nsT1vhSPewI1wSjzyN.jpg" alt="Client 2"
                className="w-12 h-12 rounded-full inline-block border-2 border-black bg-yellow-300 object-cover" />
              <div className="inline-block">
                <h3 className="text-lg font-bold">Marcos</h3>
                <p className="text-gray-600">Sangz Media</p>
              </div>
            </div>
            <div className="flex mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fedf63" viewBox="0 0 24 24" stroke="currentColor"
                className="h-6 w-6 inline-block">
                <polygon fill="#fedf63"
                  points="12 2 15.092 8.82 22 9.18 17 14 18.182 21.82 12 17.6 5.818 21.82 7 14 2 9.18 8.908 9.18">
                </polygon>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fedf63" viewBox="0 0 24 24" stroke="currentColor"
                className="h-6 w-6 inline-block">
                <polygon fill="#fedf63"
                  points="12 2 15.092 8.82 22 9.18 17 14 18.182 21.82 12 17.6 5.818 21.82 7 14 2 9.18 8.908 9.18">
                </polygon>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fedf63" viewBox="0 0 24 24" stroke="currentColor"
                className="h-6 w-6 inline-block">
                <polygon fill="#fedf63"
                  points="12 2 15.092 8.82 22 9.18 17 14 18.182 21.82 12 17.6 5.818 21.82 7 14 2 9.18 8.908 9.18">
                </polygon>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fedf63" viewBox="0 0 24 24" stroke="currentColor"
                className="h-6 w-6 inline-block">
                <polygon fill="#fedf63"
                  points="12 2 15.092 8.82 22 9.18 17 14 18.182 21.82 12 17.6 5.818 21.82 7 14 2 9.18 8.908 9.18">
                </polygon>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fedf63" viewBox="0 0 24 24" stroke="currentColor"
                className="h-6 w-6 inline-block">
                <polygon fill="#fedf63"
                  points="12 2 15.092 8.82 22 9.18 17 14 18.182 21.82 12 17.6 5.818 21.82 7 14 2 9.18 8.908 9.18">
                </polygon>
              </svg>
            </div>
            <p className="text-gray-700">Impressed with the level of professionalism and creativity. [Roman] is a true
              talent in the world of graphic design.</p>
          </div>

          <div
            className="bg-[#00a6a2] py-6 px-8 rounded-lg border-2 border-black shadow-[6px_6px_0_0_#000000] transform duration-700 delay-500"
            data-view="!opacity-100 !translate-y-0">
            <div className="flex items-center gap-4 mb-4">
              <img src="https://t3.ftcdn.net/jpg/03/33/09/88/360_F_333098851_oaiN8o7glILcg7nsT1vhSPewI1wSjzyN.jpg" alt="Client 3"
                className="w-12 h-12 rounded-full inline-block border-2 border-black bg-yellow-300 object-cover" />
              <div className="inline-block">
                <h3 className="text-lg font-bold">Jennifer</h3>
                <p className="text-gray-600">Bird Corp</p>
              </div>
            </div>
            <div className="flex mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fedf63" viewBox="0 0 24 24" stroke="currentColor"
                className="h-6 w-6 inline-block">
                <polygon fill="#fedf63"
                  points="12 2 15.092 8.82 22 9.18 17 14 18.182 21.82 12 17.6 5.818 21.82 7 14 2 9.18 8.908 9.18">
                </polygon>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fedf63" viewBox="0 0 24 24" stroke="currentColor"
                className="h-6 w-6 inline-block">
                <polygon fill="#fedf63"
                  points="12 2 15.092 8.82 22 9.18 17 14 18.182 21.82 12 17.6 5.818 21.82 7 14 2 9.18 8.908 9.18">
                </polygon>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fedf63" viewBox="0 0 24 24" stroke="currentColor"
                className="h-6 w-6 inline-block">
                <polygon fill="#fedf63"
                  points="12 2 15.092 8.82 22 9.18 17 14 18.182 21.82 12 17.6 5.818 21.82 7 14 2 9.18 8.908 9.18">
                </polygon>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fedf63" viewBox="0 0 24 24" stroke="currentColor"
                className="h-6 w-6 inline-block">
                <polygon fill="#fedf63"
                  points="12 2 15.092 8.82 22 9.18 17 14 18.182 21.82 12 17.6 5.818 21.82 7 14 2 9.18 8.908 9.18">
                </polygon>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fedf63" viewBox="0 0 24 24" stroke="currentColor"
                className="h-6 w-6 inline-block">
                <polygon fill="#fedf63"
                  points="12 2 15.092 8.82 22 9.18 17 14 18.182 21.82 12 17.6 5.818 21.82 7 14 2 9.18 8.908 9.18">
                </polygon>
              </svg>
            </div>
            <p className="text-gray-700">Exceptional design skills and a pleasure to work with. [Roman] consistently
              delivers high-quality results.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[#2196f3] bg text-white py-16">
      <div className="container px-4 lg:px-8 mx-auto">
        <div className="text-center transform duration-1000 scale-75 delay-100"
          data-view="!opacity-100 !scale-100">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-8">If you're interested in working together or have any further questions, feel free to
            contact us.</p>

          <a className="py-3 px-4 relative inline-flex flex-row items-center justify-center gap-x-4 rounded font-bold text-lg tracking-[.00714em] border-2 border-black hover:-translate-y-0.5 transform duration-200 shadow-[4px_4px_0_0_#000000] focus:-translate-y-0.5 bg-yellow-300 text-black"
            href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
              className="bi bi-chat-dots-fill" viewBox="0 0 16 16">
              <path
                d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            </svg>
            Lets Talk!
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer className="bg-black text-white py-8">
    <div className="container px-4 lg:px-8 mx-auto">
      <div className="flex flex-col max-md:text-center md:flex-row max-md:justify-center gap-8 md:justify-between">
        <nav className="flex flex-col sm:flex-row max-md:mx-auto">
          <a href="#" className="max-sm:py-2 px-2">Privacy Policy</a>
          <a href="#" className="max-sm:py-2 px-2">Terms of Use</a>
          <a href="#" className="max-sm:py-2 px-2">Guideline</a>
        </nav>
        <p>Roman Andreas &copy; 2024 | All Rights Reserved.</p>
      </div>
    </div>
  </footer>

  <button
    className="w-10 h-10 flex items-center justify-center bg-white border-2 border-black text-black rounded-full opacity-80 hover:opacity-100 fixed right-4 bottom-4"
    dataBacktop="#">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up mx-auto"
      viewBox="0 0 16 16">
      <path fillRule="evenodd"
        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
    </svg>
  </button>
    </section>
  )
}