import React from "react";
import Sidenav from "./Sidenav";

const SectionLayout = ({ children }) => {
  return (
    <main className="w-full flex flex-col lg:flex-row p-4 md:px-8 py-16">
      <section className="">
        <header className="py-10">
          <h2 className="text-3xl font-bold"></h2>
        </header>
        <div className="flex gap-4">
          {" "}
          <aside className="w-60 h-fit">
            <Sidenav  />
          </aside>
          {children}
        </div>
      </section>
    </main>
  );
};

export default SectionLayout;
