import type { Metadata } from "next";
import type { ProductData } from "@/types/product";
import HeroSection from "@/components/hero-section";
import InstructorSection from "@/components/instructor-section";
import CourseContentSection from "@/components/course-content-section";
import LearnByCourse from "@/components/learn-by-course";
import CourseDetails from "@/components/course-details";
import ExclusiveCourseFeature from "@/components/exclusive-course-feature";
import Navbar from "@/components/navbar";
import CourseItemChecklist from "@/components/course-item-checklist";

async function getProductData(lang = "en"): Promise<ProductData> {
  const response = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
      },
      next: { revalidate: 3600 }, // ISR: revalidate every hour
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product data");
  }

  const data = await response.json();
  return data.data;
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await getProductData("en");

    return {
      title: data.seo?.title,
      description: data.seo?.description,
      keywords: data.seo?.keywords,
      openGraph: {
        title: data.title,
        description: data.description,
        images: data.media?.find((m) => m.resource_type === "image")
          ?.resource_value
          ? [
              data.media.find((m) => m.resource_type === "image")!
                .resource_value,
            ]
          : [],
      },
    };
  } catch (error) {
    return {
      title: "IELTS Course by Munzereen Shahid",
      description: "Complete IELTS preparation course",
    };
  }
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const lang = (await searchParams)?.lang || "en";

  try {
    const data = await getProductData(lang);

    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <HeroSection data={data} />
        <div className="block md:hidden">
          <CourseItemChecklist data={data} />
        </div>
        <div className="md:max-w-6xl mx-auto p-4 md:p-0">
          <InstructorSection data={data} />
          <CourseContentSection data={data} />
          <LearnByCourse data={data} />
          <ExclusiveCourseFeature data={data} />
          <CourseDetails data={data} />
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Failed to load course data
          </h1>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      </div>
    );
  }
}
