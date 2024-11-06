import { items } from "@/app/(data)/TemplateData";
import React from "react";
import TemplateCard from "./TemplateCard";

function ContentSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
      {items.map((item) => (
        <div key={item.id}>
          <TemplateCard {...item} />
        </div>
      ))}
    </div>
  );
}

export default ContentSection;
