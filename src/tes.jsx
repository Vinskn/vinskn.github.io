import { useState } from "react";

export default function HoverMenu() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Elemen yang dihover */}
      <button
        onMouseEnter={() => setIsVisible(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Hover Me
      </button>

      {/* Elemen yang muncul saat dihover */}
      {isVisible && (
        <div
          className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-4"
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          <h3 className="text-lg font-semibold">Hello!</h3>
          <p className="text-gray-600">This is a hover menu.</p>
          <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded">
            Click Me
          </button>
        </div>
      )}
    </div>
  );
}
