import { ProductData, SectionItem } from "@/types/product";
import Image from "next/image";

export default function CourseContentSection({ data }: { data: ProductData }) {
  const features =
    data?.sections?.find((s) => s.type === "features") || ({} as SectionItem);

  return (
    <div
      id="features"
      className="md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]"
    >
      <div className="flex flex-col gap-3">
        <h2 className=" text-xl font-semibold leading-[30px] text-black">
          {features?.name}
        </h2>
        <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
          {features?.values?.map((feature: any) => (
            <div
              key={feature?.id}
              className="flex flex-row items-start gap-3 m-1 "
            >
              <div>
                <div className="mb-4 mx-auto w-[36px] h-[36px] rounded-full relative overflow-hidden">
                  {feature?.icon && (
                    <Image
                      src={feature?.icon ?? ""}
                      alt={feature?.title ?? ""}
                      fill
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <h2 className="text-[18px] font-[500px] leading-[26px] text-white ">
                  {feature?.title}
                </h2>
                <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                  {feature?.subtitle}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
