"use client"; // Add this directive

import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiData } from "@/features/apiSlice";
import { RootState } from "@/store";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import profil from "../assets/profile.png"; // Default profile image

interface CardComponentProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  email: string;
  date: string;
}

const CardComponent: FC<CardComponentProps> = ({
  image,
  title,
  description,
  email,
  date,
}) => (
  <Card className="rounded-[20px] w-full">
    <Image
      src={image}
      alt={title}
      className="h-48 w-full object-cover rounded-t-[20px]"
      width={400}
      height={200}
    />
    <CardContent className="p-4">
      <CardTitle className="text-xl font-bold">{title}</CardTitle>
      <CardDescription className="mt-2 text-gray-600">
        {description}
      </CardDescription>
      <div className="flex pt-4">
        <Image
          src={profil}
          alt="profile-img"
          className="w-10 h-10 rounded-full bg-green-300 p-2"
        />
        <p className="pt-3 pl-4">Olivia Rhye</p>
      </div>
      <p className="pt-1 text-gray-500">{email}</p>
      <p className="pt-1 text-gray-500">Date: {date ? new Date(date).toLocaleDateString() : "No date available"}</p>
      <div className="pt-4">
        <div className="h-2 bg-green-300 rounded-full relative">
          <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 pt-4">
        <div className="col-span-6">
          <p className="text-left text-xl font-semibold">€8,516.95</p>
        </div>
        <div className="col-span-6">
          <p className="text-right text-xl font-semibold">50%</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Favourites: FC = () => {
  const dispatch = useDispatch();
  const apiData = useSelector((state: RootState) => state.api.data);
  const apiStatus = useSelector((state: RootState) => state.api.status);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30; // Set the number of items per page

  useEffect(() => {
    if (apiStatus === "idle") {
      dispatch(fetchApiData());
    }
  }, [dispatch, apiStatus]);

  // Calculate total pages
  const totalItems = Object.keys(apiData).length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Slice data based on current page
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentData = Object.keys(apiData).slice(startIdx, endIdx).map((key) => {
    const apiInfo = apiData[key]?.versions?.[apiData[key]?.preferred]?.info;

    const image = apiInfo?.["x-logo"]?.url || profil;
    const title = apiInfo?.title || "Default Title";
    const description = apiInfo?.description || "No description available";
    const email = apiInfo?.contact?.email || "No email available";

    const rootDate = apiData[key]?.added || "";
    const versionDate = apiData[key]?.versions?.[apiData[key]?.preferred]?.added || "";
    const date = rootDate || versionDate || "No date available";

    return (
      <CardComponent
        key={key}
        image={image}
        title={title}
        description={description}
        email={email}
        date={date}
      />
    );
  });

  // Pagination Controls
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      <p className="font-bold text-4xl">Favourites</p>
      <p className="text-lg pb-8">Como você pretende ajudar o mundo hoje.</p>
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {currentData}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center pt-8">
        <button
          className={`p-2 bg-gray-200 ${currentPage === 1 ? "opacity-50" : ""}`}
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>Page {currentPage} of {totalPages}</span>

        <button
          className={`p-2 bg-gray-200 ${currentPage === totalPages ? "opacity-50" : ""}`}
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Favourites;
