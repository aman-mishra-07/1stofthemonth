"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { tabs } from "../utils/allRoutes";

const Tabs = () => {
  const path = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  let currentPath = path.split("/").filter((i) => i !== "");
  let basePath = currentPath[0];
  let subPath = currentPath[1];
  const pageTabs = subPath ? tabs[basePath][subPath] : tabs[basePath][basePath];

  const [activeTab, setActiveTab] = useState(pageTabs ? pageTabs[0] : "");

  const handleTab = (tab) => {
    const params = new URLSearchParams(searchParams);
    params.set("tab", activeTab);
    if (tab) {
      params.set("tab", tab);
    } else {
      params.delete("tab");
    }
    replace(`${path}?${params.toString()}`);
  };
  useEffect(() => {
    handleTab(activeTab);
  }, [activeTab]);

  return (
    <div>
      <ul className="flex items-center w-full overflow-x-scroll hidden-scroll">
        {pageTabs?.map((tabName, i) => (
          <li key={i}>
            <button
              type="button"
              className={`px-3 py-4 font-semibold hover:bg-slate-100 border-b-2 transition-all tracking-tight leading-none whitespace-nowrap ease-out  capitalize ${
                tabName === activeTab ? "bg-slate-100" : ""
              }`}
              onClick={() => setActiveTab(pageTabs[i])}
            >
              {tabName?.replace("-", " ")}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
