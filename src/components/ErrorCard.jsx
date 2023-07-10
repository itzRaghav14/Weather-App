import React from "react";

const ErrorResponse = ({ children }) => {
  return <div className="text-2xl font-semibold text-center">
    {children}
    </div>;
};

const ErrorCard = ({ status, enterKeyPressed }) => {
  return (
    <div className="max-w-xl m-auto h-full flex flex-col items-center justify-center gap-8 p-4">
      <div className="w-full p-8 rounded-lg text-white flex flex-col items-center justify-center gap-8 bg-overlay-section backdrop-blur">
        <input
          type="text"
          placeholder="Enter City..."
          onKeyDown={enterKeyPressed}
          className="border-0.5 border-gray-300 rounded bg-transparent text-white p-2 text-xl font-extralight focus:outline-none"
        />
        {status === 404 ? (
          <ErrorResponse>
            <p>City not found</p>
            <p>Please try for some other city</p>
          </ErrorResponse>
        ) : (
          <ErrorResponse>
            <p>Some unknown error occured</p>
            <p>Please try again after some time</p>
          </ErrorResponse>
        )}
      </div>
    </div>
  );
};

export default ErrorCard;
