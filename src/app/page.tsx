import HeroSection from "@/components/hero-section";
import FooterSection from "@/components/footer";
import ContentSection from "@/components/content";
import ZigZagDivider from "@/components/ui/border";
import TeamSection from "@/components/team";
import FAQs from "@/components/faq";
import { Gallery6 } from "@/components/gallery";
import CallToAction from "@/components/call-to-action";

export default function Home(){
  return(
    <>
    <section>
      <HeroSection/>
    </section>

    <section>
      <ZigZagDivider />
    </section>

    <section>
      <ContentSection/>
    </section>

    <section>
      <ZigZagDivider />
    </section>

    <section>
      <Gallery6/>
    </section>

    <section>
      <ZigZagDivider />
    </section>

    <section>
      <TeamSection />
    </section>

    <section>
      <ZigZagDivider />
    </section>

    <section>
      <FAQs/>
    </section>

    <section>
      <ZigZagDivider />
    </section>

    <section>
      <CallToAction />
    </section>

    <section>
      <ZigZagDivider />
    </section>

    <section>
      <FooterSection/>
    </section>
    </>
  )
}