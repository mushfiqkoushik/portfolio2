import React from "react";
import { useLocation } from "react-router-dom";

export default function JobDetails() {
  const location = useLocation();
  const { feature } = location?.state || {};

  const { id, Name, JobTitle, salary,Phone, Email,contactAddress,JobDescription,JobResponsibility,EducationalRequirements,Experiences } = feature || {};

  return (
    <div className="mt-10 flex justify-between">
      <div>
        <div className="flex flex-col max-w-lg w-full p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
          <div className="flex space-x-4">
            <div className="flex flex-col space-y-1"></div>
          </div>
          <div>
            <h2 className="mb-1 text-2xl font-bold">Job Description: </h2>
            <p>{JobDescription}</p>
            <h2 className="mb-1 text-2xl font-bold">JobResponsibility: </h2>
            <p>{JobResponsibility}</p>

            <p className="text-xl dark:text-gray-400">
             
            </p>
            <p className="text-2xl dark:text-gray-400 font-bold">
              Educational Requirements:{EducationalRequirements}
            </p>
           
            <p className="text-2xl dark:text-gray-400 font-bold">
              Experiences:{Experiences}
            </p>
           
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="space-x-2"></div>
            <div className="flex space-x-2 text-sm dark:text-gray-400"></div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-3xl font-bold"> Job Details</p>

        <div>
          <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <div className="flex flex-col justify-between p-6 space-y-8">
              <p className="text-2xl font bold">{Name}</p>
              <p>{salary}</p>
              <p>{JobTitle}</p>
              <div>
              <p className="text-3xl font-bold"> Contact Details</p>
              </div>
              <div>
                <h1 className="text-3xl font-bold">{}</h1>
                <p>Phone :{Phone}</p>

                <p> Email:{Email}</p>

                <p>Contact:{contactAddress}</p>

                <button
                  type="button"
                  className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  APPLY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
