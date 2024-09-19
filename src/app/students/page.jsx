import Image from 'next/image'
import React from 'react'

const AdminPage = () => {
  return (
    <>
      <div className="max-w-[1100px] flex  flex-col px-6 mx-auto bg-gray-50 mt-6">
        <div className='flex flex-col lg:px-0 px-8 justify-center'>
          <h1 className="text-black font-bold text-4xl mb-4">
            The Great Cources
          </h1>
          <p className="text-slate-500 font-bold">
            Explore the world greatest cources. Dive into a subject, learn from
            the best, and get the skills you need to succeed{" "}
          </p>
        </div>
        <div className="mt-8 flex gap-2 flex-wrap lg:justify-center md:justify-center justify-center">
          <div className="card card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
          <figure className='h-40'>
            <img
            className='w-full h-full'
              src="/landingPage/image_1.jpeg"
              alt="Students"
            />
          </figure>
          <div className="card-body mt-5">
            <h2 className="card-title ">Software Development</h2>
            <p className='text-gray-500 font-bold'>By Annie Leibovitz</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary cardbtn ">
                Enroll Now
              </button>
            </div>
          </div>
          </div>
          <div className="card card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
          <figure className='h-40'>
            <img
            className='w-full h-full'
              src="/landingPage/image_2.jpeg"
              alt="Students"
            />
          </figure>
          <div className="card-body mt-5">
            <h2 className="card-title">Graphic Design</h2>
            <p className='text-gray-500 font-bold'>By Margaret Atwood</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary cardbtn ">
                Enroll Now
              </button>
            </div>
          </div>
          </div>
          <div className="card card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
          <figure className='h-40'>
            <img
              className='w-full h-full'
              src="/landingPage/image_3.jpeg"
              alt="Students"
            />
          </figure>
          <div className="card-body mt-5 ">
            <h2 className="card-title">Digital Marketing</h2>
            <p className='text-gray-500 font-bold'>By Chriss Voss</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary cardbtn mt-3">
                Enroll Now
              </button>
            </div>
          </div>
          </div>
          <div className="card card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
          <figure className='h-40'>
            <img
            className='w-full h-full'
              src="/landingPage/image_4.jpeg"
              alt="Students"
            />
          </figure>
          <div className="card-body mt-5 ">
            <h2 className="card-title">Machine Learning</h2>
            <p className='text-gray-500 font-bold'>By Laurie Santos</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary cardbtn mt-3">
                Enroll Now
              </button>
            </div>
          </div>
          </div>
          <div className="card card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
          <figure className='h-40 '>
            <img
            className='w-full h-full object-cover'

              src="/cources/photo.jpeg"
              alt="Students"
            />
          </figure>
          <div className="card-body mt-5 ">
            <h2 className="card-title">Photograpy: A master Class</h2>
            <p className='text-gray-500 font-bold'>By Laurie Santos</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary cardbtn mt-3">
                Enroll Now
              </button>
            </div>
          </div>
          </div>
          <div className="card card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
          <figure className='h-40'>
            <img
            className='w-full h-full object-cover'
              src="/cources/creativeWriting.jpeg"
              alt="Students"
            />
          </figure>
          <div className="card-body mt-5 ">
            <h2 className="card-title">Creative writting</h2>
            <p className='text-gray-500 font-bold'>By Laurie Santos</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary cardbtn mt-3">
                Enroll Now
              </button>
            </div>
          </div>
          </div>
          <div className="card card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
          <figure className='h-40'>
            <img
            className='w-full h-full'
              src="/landingPage/image_4.jpeg"
              alt="Students"
            />
          </figure>
          <div className="card-body mt-5 ">
            <h2 className="card-title">The Art of Negotiation</h2>
            <p className='text-gray-500 font-bold'>By Laurie Santos</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary cardbtn mt-3">
                Enroll Now
              </button>
            </div>
          </div>
          </div>
          <div className="card card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
          <figure className='h-40'>
            <img
            className='w-full h-full'
              src="/landingPage/image_4.jpeg"
              alt="Students"
            />
          </figure>
          <div className="card-body mt-5 ">
            <h2 className="card-title">Investing for Beginners</h2>
            <p className='text-gray-500 font-bold'>By Laurie Santos</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary cardbtn mt-3">
                Enroll Now
              </button>
            </div>
          </div>
          </div>
          <div className="card card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
          <figure className='h-40'>
            <img
            className='w-full h-full'
              src="/landingPage/image_4.jpeg"
              alt="Students"
            />
          </figure>
          <div className="card-body mt-5 ">
            <h2 className="card-title">Public Speaking Bootcamp</h2>
            <p className='text-gray-500 font-bold'>By Laurie Santos</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary cardbtn mt-3">
                Enroll Now
              </button>
            </div>
          </div>
          </div>
          <div className="card card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
          <figure className='h-40'>
            <img
            className='w-full h-full'
              src="/landingPage/image_4.jpeg"
              alt="Students"
            />
          </figure>
          <div className="card-body mt-5 ">
            <h2 className="card-title">Intro to Production Design</h2>
            <p className='text-gray-500 font-bold'>By Laurie Santos</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary cardbtn mt-3">
                Enroll Now
              </button>
            </div>
          </div>
          </div>
          <div className="card card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
          <figure className='h-40'>
            <img
            className='w-full h-full'
              src="/landingPage/image_4.jpeg"
              alt="Students"
            />
          </figure>
          <div className="card-body mt-5 ">
            <h2 className="card-title">Japaneses Cuisine Essentials</h2>
            <p className='text-gray-500 font-bold'>By Laurie Santos</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary cardbtn mt-3">
                Enroll Now
              </button>
            </div>
          </div>
          </div>
          <div className="card card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
          <figure className='h-40'>
            <img
            className='w-full h-full'
              src="/landingPage/image_4.jpeg"
              alt="Students"
            />
          </figure>
          <div className="card-body mt-5 ">
            <h2 className="card-title">DIY Home Renovation</h2>
            <p className='text-gray-500 font-bold'>By Laurie Santos</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary cardbtn mt-3">
                Enroll Now
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;