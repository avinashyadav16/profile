const projectarr = [
  {
    name: "ShopVista",
    disc: "This is an e-commerce website made using React.js bootstrap MUI",
    code: "https://github.com/AMISH-KHAN/ShopVista-Frontend",
    image: "./assets/image/shopvista.png",
  },
  {
    name: "Tic-Tac-Toe",
    disc: "This is a multiplayer tic-tac-toe game it uses socket.io HTML CSS Javascript",
    code: "https://github.com/AMISH-KHAN/Tic-Tac_toe-app",
    live: "https://tic-tac-toe-8a0g.onrender.com/",
    image: "./assets/image/tic-tac-toe.png",
  },
  {
    name: "Portfolio",
    disc: "Portfolio made using react and TailwindCss",
    code: "https://github.com/AMISH-KHAN/MordernPortfolio",
    live: "https://amishkhan.netlify.app/",
    image: "./assets/image/MordernPortfolio.png",
  },
];

export default function Projoects() {
  return (
    <>
      <section id="projects">
        <h1 className="h-[7rem] bg-black text-white text-3xl flex items-center justify-center">
          Projects{" "}
        </h1>
        <div>
          <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="flex md:flex-row flex-col justify-between gap-10">
              {projectarr.map((project, index) => {
                return (
                  <div
                    className="rounded overflow-hidden shadow-lg shadow-[#53bf63] "
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  >
                    <div className="relative">
                      <img
                        className="w-full h-[13rem]"
                        src={`${project.image}`}
                        alt={`Image of ${project.image}`}
                      />
                      <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>

                      {/* <div className='flex justify-between'> */}

                      {project.live ? (
                        <a href={`${project.live}`} target="_blank">
                          <div className="absolute bottom-0 left-0 bg-[#000000ae]  px-4 py-2 text-white text-sm hover:bg-[#000000ce] hover:text-[#53bf63]  transition duration-500 ease-in-out">
                            Live
                          </div>
                        </a>
                      ) : (
                        ""
                      )}

                      <a href={`${project.code}`} target="_blank">
                        <div className="absolute bottom-0 right-0  bg-[#000000ae] px-4 py-2 text-white text-sm hover:bg-[#000000ce] hover:text-[#53bf63] transition duration-500 ease-in-out">
                          Code
                        </div>
                      </a>
                      {/* </div> */}
                    </div>
                    <div className="px-6 py-4">
                      <h1 className="font-semibold text-lg text-white inline-blocktransition duration-500 ease-in-out">
                        {project.name}
                      </h1>
                      <p className="text-white text-sm mt-4">{project.disc}</p>
                    </div>
                    <div className="px-6 py-4 flex flex-row items-center"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
