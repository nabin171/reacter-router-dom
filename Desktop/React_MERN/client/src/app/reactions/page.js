"use client";

import React, { useState } from "react";
import { FaFaceAngry } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoIosHappy } from "react-icons/io";
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { Button } from "@nextui-org/react";

const Reaction = () => {
  const [isReactionDivOpen, setIsReactionDivOpen] = useState(false);
  const [reactionType, setIsLiked] = useState(false);

  useState;
  return (
    <div>
      {isReactionDivOpen && (
        <div className="p-2 m-2 shadow-lg flex gap-2 border border-gray-400w-60">
          <FaFaceAngry size={80} color="#D5234C" />
          <IoIosHappy size={80} color="yellow" />
          <AiFillDislike size={80} color="green" />
          <AiFillLike size={80} color="#548DFF" />
          <FaHeart size={80} color="#F55064" />
        </div>
      )}

      <Button
        onClick={() => setIsLiked(!isLiked)}
        onMouseEnter={() => setIsReactionDivOpen(true)}
        className={` m-2  ${
          isLiked ? "text-blue-600" : "text-gray-600"
        } w-60 p-2 bg-white `}
      >
        {" "}
        <AiFillLike size={80} color={isLiked ? "blue" : "gray"} />
        Like
      </Button>

    </div>
  );
};

export default Reaction;
