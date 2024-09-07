import Link from "next/link";
import React from "react";

type Props = {
  selectedSection: string;
  navOptions: string[];
};
const SectionNavigation = ({ selectedSection, navOptions }: Props) => {
  return (
    <div className=' w-full max-h-32 flex justify-center'>
      {navOptions.map((opt) => {
        const specialClass =
          opt.toLowerCase() === selectedSection.toLowerCase()
            ? `bg-primary text-white`
            : "";
        return (
          <Link
            href={`/?tab=${opt}`}
            className={`px-3 py-2 border ` + specialClass}
            key={opt}>
            {opt}
          </Link>
        );
      })}
    </div>
  );
};

export default SectionNavigation;
