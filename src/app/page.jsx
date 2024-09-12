import "./page.css";

export default function Home() {
  return (
    <main className="bg-gray-100">
      {/* Hero section */}

      <div id="hero">
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-gray-900 bg-opacity-50 text-white p-8">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-center">
            Advance your career with Learnly
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-center">
            Master skills that can help you succeed in your current job, or
            launch a new career.
          </p>

          {/* <!-- Search bar --> */}
          <div className="mt-6 flex w-full max-w-lg">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="flex-grow p-3 rounded-l-md border-none focus:outline-none"
            />
            <button className="p-3 bg-blue-500 text-white rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="main flex gap-12 flex-wrap justify-center">
        <div className="card card-compact bg-base-100 w-64 shadow-xl">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKhrWJif1gj7FZ17KlB7H1JVsDvhucGaEzfA&s"
              alt="Shoes"
            />
          </figure>
          <div className="card-body mt-5">
            <h2 className="card-title ">Software Development</h2>
            <p>30+ cources</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary cardbtn ">
                View All Cources
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-64 shadow-xl">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Wih-WJswDlIVz8Ju3fI5B1R_1cohraOBwA&s"
              alt="Students"
            />
          </figure>
          <div className="card-body mt-5">
            <h2 className="card-title">Graphic Design</h2>
            <p>30+ Cources</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary cardbtn ">
                View All cources
              </button>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 w-64 shadow-xl">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZVXsaSmdwE2_XkOf8OUkvO0-UJb4JnJdciJkFwhqmS7-VsNZ-QJZOEfuMDBfbJhdgFw&usqp=CAU"
              alt="Students"
            />
          </figure>
          <div className="card-body mt-5 ">
            <h2 className="card-title">Digital Marketing</h2>
            <p>30+ Cources</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary cardbtn mt-3">
                View All cources
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-64 shadow-xl">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU92e5r6aAQxZtqVIBkWyQUYNRE6jsWEBu3Q&s"
              alt="Students"
            />
          </figure>
          <div className="card-body mt-5 ">
            <h2 className="card-title">Machine Learning</h2>
            <p>30+ Cources</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary cardbtn mt-3">
                View All cources
              </button>
            </div>
          </div>
        </div>

        </div>

        {/* Student and admin Cards */}
        <div className="p-[30px] flex flex-col " >
        <div className="card lg:card-side bg-base-100  shadow-xl">
          <figure>
            <img
            className="w-[100%]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2pS5tSnizd3UlvSk-V3Z0rXJBJpo2OM61ig&s"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Admin Dashboard</h2>
            <p>Manage user's cources and more</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Go to Admin</button>
            </div>
          </div>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl mt-8">
          <figure>
            <img
            className="w-[100%]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrnFblbaCtFjRX3e-Yp9nb5zw75OkWhApG7Q&s"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Student Dashboard</h2>
            <p>Access cources, track, progress and more</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Go To Student</button>
            </div>
          </div>
        </div>
        
      </div>
    </main>
  );
}
