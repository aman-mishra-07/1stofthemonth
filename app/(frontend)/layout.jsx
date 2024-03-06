import React from "react";
import Sidenav from "../ui/Sidenav";
import Tabs from "../ui/Tabs";
import SectionHeading from "../ui/SectionHeading";

const layout = ({ children }) => {
  return (
    <main className="w-full p-4 md:mt-4 py-8">
      <section>
        <header className="py-2 mt-10 md:mt-0 md:py-8">
          <SectionHeading />
        </header>
        <div className="flex gap-4 flex-col md:flex-row">
          <aside className="w-60 h-fit">
            <Sidenav />
          </aside>
          <div className="">
            <Tabs />
            {children}
          </div>
        </div>
      </section>
    </main>
  );
};

export default layout;
