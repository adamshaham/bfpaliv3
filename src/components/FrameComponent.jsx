import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  ellipse175,
  chrisKiley,
  unitedStates,
  group1161,
  propFlex,
  propAlignSelf,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  return (
    <div
      className={`flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] text-center text-5xl text-gray-200 font-rubik mq450:flex-wrap ${className}`}
      style={frameDivStyle}
    >
      <div className="w-[242.7px] flex flex-row items-start justify-start gap-[26.6px]">
        <img
          className="h-[66.7px] w-[66.7px] relative rounded-[50%] object-cover z-[1]"
          loading="lazy"
          alt=""
          src={ellipse175}
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[8.6px] px-0 pb-0">
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
            <div className="self-stretch h-6 relative leading-[40px] font-medium flex items-center justify-center shrink-0 z-[1] mq450:text-lgi mq450:leading-[32px]">
              {chrisKiley}
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-3.5 text-left text-lg-7 text-dimgray">
              <div className="flex-1 relative leading-[18.7px] shrink-0 z-[1]">
                {unitedStates}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[44.4px] flex flex-col items-start justify-start pt-[22.2px] px-0 pb-0 box-border text-left text-2xl-3">
        <div className="flex-1 flex flex-row items-start justify-start gap-[13.4px]">
          <div className="relative leading-[21.3px] inline-block min-w-[32px] z-[1] mq450:text-mid mq450:leading-[32px]">
            4.5
          </div>
          <img
            className="h-[21.3px] w-[21.3px] relative z-[1]"
            loading="lazy"
            alt=""
            src={group1161}
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  ellipse175: PropTypes.string,
  chrisKiley: PropTypes.string,
  unitedStates: PropTypes.string,
  group1161: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default FrameComponent;
