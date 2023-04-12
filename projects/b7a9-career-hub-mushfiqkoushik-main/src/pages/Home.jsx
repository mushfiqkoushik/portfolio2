import React, { useEffect, useState } from "react";
import Person from "../components/Person";
import Category from "../components/Category";
import Feature from "../components/Feature";

export default function Home() {
  const [category, setCategory] = useState([]);
  const [button, setButton] = useState(false);

  useEffect(() => {
    fetch("cdata.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  const [feature, setFeature] = useState([]);
  const [length, setLength] = useState(4);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setFeature(data));
  }, []);

  return (
    <div>
      <Person></Person>
      <h1 className="text-4xl font-bold text-center mt-5">Job Category List</h1>
      <p className="text-xl text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="flex">
        {category?.map((c) => (
          <Category key={c.id} category={c}></Category>
        ))}
      </div>

      <h1 className="text-4xl font-bold text-center mt-10">Featured Jobs</h1>
      <p className="text-xl text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-2 gy-4">
        {feature?.slice(0, length).map((c) => (
          <Feature key={c.id} feature={c}></Feature>
        ))}
      </div>
      <div className=" text-center mt-5">
        {!button &&
        <button
        onClick={() => {
          setLength(feature.length);
          setButton(true);
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
      >
        SEE ALL JOBS
      </button> }
      </div>
    </div>
  );
}
