"use client";
import type { ProductData } from "@/types/product";
import Image from "next/image";
import { useMemo, useState } from "react";

interface HeroSectionProps {
  data: ProductData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const [playVideo, setPlayVideo] = useState(false);

  const currentMedia = useMemo(() => {
    return data?.media[currentMediaIndex];
  }, [data?.media, currentMediaIndex]);

  const handleCurrentMediaIndex = (index: number) => {
    if (index < 0) {
      setCurrentMediaIndex(data?.media.length - 1);
    } else if (index > data?.media.length - 1) {
      setCurrentMediaIndex(0);
    } else {
      setCurrentMediaIndex(index);
    }
    setPlayVideo(false);
  };

  return (
    <div
      id="skills-landing"
      className="min-h-[300px] md:min-h-[300px]"
      style={{
        backgroundImage:
          'url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="md:max-w-6xl mx-auto relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px]">
        <div className="flex flex-col justify-center flex-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)] px-4">
          <div className="block mt-4 md:mt-0 md:hidden mb-4">
            <div className="relative overflow-hidden bg-black youtube-video aspect-video">
              <div className="relative">
                <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                  >
                    <circle
                      cx="28"
                      cy="28"
                      r="28"
                      fill="#fff"
                      fillOpacity="0.5"
                    ></circle>
                    <circle cx="27.999" cy="28" r="25.415" fill="#fff"></circle>
                    <path
                      fill="#1CAB55"
                      d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
                    />
                  </svg>
                </span>
                <div className="w-[867px] h-[480px] relative">
                  <Image
                    src={
                      currentMedia?.resource_type === "image"
                        ? currentMedia?.resource_value
                        : currentMedia?.thumbnail_url
                    }
                    alt={currentMedia?.name ?? "Media Image"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div className="relative">
                <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer"></span>
              </div>
            </div>

            <div
              className="flex gap-4 p-4 overflow-x-auto  "
              style={{
                scrollbarWidth: "none",
              }}
            >
              {data?.media
                ?.filter((item) => item.name === "preview_gallery")
                ?.map((media, index) => (
                  <div key={index} onClick={() => setCurrentMediaIndex(index)}>
                    <div
                      className={`relative  w-[55px] rounded cursor-pointer ${
                        currentMediaIndex === index
                          ? "border-2 border-green-500"
                          : ""
                      }`}
                    >
                      <div
                        className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
                        style={{ fontSize: "0px", opacity: "1" }}
                      >
                        <Image
                          src={
                            media?.resource_type === "image"
                              ? media?.resource_value
                              : media?.thumbnail_url
                          }
                          alt={media?.name ?? "Media Thumbnail"}
                          width={86}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <h1 className="text-white mb-2 text-[21px] font-semibold  md:text-4xl">
            {data?.title}
          </h1>
          <div className="mb-2">
            <button className="flex flex-row flex-wrap gap-2 text-white">
              <span className="inline-block">
                <img
                  className="md:w-[130px] w-[100px]"
                  src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
                  alt="Course Thumbnail"
                />
              </span>
              <span className="inline-block text-sm md:text-base">
                (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
              </span>
            </button>
          </div>
          <div>
            <div
              className="text-gray-400 "
              style={{ overflow: "hidden", height: "auto;mask-image:none" }}
            >
              <div dangerouslySetInnerHTML={{ __html: data?.description }} />
            </div>
          </div>
        </div>

        <section className="lg:block hidden w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute rounded-md overflow-hidden">
          <div className="md:sticky md:top-[112px] ">
            <div className=" md:border">
              <div className="hidden p-1 md:block">
                <div className="relative overflow-hidden bg-black youtube-video aspect-video">
                  <div className="relative">
                    <div
                      onClick={() =>
                        handleCurrentMediaIndex(currentMediaIndex - 1)
                      }
                      className="absolute w-[25px] h-[25px] bg-white rounded-full left-4 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </div>
                    <div className="w-[867px] h-[480px] relative">
                      {playVideo ? (
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${currentMedia?.resource_value}?rel=0&autoplay=1`}
                          title="YouTube video player"
                          allowFullScreen
                          style={{
                            color: "transparent",
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 1,
                            aspectRatio: "16 / 9",
                          }}
                        ></iframe>
                      ) : (
                        <Image
                          src={
                            currentMedia?.resource_type === "image"
                              ? currentMedia?.resource_value
                              : currentMedia?.thumbnail_url
                          }
                          alt={currentMedia?.name ?? "Media Image"}
                          style={{ color: "transparent" }}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      )}
                    </div>
                    <div
                      onClick={() =>
                        handleCurrentMediaIndex(currentMediaIndex + 1)
                      }
                      className="absolute w-[25px] h-[25px] bg-white rounded-full right-4  top-1/2 z-[2] translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#fff"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                  {currentMedia?.resource_type === "video" && (
                    <div
                      onClick={() => setPlayVideo(!playVideo)}
                      className="absolute  left-1/2 top-1/2 -translate-y-1/2 z-[4] h-[35px] w-[35px] flex items-center justify-center  border bg-white rounded-full cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  className="flex gap-4 p-4 overflow-x-auto  "
                  style={{
                    scrollbarWidth: "none",
                  }}
                >
                  {data?.media
                    ?.filter((item) => item.name === "preview_gallery")
                    ?.map((media, index) => (
                      <div
                        key={index}
                        onClick={() => setCurrentMediaIndex(index)}
                      >
                        <div
                          className={`relative  w-[55px] rounded cursor-pointer ${
                            currentMediaIndex === index
                              ? "border-2 border-green-500"
                              : ""
                          }`}
                        >
                          <div
                            className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
                            style={{ fontSize: "0px", opacity: "1" }}
                          >
                            <Image
                              src={
                                media?.resource_type === "image"
                                  ? media?.resource_value
                                  : media?.thumbnail_url
                              }
                              alt={media?.name ?? "Media Thumbnail"}
                              width={86}
                              height={50}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="flex flex-col p-4 gap-2">
                <p className="inline-block text-2xl font-semibold">৳1000</p>
                <button className=" bg-green-600 py-3 hover:bg-green-700 whitespace-nowrap button primary text-center md:w-full centered-buttons">
                  Enroll
                </button>
              </div>

              <div className="hidden md:block">
                <div className="grid py-2 md:p-4">
                  <p className="mb-4 text-xl font-semibold">
                    এই কোর্সে যা থাকছে
                  </p>

                  {data?.checklist?.map((item) => (
                    <div key={item?.id}>
                      <div className="flex items-center mb-3 leading-5">
                        <div className="inline-block h-[20px] w-[20px]">
                          <Image
                            src={item?.icon}
                            alt={item?.text}
                            width={20}
                            height={20}
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <h2 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                          {item?.text}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
