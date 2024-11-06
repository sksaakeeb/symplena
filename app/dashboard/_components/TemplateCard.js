import React from "react";
import Link from "next/link";
import Image from "next/image";

function TemplateCard(item) {
  return (
    <div>
      <Link href={"/dashboard/content/" + item?.slug}>
        <div className="p-5 shadow-md rounded-md border bg-purple-200 flex-col gap-3 cursor-pointer hover:scale-105 transition-all">
          <Image src={item.icon} alt="icon" height={50} width={50} />
          <h2 className="font-medium text-lg">{item.name}</h2>
          <p className="text-gray-500 line-clamp-3">{item.desc}</p>
        </div>
      </Link>
    </div>
  );
}

export default TemplateCard;
