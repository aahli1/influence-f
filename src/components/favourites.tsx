"use client";

import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import profil from "../assets/profile.png";

interface CardComponentProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const CardComponent: FC<CardComponentProps> = ({
  image,
  title,
  description,
}) => (
  <Card className="rounded-[20px] w-full">
    <Image
      src={image}
      alt={title}
      className="h-48 w-full object-cover rounded-t-[20px]"
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

const CardOne = require("../assets/card1.png");
const CardTwo = require("../assets/card2.png");
const CardThree = require("../assets/card3.png");
const CardFour = require("../assets/card4.png");
const CardFive = require("../assets/card5.png");
const CardSix = require("../assets/card6.png");

const Favourites: FC = () => {
  return (
    <div>
      <p className="font-bold text-4xl">Favourites</p>
      <p className="text-lg pb-8">Como você pretende ajudar o mundo hoje.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        <CardComponent
          image={CardOne}
          title="Ms. Saint-Martin Doranyia Pascal"
          description="Hi This is your Miss Teen Carnival 2022 Doranyia Pascal I will be representing Saint Martin..."
        />
        <CardComponent
          image={CardTwo}
          title="Educación en Academia de..."
          description="Hola, mi nombre es Xhaomi Torres soy la madre de Joseph Y. Christian Torres. Joseph es..."
        />
        <CardComponent
          image={CardThree}
          title="Aidez la famille Mimba...."
          description="À la mi-septembre, les enfants MIMBA ont été profondément affectés par la..."
        />
        <CardComponent
          image={CardFour}
          title="Ms. Saint-Martin Doranyia Pascal"
          description="Hi This is your Miss Teen Carnival 2022 Doranyia Pascal I will be representing Saint Martin..."
        />
        <CardComponent
          image={CardFive}
          title="Educación en Academia de..."
          description="Hola, mi nombre es Xhaomi Torres soy la madre de Joseph Y. Christian Torres. Joseph es..."
        />
        <CardComponent
          image={CardSix}
          title="Aidez la famille Mimba...."
          description="À la mi-septembre, les enfants MIMBA ont été profondément affectés par la..."
        />
      </div>
    </div>
  );
};

export default Favourites;
