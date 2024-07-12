import Header from "../components/Header";
import FrameComponent1 from "../components/FrameComponent1";
import TestimonialsContent from "../components/TestimonialsContent";
import Newsletter from "../components/Newsletter";

const Landingpage = () => {
  return (
    <div className="w-full relative bg-antiquewhite overflow-hidden flex flex-col items-end justify-start pt-[54.7px] px-0 pb-0 box-border gap-[146.7px] leading-[normal] tracking-[normal] lg:gap-[73px] mq825:gap-[37px]">
      <Header />
      <FrameComponent1 />
      <section className="self-stretch [background:linear-gradient(180deg,_#f8f8f8,_rgba(248,_248,_248,_0))] flex flex-row items-start justify-start py-0 px-0 box-border max-w-full">
        <div className="self-stretch w-[1920px] relative [background:linear-gradient(180deg,_#f8f8f8,_rgba(248,_248,_248,_0))] hidden max-w-full" />
        <div className="flex-1 overflow-hidden flex flex-col items-end justify-start pt-[196px] pb-[0.1px] pr-px pl-0 box-border gap-[86.7px] shrink-0 max-w-full z-[1] lg:gap-[43px] lg:pt-[83px] lg:box-border mq825:gap-[22px] mq825:pt-[54px] mq825:box-border mq1450:pt-[127px] mq1450:pb-5 mq1450:box-border">
          <TestimonialsContent />
          <Newsletter />
        </div>
      </section>
    </div>
  );
};

export default Landingpage;
