import { ProductData, ValueType } from "@/types/product";
import Image from "next/image";

export default function InstructorSection({ data }: { data: ProductData }) {
  const instructor = data?.sections?.find((s) => s.type === "instructors");
  const instructorData: ValueType = instructor?.values[0] || ({} as ValueType);

  return (
    <div
      id="instructors"
      className="md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]"
    >
      <div className="mb-7 xs:bg-[#EEF2F4] xs:pt-2">
        <div className="pt-4 pb-2 bg-white">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            {instructor?.name}
          </h2>
          <div className="flex items-center md:rounded-md md:border md:p-5">
            <div>
              <div className="w-[73px] h-[73px] rounded-[50%] relative overflow-hidden">
                {instructorData && (
                  <Image
                    src={instructorData?.image}
                    alt={`Instructor ${instructorData?.name}`}
                    fill
                  />
                )}
              </div>
            </div>
            <div className="flex-1 ml-4">
              <h3 className="text-lg">
                {instructorData?.name || "Instructor Name"}
              </h3>
              <div
                className="text-sm"
                dangerouslySetInnerHTML={{
                  __html: instructorData?.description,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
