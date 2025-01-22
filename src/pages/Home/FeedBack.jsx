import React from "react";
import MailIcon from "../../assets/icons/MailIcon";

const NewsletterSubscription = () => {
  return (
    <div className="bg-gray-50 p-6 flex items-center justify-between rounded-lg shadow-md container mx-auto">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <div className="text-purple-500">
          {/* Mail Icon */}
         <MailIcon/>
        </div>
        <div>
          <p className="text-gray-600">Get the latest news and offers</p>
          <h2 className="text-xl font-semibold">Subscribe to our newsletter</h2>
        </div>
      </div>

      {/* Right Section */}
      <form className="flex items-center space-x-2">
        <input
          type="email"
          placeholder="Enter your mail address"
          className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-[#ef4444] text-white font-semibold rounded-lg hover:bg-purple-600"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSubscription;
