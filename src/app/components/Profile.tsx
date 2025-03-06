"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Modal } from "./Modal";

interface ProfileProps {
  userImg: string | undefined | null;
}

export const Profile = ({ userImg }: ProfileProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleProfileClick = () => {
    setModalOpen(!modalOpen);
    console.log("Profile clicked", modalOpen);
  };
  return (
    <div onClick={handleProfileClick} className="position-relative">
      <Image
        src={userImg ? userImg : ""}
        width={40}
        height={40}
        alt="Profile"
        className="rounded-full"
      />
      {modalOpen && (
        <div
          className="position-absolute top-[50] right-[20]"
          style={{ position: "absolute" }}
        >
          <Modal
            isOpen={modalOpen}
            onClose={function (): void {
              throw new Error("Function not implemented.");
            }}
          >
            <div>chldrenx</div>
          </Modal>
        </div>
      )}
    </div>
  );
};
