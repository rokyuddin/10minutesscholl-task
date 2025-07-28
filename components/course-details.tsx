import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductData, SectionItem } from "@/types/product";

export default function CourseDetails({ data }: { data: ProductData }) {
  const details =
    data?.sections?.find((s) => s.type === "about") || ({} as SectionItem);

  return (
    <div
      id="about"
      className="md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]"
    >
      <div className="mb-6 md:mb-10 mt-4 max-w-[900px] md:mt-[42px] ">
        <div className="mt-10 md:mt-0">
          <h2 className="text-xl font-semibold md:mb-4 md:text-2xl">
            {details?.name}
          </h2>
          <div className="rounded-lg py-2 md:border md:px-5 ">
            <Accordion type="single" collapsible className="w-full">
              {details?.values?.map((detail) => (
                <AccordionItem key={detail?.id} value={String(detail?.id)}>
                  <AccordionTrigger>
                    <div
                      dangerouslySetInnerHTML={{ __html: detail?.title ?? "" }}
                      className="text-gray-800"
                    />
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-0 pb-2 text-gray-600 text-base">
                      <div className="prose prose-ul:pl-4 ">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: detail?.description,
                          }}
                          className="space-y-4 "
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
