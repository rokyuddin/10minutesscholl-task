"use client";
import { Search, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { useRouter, useSearchParams } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  const router = useRouter();

  const handleLanguageChange = () => {
    if (lang === "en") {
      router.push("/?lang=bn");
    } else {
      router.push("/?lang=en");
    }
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <button type="button" onClick={onToggle} className="xl:hidden">
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
          >
            <path d="M21 17.9995V19.9995H3V17.9995H21ZM17.4038 3.90332L22 8.49951L17.4038 13.0957L15.9896 11.6815L19.1716 8.49951L15.9896 5.31753L17.4038 3.90332ZM12 10.9995V12.9995H3V10.9995H12ZM12 3.99951V5.99951H3V3.99951H12Z"></path>
          </svg>
          <span className="sr-only">menu</span>
        </button>
        {/* Logo */}
        <div className="items-center gap-2 flex-shrink-0 relative w-[70px] h-[40px] md:h-[50px] md:w-[100px] ">
          <Image
            src={"https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"}
            alt="Logo"
            fill
          />
        </div>

        {/* Search Bar */}
        <div className="hidden lg:block">
          <div className="relative w-[280px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="ফ্রিল্যান্স, কিংবা স্কুল প্রোগ্রাম সাচ করুন"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md text-sm"
            />
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                ক্লাস ৬-১২
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>ক্লাস ৬</DropdownMenuItem>
              <DropdownMenuItem>ক্লাস ৭</DropdownMenuItem>
              <DropdownMenuItem>ক্লাস ৮</DropdownMenuItem>
              <DropdownMenuItem>ক্লাস ৯</DropdownMenuItem>
              <DropdownMenuItem>ক্লাস ১০</DropdownMenuItem>
              <DropdownMenuItem>ক্লাস ১১</DropdownMenuItem>
              <DropdownMenuItem>ক্লাস ১২</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                স্কিলস
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>প্রোগ্রামিং</DropdownMenuItem>
              <DropdownMenuItem>ডিজাইন</DropdownMenuItem>
              <DropdownMenuItem>মার্কেটিং</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            ভর্তি পরীক্ষা
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                অনলাইন ব্যাচ
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>এইচএসসি</DropdownMenuItem>
              <DropdownMenuItem>এসএসসি</DropdownMenuItem>
              <DropdownMenuItem>জেএসসি</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                ইউনিভার্সিটি কোর্স
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>ইঞ্জিনিয়ারিং</DropdownMenuItem>
              <DropdownMenuItem>মেডিকেল</DropdownMenuItem>
              <DropdownMenuItem>বিজনেস</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                আরো
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>বই</DropdownMenuItem>
              <DropdownMenuItem>ব্লগ</DropdownMenuItem>
              <DropdownMenuItem>সাপোর্ট</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {/* Language Selector */}
          <div
            onClick={() => handleLanguageChange()}
            className="flex items-center gap-1 text-sm text-gray-600"
          >
            <span className="font-medium">EN</span>
          </div>

          {/* Phone Number */}
          <div className="flex items-center gap-1 text-green-600">
            <Phone className="h-4 w-4" />
            <span className="font-medium text-sm">16910</span>
          </div>

          {/* Login Button */}
          <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium">
            লগ-ইন
          </Button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side={"left"}>
          <SheetHeader>
            <div className="items-center gap-2 flex-shrink-0 relative w-[70px] h-[40px] md:h-[50px] md:w-[100px] ">
              <Image
                src={
                  "https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                }
                alt="Logo"
                fill
              />
            </div>
          </SheetHeader>
          <nav className="flex flex-col gap-4 mt-4">
            <WrapperDiv>
              <Heading>ক্লাস ৬ - ১২</Heading>
              <ListWrapper>
                <List>ক্লাস ৬</List>
                <List>ক্লাস ৭</List>
                <List>ক্লাস ৮</List>
                <List>ক্লাস ৯</List>
                <List>ক্লাস ১০</List>
                <List>ক্লাস ১১</List>
                <List>ক্লাস ১২</List>
              </ListWrapper>
            </WrapperDiv>

            <WrapperDiv>
              <Heading>Skills</Heading>
              <ListWrapper>
                <List>প্রোগ্রামিং</List>
                <List>ডিজাইন</List>
                <List>মার্কেটিং</List>
              </ListWrapper>
            </WrapperDiv>

            <List>ভর্তি পরীক্ষা</List>

            <WrapperDiv>
              <Heading>অনলাইন ব্যাচ</Heading>
              <ListWrapper>
                <List>এইচএসসি</List>
                <List>এসএসসি</List>
                <List>জেএসসি</List>
              </ListWrapper>
            </WrapperDiv>

            <WrapperDiv>
              <Heading> ইউনিভার্সিটি কোর্স</Heading>
              <ListWrapper>
                <List>ইঞ্জিনিয়ারিং</List>
                <List>মেডিকেল</List>
                <List>বিজনেস</List>
              </ListWrapper>
            </WrapperDiv>
            <WrapperDiv>
              <Heading>আরো</Heading>
              <ListWrapper>
                <List>বই</List>
                <List>ব্লগ</List>
                <List>সাপোর্ট</List>
              </ListWrapper>
            </WrapperDiv>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function WrapperDiv({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-2">{children}</div>;
}

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className=" font-semibold text-gray-800">{children}</h2>;
}

function ListWrapper({ children }: { children: React.ReactNode }) {
  return <ul className="pl-4 space-y-1">{children}</ul>;
}

function List({ children }: { children: React.ReactNode }) {
  return <li className="text-gray-600 list-none">{children}</li>;
}
