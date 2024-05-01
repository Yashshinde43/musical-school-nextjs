import Featuredcourses from "@/components/Featuredcourses";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Instructors from "@/components/Instructors";
import Testimonialcards from "@/components/Testimonialcards";
import Upcomingwebinars from "@/components/Upcomingwebinars";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Herosection />
      <Featuredcourses />
      <Testimonialcards />
      <Upcomingwebinars /> 
      <Instructors />
      <Footer />
    </main>
  );
}
