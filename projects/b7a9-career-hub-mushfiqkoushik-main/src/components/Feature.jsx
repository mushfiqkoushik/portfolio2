import React from "react";
import { Link } from "react-router-dom";

export default function Feature({ feature }) {
  const { id, Name, image, JobTitle, salary, Address } = feature || {};

  return (
    <div className="p-4">
      <div>
        <div>
          <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img
              src={image}
              alt=""
              className="object-cover object-center item-center w-500 rounded-t-md h-200 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">{Name}</h2>
                <p className="dark:text-gray-100">{JobTitle}</p>

                <div className="flex justify-between font-bold">
                  <button>REMOTE</button>
                  <button>FULLTIME</button>
                </div>
              </div>
            </div>
            <div className="flex justify-between ">
              <p>{Address}</p>
              <p>{salary}</p>
            </div>
            <p></p>
            <Link state={{feature}} to={`/job/${id}`} >
            <button
              type="button"
              className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              VIEW DETAILS
            </button>
            
            
            
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  );
}
