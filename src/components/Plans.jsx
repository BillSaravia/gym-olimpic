import React from "react";
import PlansCard from "../layouts/PlansCard";

const Plans = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center md:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center">Menbresias Gym</h1>

      <div className="flex flex-col md:flex-row justify-between mt-10 gap-8">
        <PlansCard title="Trial Plan" price="0" />
        <PlansCard title="Gold Plan" price="200" />
        <PlansCard title="Platinum Plan" price="300" />
      </div>
    </div>
  );
};

export default Plans;