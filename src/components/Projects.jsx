function Projects() {
  return (
    <section className="flex flex-col">
      <h2 className="flex justify-center font-extrabold text-4xl text-white">
        PROJECTS
      </h2>
      <div className="flex justify-between mx-20 gap-40 my-16 text-white">
        <div className="bg-[#2A2A2A] w-full rounded-xl">
          <img
            src="./public/retrash-page.png"
            alt=""
            className=" w-full h-72 rounded-t-2xl"
          />
          <div className="flex justify-between mx-5 my-2">
            <div>
              <p className="text-[#C5C5C5] font-extrabold text-xs">
                CLICK HERE TO VISIT
              </p>
              <h3 className="font-extrabold text-lg">RETRASH</h3>
            </div>
            <button>
              <a href="https://github.com/lgaieta/retrash-landing">
                <img
                  src="./public/view.png"
                  alt=""
                  className="transition hover:shadow-lg hover:shadow-white"
                />
              </a>
            </button>
          </div>
        </div>
        <div className="bg-[#2A2A2A] w-full rounded-xl  ">
          <img
            src="./public/sportshop-page.png"
            alt=""
            className="bg-gray-300 h-72 rounded-t-2xl"
          />
          <div className="flex justify-between mx-5 my-2">
            <div>
              <p className="text-[#C5C5C5] font-extrabold text-xs">
                CLICK HERE TO VISIT
              </p>
              <h3 className="font-extrabold text-lg">SPORTSHOP</h3>
            </div>
            <button>
              <a href="https://github.com/jmayola/SportShop">
                <img
                  src="./public/view.png"
                  alt=""
                  className="transition hover:shadow-lg hover:shadow-white"
                />
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
