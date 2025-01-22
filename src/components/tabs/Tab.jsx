import React, { useState } from "react";

const Tabs = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 rounded-lg text-sm font-medium ${
              activeTab === index
                ? "bg-red-500 text-white min-w-[100px]"
                : "bg-transparent text-red-500 border border-red-500 min-w-[100px]"
            } transition duration-300`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>{children[activeTab]}</div>
    </div>
  );
};

export default Tabs;
