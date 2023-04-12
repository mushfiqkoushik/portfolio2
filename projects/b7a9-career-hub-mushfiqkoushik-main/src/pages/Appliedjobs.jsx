import React from "react";

export default function Appliedjobs() {
  return (
    <div>
      <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 flex">
        <img
          src="https://source.unsplash.com/random/300x300/?2"
          alt=""
          className="object-cover object-center w-200 rounded-t-md h-52 mx-20 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              Donec lectus leo
            </h2>
            <p className="dark:text-gray-100">
              Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
            </p>
          </div>
          di
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
          >
            VIEW DETAILS
          </button>
        </div>
      </div>
    </div>
  );
}
