"use client";

import React from "react";
import { usePathname } from "next/navigation";
import EditBookForm from "@/components/ui/EditBookForm";

const Editbooks: React.FC = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  return <div>{id ? <EditBookForm id={id} /> : <p>Loading...</p>}</div>;
};

export default Editbooks;
