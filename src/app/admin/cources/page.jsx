import React from 'react'

const Cources = () => {
  return (
    <div className="overflow-x-auto lg:px-20 mt-6">
    <table className="table lg:table-md table-xs">
      <thead>
        <tr>
          <th></th>
          <th>Cource</th>
          <th>students</th>
          <th>start Date</th>
          <th>End Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>
          <div className="flex lg:flex-row lg:items-center items-start flex-col gap-3">
            <div className="avatar">
              <div className="mask h-20 w-28">
                <img
                  src="/landingPage/image_1.jpeg"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
          </td>
          <td>18</td>
          <td>jan 4, 2024</td>
          <td>March 4, 2024</td>
          <td><button className="btn btn-active">Edit</button> <button className="btn btn-active btn-neutral">Delete</button></td>
        </tr>
        <tr>
          <th>2</th>
          <td>
          <div className="flex lg:flex-row lg:items-center items-start flex-col gap-3">
            <div className="avatar">
              <div className="mask  h-20 w-28">
                <img
                  src="/landingPage/image_2.jpeg"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
          <td>23</td>
          <td>March 6, 2024</td>
          <td>May 6, 2024</td>
          <td><button className="btn btn-active">Edit</button> <button className="btn btn-active btn-neutral">Delete</button></td>
        </tr>
        <tr>
          <th>3</th>
          <td>
          <div className="flex lg:flex-row lg:items-center items-start flex-col gap-3">
            <div className="avatar">
              <div className="mask  h-20 w-28">
                <img
                  src="/landingPage/image_3.jpeg"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Brice Swyre</div>
              <div className="text-sm opacity-50">China</div>
            </div>
          </div>
        </td>
          <td>20</td>
          <td>may 8, 2024</td>
          <td>july 8, 2024</td>
          <td><button className="btn btn-active">Edit</button> <button className="btn btn-active btn-neutral">Delete</button></td>
        </tr>
        <tr>
          <th>4</th>
          <td>
          <div className="flex lg:flex-row lg:items-center items-start flex-col gap-3">
            <div className="avatar">
              <div className="mask h-20 w-28">
                <img
                  src="/landingPage/image_4.jpeg"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
          <td>32</td>
          <td>July 10, 2024</td>
          <td>Sep 10, 2024</td>
          <td><button className="btn btn-active">Edit</button> <button className="btn btn-active btn-neutral">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default Cources