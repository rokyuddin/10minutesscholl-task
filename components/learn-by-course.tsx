import { ProductData, SectionItem } from "@/types/product";

export default function LearnByCourse({ data }: { data: ProductData }) {
  const courses =
    data?.sections?.find((s) => s.type === "pointers") || ({} as SectionItem);

  return (
    <div
      id="pointers"
      className="md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]"
    >
      <div className="mb-6 md:mb-10 relative bg-[#E5E7EB] py-2 md:bg-white md:py-0">
        <div className="pt-6 pb-6 bg-white md:pb-0 md:pt-0">
          <div>
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">
              {courses?.name}
            </h2>
            <div className="rounded-md md:border ">
              <div className="pt-2 md:p-6">
                <ul className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4">
                  {courses?.values?.map((course) => (
                    <li
                      className="flex items-start gap-2 mb-2"
                      key={course?.id}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="mr-1 mt-[2px]"
                        style={{ color: "#6294F8" }}
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        ></path>
                      </svg>
                      <div className="flex-1">{course?.text}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
