import PropTypes from "prop-types";

const Newsletter = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-27xl-7 text-gray-200 font-rubik ${className}`}
    >
      <div className="w-[1908.7px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1520px] rounded-[13.33px] bg-white flex flex-row flex-wrap items-start justify-between pt-[102.7px] pb-[101.3px] pr-[94px] pl-[89px] box-border max-w-full gap-[20px] z-[1] mq825:pl-[22px] mq825:pr-[23px] mq825:box-border mq1450:pl-11 mq1450:pr-[47px] mq1450:box-border">
          <div className="h-[310.7px] w-[1520px] relative rounded-[13.33px] bg-white hidden max-w-full" />
          <div className="h-[106.7px] w-[495.5px] relative leading-[60px] font-medium flex items-center shrink-0 max-w-full z-[1] mq450:text-9xl mq450:leading-[36px] mq825:text-18xl mq825:leading-[48px]">
            Subscribe Now for News and Updates!
          </div>
          <div className="w-[333.3px] flex flex-col items-start justify-start pt-[12.7px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <div className="h-20 w-[282.4px] absolute !m-[0] bottom-[-33.7px] left-[25.4px] [filter:blur(72px)] rounded-[13.33px] bg-mediumseagreen-300 z-[1]" />
              <button className="cursor-pointer [border:none] pt-[23.3px] px-5 pb-[22.7px] bg-mediumseagreen-100 flex-1 rounded-[13.33px] flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full z-[2] hover:bg-mediumseagreen-200">
                <div className="h-20 w-[333.3px] relative rounded-[13.33px] bg-mediumseagreen-100 hidden max-w-full" />
                <b className="relative text-2xl-3 leading-[34px] font-rubik text-white text-left z-[3]">
                  Subscribe Now
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="self-stretch bg-whitesmoke flex flex-col items-center justify-end pt-[294.7px] pb-[194.9px] pr-[21px] pl-5 box-border max-w-full mt-[-154.7px] text-center text-8xl-8 text-gray-200 font-rubik mq825:pb-[127px] mq825:box-border">
        <div className="w-[1925.3px] h-[750.7px] relative bg-whitesmoke hidden max-w-full" />
        <div className="w-[307px] flex flex-row items-start justify-end py-0 pr-[67px] pl-[72px] box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <img
            className="h-56 flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/untitled-design--20240710t224039764-3@2x.png"
          />
        </div>
        <b className="w-[306px] h-[37px] relative inline-block shrink-0 z-[1] mq450:text-3xl">
          Boycott for Palestine.
        </b>
      </footer>
    </div>
  );
};

Newsletter.propTypes = {
  className: PropTypes.string,
};

export default Newsletter;
