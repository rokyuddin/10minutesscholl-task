import { ProductData } from "@/types/product";
import Image from "next/image";

export default function CourseItemChecklist({ data }: { data: ProductData }) {
  return (
    <div className="p-4 space-y-4">
      <div className="flex flex-col gap-2">
        <p className="inline-block text-2xl font-semibold">৳1000</p>
        <button className=" bg-green-600 py-3 hover:bg-green-700 whitespace-nowrap button primary text-center md:w-full centered-buttons">
          Enroll
        </button>
      </div>

      <div className="">
        <div className="grid py-2 md:p-4">
          <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>

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
                <h2 className="mb-0 inline-block pl-4 tracking-[0.005em] text-gray-800">
                  {item?.text}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
