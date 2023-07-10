import React from "react";

const ErrorResponse = ({ children }) => {
  return <h3 className="text-2xl font-semibold">{children}</h3>;
};

const ErrorCard = ({ status, enterKeyPressed }) => {
  console.log(status);

  return (
    <div className="max-w-xl m-auto h-full flex flex-col items-center justify-center gap-8 p-4">
      <div className="w-full p-4 rounded-lg text-white flex flex-col items-center justify-center gap-10 bg-overlay-section backdrop-blur">
        <input
          type="text"
          placeholder="Enter City..."
          onKeyDown={enterKeyPressed}
          className="border-0.5 border-gray-300 rounded bg-transparent text-white p-2 text-xl font-extralight focus:outline-none"
        />
        {status === 404 ? (
          <ErrorResponse>
            City not found
            Please try for some other city
          </ErrorResponse>
        ) : (
          <ErrorResponse>
            Some unknown error occured
            Please try again after some time
          </ErrorResponse>
        )}
      </div>
    </div>
  );
};

export default ErrorCard;
