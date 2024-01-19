import React from "react";

const SeoSection = () => {
  return (
    <div>
      <div className=" relative flex bg-gray-50 ">
        <img
          className=" z-50 w-1/2 py-16 px-16"
          src="camera.png"
          alt="camera"
        />
        <div className=" z-40 w-1/2 flex flex-col justify-center gap-12">
          <h1 className=" text-3xl font-raleway font-bold opacity-90">
            Seo Page Title
          </h1>
          <p className=" pr-32 font-lexend">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            vulputate elementum consectetur. Maecenas tincidunt feugiat
            malesuada. Mauris dapibus velit a sem condimentum fermentum et nec
            arcu. Cras sagittis fringilla hendrerit. Duis dictum id ligula sed
            pulvinar. Maecenas aliquet, elit sed rhoncus dapibus, justo neque
            sollicitudin massa, non tempus lectus lacus quis dui. Vestibulum
            porta ante quis ex iaculis tempus. Suspendisse id faucibus ipsum,
            nec semper quam. Etiam consequat ultrices efficitur. Vivamus varius
            tortor eget commodo volutpat. Morbi eleifend risus id velit semper,
            id laoreet est consectetur. Morbi iaculis ligula et finibus
            fringilla. Etiam cursus fringilla sollicitudin. Proin auctor posuere
            mattis. Suspendisse molestie metus eu sagittis vehicula. Praesent ut
            felis sit amet massa egestas semper. Morbi vitae dapibus sem. Fusce
            dapibus maximus arcu lacinia egestas. Aliquam aliquam ante bibendum
            magna luctus mollis. In eget augue vitae orci scelerisque molestie
            id ac felis. Donec suscipit in magna quis maximus. Maecenas placerat
            volutpat est id placerat. Aliquam faucibus tincidunt nisi eu
            porttitor. Aliquam commodo accumsan porttitor. Donec lacinia sem
            nibh, eu tempus est dictum sed. Sed quis tempus.
          </p>
          <button className=" font-lexend text-xl opacity-90 py-2 px-6 rounded-sm bg-black text-white w-fit">
            {" "}
            See More{" "}
          </button>
        </div>
        <img
          className=" absolute  opacity-15 w-full h-full object-cover"
          src="19742.jpg"
          alt="back"
        />
      </div>
    </div>
  );
};

export default SeoSection;
