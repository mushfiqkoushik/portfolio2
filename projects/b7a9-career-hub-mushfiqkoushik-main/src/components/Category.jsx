import React, { useState } from "react";

export default function Category({category}) {
    const {id,hashTag,image,AvailableJob,}=category || {} ;
   
  return (
    <div className="px-5">
      

      <div>
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
          <img
            src={image}
            alt=""
            className="object-cover object-center item-center w-100 rounded-t-md h-100 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
            {hashTag}
              </h2>
              <p className="dark:text-gray-100">{AvailableJob}</p>

            
            </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}
