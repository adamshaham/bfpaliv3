import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1820.7px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-27xl-7 text-dimgray font-rubik ${className}`}
    >
      <div className="w-[1608px] flex flex-row items-end justify-between max-w-full gap-[20px] mq1450:flex-wrap mq1450:justify-center">
        <div className="h-[447.5px] w-[563.8px] flex flex-col items-start justify-end pt-0 px-0 pb-[25.2px] box-border min-w-[563.8px] max-w-full mq825:min-w-full mq1450:flex-1">
          <div className="self-stretch flex-1 relative max-w-full max-h-full flex items-center justify-center">
            <img
              className="self-stretch flex-1 overflow-hidden object-contain absolute left-[0px] top-[-14px] w-full h-full [transform:scale(1.064)] mq1450:self-stretch mq1450:w-auto"
              loading="lazy"
              alt=""
              src="/illustration-2@2x.png"
            />
          </div>
        </div>
        <div className="w-[818.4px] flex flex-col items-start justify-start gap-[19.4px] min-w-[818.4px] max-w-full lg:min-w-full mq1450:flex-1">
          <div className="w-[718.7px] relative leading-[66.67px] font-medium text-gray-200 inline-block max-w-full shrink-0 mq450:text-9xl mq450:leading-[40px] mq825:text-18xl mq825:leading-[53px]">
            <p className="[margin-block-start:0] [margin-block-end:6.67px]">{`How to Use the Boycott `}</p>
            <p className="m-0">Chrome Extension</p>
          </div>
          <div className="w-[570.5px] flex flex-row items-start justify-start pt-0 px-0 pb-[15.8px] box-border max-w-full shrink-0 text-2xl-3">
            <div className="flex-1 relative leading-[40px] inline-block max-w-full mq450:text-mid mq450:leading-[32px]">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full shrink-0 text-lg-7">
            <div className="flex-1 flex flex-col items-start justify-start gap-[17.4px] max-w-full">
              <div className="flex flex-col items-start justify-start gap-[13.4px] max-w-full">
                <div className="flex flex-row items-start justify-start gap-[16px] max-w-full mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[13.4px] px-0 pb-0">
                    <img
                      className="w-8 h-8 relative"
                      loading="lazy"
                      alt=""
                      src="/group-1211.svg"
                    />
                  </div>
                  <button className="cursor-pointer py-4 pr-[11px] pl-3.5 bg-red-200 rounded-[13.33px] box-border flex flex-row items-start justify-start whitespace-nowrap max-w-full border-[1.3px] border-solid border-crimson-200 hover:bg-red-100 hover:box-border hover:border-[1.3px] hover:border-solid hover:border-crimson-100">
                    <div className="h-[60px] w-[374.7px] relative rounded-[13.33px] bg-red-200 box-border hidden max-w-full border-[1.3px] border-solid border-crimson-200" />
                    <div className="relative text-2xl-3 font-medium font-rubik text-white text-left z-[1]">
                      Download Free Chrome Extension
                    </div>
                  </button>
                </div>
                <div className="flex flex-col items-start justify-start gap-[17.3px] max-w-full">
                  <div className="flex flex-row items-start justify-start gap-[16px] max-w-full mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                      <img
                        className="w-8 h-8 relative"
                        loading="lazy"
                        alt=""
                        src="/group-1211.svg"
                      />
                    </div>
                    <div className="relative leading-[41.3px]">
                      Click the "Add to Chrome" button.
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[16px] max-w-full mq825:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[6.7px] px-0 pb-0">
                      <img
                        className="w-8 h-8 relative"
                        loading="lazy"
                        alt=""
                        src="/group-1121.svg"
                      />
                    </div>
                    <div className="relative leading-[41.3px] inline-block max-w-full">
                      Pin Extension. Click the puzzle piece icon in the
                      top-right corner of your browser.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full mq825:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[5.3px] px-0 pb-0">
                  <img
                    className="w-8 h-8 relative"
                    loading="lazy"
                    alt=""
                    src="/group-1122.svg"
                  />
                </div>
                <div className="relative leading-[40px] inline-block max-w-full">
                  Start browsing the web and watch companies that dont align
                  with your values, blur away
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
