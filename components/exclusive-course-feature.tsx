import { ProductData, SectionItem } from "@/types/product";
import Image from "next/image";

export default function ExclusiveCourseFeature({
  data,
}: {
  data: ProductData;
}) {
  const exclusiveFeature =
    data?.sections?.find((s) => s.type === "feature_explanations") ||
    ({} as SectionItem);

  return (
    <div
      id="feature_explanations"
      className="md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]"
    >
      <div className="flex flex-col gap-3 mb-10">
        <h2 className=" text-xl font-semibold leading-[30px] text-black">
          {exclusiveFeature?.name}
        </h2>
        <div className="grid grid-cols-1 px-5 border divide-y rounded-md ">
          {exclusiveFeature?.values?.map((feature) => (
            <div
              key={feature?.id}
              className="flex flex-col items-start justify-between gap-3 py-5 md:flex-row"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-[14px] font-[500px] leading-[30px] text-[#111827] md:text-[16px]">
                  {feature?.title}
                </h2>
                {feature?.checklist?.map((list, _idx) => (
                  <div key={_idx} className="flex flex-row items-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="15"
                      viewBox="0 0 19 15"
                      fill="none"
                      stroke="#6294F8"
                    >
                      <path
                        fill="#6294F8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0.893"
                        d="M18.168 1.508a.792.792 0 01-.006 1.111L6.645 14.143a.77.77 0 01-1.087.005L.77 9.433a.792.792 0 01-.015-1.11.77.77 0 011.098-.016l4.242 4.177L17.07 1.502a.77.77 0 011.098.006z"
                      />
                    </svg>
                    <p className="text-[14px] font-[400px] leading-[24px] text-[#4B5563] md:text-[16px]">
                      {list}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <div className="mb-4 mx-auto max-w-[350px] relative">
                  {feature?.file_url && (
                    <Image
                      src={feature?.file_url ?? ""}
                      alt={feature?.title ?? "Feature Image"}
                      width={250}
                      height={200}
                      style={{ color: "transparent" }}
                      //   fill
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
