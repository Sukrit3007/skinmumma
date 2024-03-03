import About from "@/components/About";
import Hero from "@/components/Hero";
import OurBlog from "@/components/OurBlog";
import Product from "@/components/Product";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-20 items-center justify-between px-8 lg:px-24 scroll-smooth">
      <Hero/>
      <Product/>
      <About/>
      <OurBlog/>
    </main>
  );
}
