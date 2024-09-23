import "./page.css";
import Link from "next/link";

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
            <Link href="/students">
            
              <button className="p-3 bg-blue-500 text-white rounded-r-md">
                Search
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="main flex gap-12 flex-wrap justify-center">
        <div className="card  card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
          <figure>
            <img src="/landingPage/image_1.jpeg" alt="Students" />
          </figure>
          <div className="card-body mt-5">
            <h2 className="card-title ">Software Development</h2>
            <p>30+ cources</p>
            <div className="card-actions justify-center">
              <Link href="/students">
                {" "}
                <button className="btn btn-primary cardbtn ">
                  View All Cources
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
          <figure>
            <img src="/landingPage/image_2.jpeg" alt="Students" />
          </figure>
          <div className="card-body mt-5">
            <h2 className="card-title">Graphic Design</h2>
            <p>30+ Cources</p>
            <div className="card-actions justify-center">
              <Link href="/students">
                {" "}
                <button className="btn btn-primary cardbtn ">
                  View All Cources
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
          <figure>
            <img src="/landingPage/image_3.jpeg" alt="Students" />
          </figure>
          <div className="card-body mt-5 ">
            <h2 className="card-title">Digital Marketing</h2>
            <p>30+ Cources</p>
            <div className="card-actions justify-center">
              <Link href="/students">
                {" "}
                <button className="btn btn-primary cardbtn ">
                  View All Cources
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
          <figure>
            <img src="/landingPage/image_4.jpeg" alt="Students" />
          </figure>
          <div className="card-body mt-5 ">
            <h2 className="card-title">Machine Learning</h2>
            <p>30+ Cources</p>
            <div className="card-actions justify-center">
              <Link href="/students">
                {" "}
                <button className="btn btn-primary cardbtn ">
                  View All Cources
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Student and admin Cards */}
      <div className="p-[30px] flex flex-col items-center">
        <div className="card lg:card-side w-11/12 md:w-6/12 lg:w-6/12 bg-base-100  shadow-xl">
          <figure>
            <img
              className="w-[100%]"
              src="/landingPage/adminCard.jpeg"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Admin Dashboard</h2>
            <p>Manage user cources and more</p>
            <div className="card-actions justify-end">
              <Link href="/admin">
                <button className="btn btn-primary">Go to Admin</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card lg:card-side w-11/12 md:w-6/12 lg:w-6/12 bg-base-100 shadow-xl mt-8">
          <figure>
            <img
              className="w-full"
              src="/landingPage/studentCard.jpeg"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Student Dashboard</h2>
            <p>Access cources, track, progress and more</p>
            <div className="card-actions justify-end">
              <Link href="/students">
                <button className="btn btn-primary">Go To Student</button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] flex  flex-col px-6 mx-auto bg-gray-50 mt-6">
        <div className="flex flex-col lg:px-0 px-8 justify-center">
          <h1 className="text-black font-bold text-4xl mb-4">Why Learn on Learnly?</h1>
          <p className="text-slate-500 font-bold">
            Learn the latest skills, get career Support, and more.
          </p>
        </div>
        <div className="mt-8 flex gap-2 flex-wrap lg:justify-center md:justify-center justify-center">
          <div className="card card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
            <figure className="lg:h-40">
              <img
                className="w-full h-full"
                src="/landingPage/image_5.jpeg"
                alt="Students"
              />
            </figure>
            <div className="card-body mt-5">
              <h2 className="card-title ">Real World Projects</h2>
              <p className="opacity-65">
              Real World Projects give you the opportunity to work on practical tasks that mirror the challenges faced in the industry. These projects help build your portfolio and develop the problem-solving skills necessary to succeed in a professional environment.
              </p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
            <figure className="lg:h-40">
              <img
                className="w-full h-full"
                src="/landingPage/image_6.jpeg"
                alt="Students"
              />
            </figure>
            <div className="card-body mt-5">
              <h2 className="card-title ">Career Services</h2>
              <p className="opacity-65">
              Career Services offer personalized support to help you transition into the workforce. From crafting a professional resume to refining your interview skills, these services are designed to guide you through every step of the job search process.
              </p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
            <figure className="lg:h-40">
              <img
                className="w-full h-full"
                src="/landingPage/image_7.jpeg"
                alt="Students"
              />
            </figure>
            <div className="card-body mt-5">
              <h2 className="card-title ">Flexible Scheduling</h2>
              <p className="opacity-65">
              Flexible Scheduling allows you to balance your learning with other commitments. Whether you're a full-time professional or have personal obligations, this flexibility enables you to learn at your own pace, ensuring you stay on track without sacrificing other responsibilities.
              </p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
            <figure className="lg:h-40">
              <img
                className="w-full h-full"
                src="/landingPage/image_8.jpeg"
                alt="Students"
              />
            </figure>
            <div className="card-body mt-5">
              <h2 className="card-title ">Industry Expert Instructors</h2>
              <p className="opacity-65">
              Industry Expert Instructors provide you with valuable insights and practical knowledge, drawing from their extensive experience in the field. Their expertise helps bridge the gap between theory and real-world application, ensuring you learn industry-relevant skills and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
