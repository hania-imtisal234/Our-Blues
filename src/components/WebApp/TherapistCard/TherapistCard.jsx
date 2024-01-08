import { Avatar } from "antd";
import React from "react";

const TherapistCard = ({ therapistInfo }) => {
  const {
    id,
    name,
    title,
    qualification,
    rating,
    review,
    availability,
    experience,
    profile,
  } = therapistInfo;

  return (
    <div className="ml-5">
      <div className="grid sm:grid-cols-8 xs:grid-cols-1 w-full h-[100] bg-yale-blue item-center rounded-lg overflow-hidden">
        <div className="col-span-2 flex justify-center item-center ml-5 my-10 ">
          <Avatar size={64} icon={profile} />
        </div>
        <div className="col-span-6 flex items-center pl-4 m-4 xs:m-0 sm:mt-2">
          <div className="flex-rows md:mx-6 ">
            <h2 className="text-white font-bold md:text-xl xs:text-md">
              {name}
            </h2>
            <h5 className="text-white mb-4 xs:text-md">{title}</h5>
            <div className="flex flex-col gap-4 xs:gap-1 ">
              <div className="flex items-center">
                <h5 className="text-white xs:text-sm font-bold">
                  Qualification:
                </h5>
                <h5 className="text-white xs:text-sm ml-1">{qualification}</h5>
              </div>
              <div className="flex items-center my-4">
                <h5 className="text-white xs:text-sm font-bold">Experience:</h5>
                <h5 className="text-white xs:text-sm ml-1">{experience}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistCard;
