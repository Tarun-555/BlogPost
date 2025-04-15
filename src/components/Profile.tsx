"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Modal } from "./Modal";
import { signOut } from "next-auth/react";
import * as Icon from "react-feather";

interface ProfileProps {
  user: User;
}

type User = {
  name?: string | null | undefined;
  image?: string | null | undefined;
  email?: string | null | undefined;
};

export const Profile = ({ user }: ProfileProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleProfileClick = () => {
    setModalOpen(!modalOpen);
    // console.log("Profile clicked", modalOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      // console.log("Setting modal open to false");
      setModalOpen(false);
    }
  };

  useEffect(() => {
    if (modalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalOpen]);

  const handleLogout = async () => {
    console.log("Logging out");
    await signOut();
  };

  return (
    <div className="position-relative">
      <Image
        onClick={handleProfileClick}
        src={user?.image ? user.image : ""}
        width={40}
        height={40}
        alt="Profile"
        className="rounded-full cursor-pointer"
      />
      {modalOpen && (
        <div
          className="position-absolute top-[50] right-[20] z-20"
          style={{ position: "absolute", zIndex: 20 }}
          ref={modalRef}
        >
          <Modal
            isOpen={modalOpen}
            onClose={function (): void {
              throw new Error("Function not implemented.");
            }}
          >
            <div className="flex flex-col text-black gap-2 text-lg font-medium pl-2">
              <Image
                src={user?.image ? user.image : ""}
                width={40}
                height={40}
                alt="Profile"
                className="w-[90%] self-center h-[60px] object-contain"
              />
              <div className="flex items-center text-sm text-[#4a4848]">
                <span className="mr-2 ">
                  <Icon.User size={16} />
                </span>
                {user?.name}
              </div>
              <div className="flex items-center text-sm  text-[#4a4848]">
                <span className="mr-2">
                  <Icon.Mail size={16} />
                </span>
                {user?.email}
              </div>
              <button
                className="bg-black text-white px-2 py-1 w-[94%] rounded-md mt-2.5 cursor-pointer hover:bg-black-200"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};
