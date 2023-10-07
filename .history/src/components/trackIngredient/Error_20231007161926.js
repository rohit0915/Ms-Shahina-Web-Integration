import React from "react";

const Error = ({ setError ,}) => {
  return (
    <div
      onClick={() => setError(false)}
      className=" fixed flex justify-center items-center top-0 w-full h-screen z-[1000] bg-black bg-opacity-5 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[34rem] h-60 bg-secondary"
      >
        <div
          onClick={() => setError(false)}
          className="w-5 h-5 absolute top-4 cursor-pointer right-8"
        >
          <img
            className="w-full h-full"
            src="https://s3-alpha-sig.figma.com/img/9848/6733/364df84295fff2531efd3873344303af?Expires=1696204800&Signature=l-Anne9UfNcMTY20KJefREjHSDh36zqylPzNHFsqFsjvuV7dNyb2QiMZLgqZU0R43Gv4Vgw2GDNElQy1HfBcBvdXxf4ltoLCUg5ZfGu4h9pP1J1s2QA0XjC2RZynRA01u4WSYEUP3KDwsMwYbZL78HzPmQM5uFb9Am3BuJL73xAXeB5Pcx5xIiAYc4O5OEmWf-u9sRpR5~gi959eEXcwcXTO-S11zJppIl4kDZC2KhE6jIkcPydXhlCvuNTI3D37D9KfUcwfpoPoFYUgnfEA16fYh19yoRlC~KJh8dAAWP7znax4~pR16zJhkApqFDueyXBkA2Np4~01LbeJZV5Kqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="close"
          />
        </div>
        <div className="flex pl-10 pr-24 py-14 items-start gap-4 flex-shrink-0 w-full h-full">
          <img
            className="w-12 h-12"
            src="/Image/101.png"
            alt=""
          />
          <div className=" space-y-10">
            <h3 className="text-3xl font-semibold text-primary">
              Unfortunately, there is a comedogenic ingredient.
            </h3>
            <p className="text-xs">
              {" "}
              Comedogenic ingredients are listed in red.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
