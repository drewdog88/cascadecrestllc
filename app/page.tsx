import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { ImageGallery } from "@/components/ImageGallery";
import { Neighborhood } from "@/components/Neighborhood";
import { SiteFooter } from "@/components/SiteFooter";
import { Transportation } from "@/components/Transportation";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Neighborhood />
        <Transportation />
        <ImageGallery />
        <About />
      </main>
      <SiteFooter />
    </>
  );
}
