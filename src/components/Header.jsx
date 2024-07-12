import UserStatsCard from "./UserStatsCard";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <section
      className={`w-[1871.7px] flex flex-row items-start justify-center pt-0 px-5 pb-[53.9px] box-border max-w-full text-left text-14xl-3 text-gray-200 font-rubik lg:pb-[35px] lg:box-border mq825:pb-[23px] mq825:box-border ${className}`}
    >
      <div className="w-[1581.4px] flex flex-col items-start justify-start gap-[136.7px] max-w-full mq450:gap-[17px] mq825:gap-[34px] mq1450:gap-[68px]">
        <header className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full shrink-0 text-left text-64xl-5 text-tomato-200 font-rubik">
          <div className="w-[766.7px] flex flex-col items-start justify-start gap-[71px] max-w-full mq450:gap-[18px] mq825:gap-[35px]">
            <div className="w-[364px] flex flex-col items-start justify-start pt-0 px-0 pb-[37px] box-border max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
                  <b className="h-[113.3px] flex-1 relative inline-block shrink-0 max-w-full">
                    <span>B</span>
                    <span className="text-gray-200">F</span>
                    <span className="text-mediumseagreen-100 whitespace-pre-wrap">
                      P   LI
                    </span>
                  </b>
                  <img
                    className="h-[84px] w-[64.1px] absolute !m-[0] top-[4px] right-[137.2px] object-contain z-[4]"
                    loading="lazy"
                    alt=""
                    src="/untitled-design--20240710t224039764-1@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-1.5 mt-[-36px] text-8xl-8 text-gray-200">
                <div className="flex flex-row items-start justify-start">
                  <b className="relative whitespace-nowrap z-[1]">
                    Boycott for Palestine.
                  </b>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1.5 box-border max-w-full text-47xl-7 text-gray-200">
              <div className="flex-1 flex flex-col items-start justify-start gap-[13px] max-w-full">
                <div className="self-stretch relative leading-[93.33px] font-medium">
                  <p className="m-0">Take a Stand.</p>
                  <p className="m-0">Boycott with Purpose.</p>
                </div>
                <div className="w-[740px] relative text-4xl-6 leading-[44.31px] font-semibold text-dimgray inline-block max-w-full">
                  Join the movement to make a difference by boycotting websites
                  that don't align with your values.
                </div>
              </div>
            </div>
            <div className="w-[408.7px] flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
                <div className="h-[96.6px] w-[341.2px] absolute !m-[0] bottom-[-41.7px] left-[25.4px] [filter:blur(86.98px)] rounded-[16.11px] bg-tomato-300" />
                <button className="cursor-pointer [border:none] pt-6 px-[21px] pb-[22px] bg-tomato-200 flex-1 rounded-[13.33px] flex flex-row items-start justify-start box-border whitespace-nowrap max-w-full z-[1] hover:bg-tomato-100">
                  <div className="h-20 w-[396px] relative rounded-[13.33px] bg-tomato-200 hidden max-w-full" />
                  <b className="relative text-2xl-3 leading-[34px] font-rubik text-white text-left z-[2]">
                    DOWNLOAD CHROME EXTENSION
                  </b>
                </button>
              </div>
            </div>
          </div>
          <div className="w-[520px] flex flex-col items-start justify-start pt-[26.7px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[17.3px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                <div className="flex flex-row items-start justify-start gap-[52px] shrink-0 max-w-full mq825:gap-[26px]">
                  <button className="cursor-pointer pt-[15px] pb-4 pr-[27px] pl-7 bg-mediumseagreen-100 rounded-[66.67px] flex flex-row items-start justify-start border-[1.3px] border-solid border-white hover:bg-mediumseagreen-200 hover:box-border hover:border-[1.3px] hover:border-solid hover:border-gainsboro-100">
                    <div className="h-[60px] w-[200px] relative rounded-[66.67px] bg-mediumseagreen-100 box-border hidden border-[1.3px] border-solid border-white" />
                    <a className="[text-decoration:none] relative text-2xl-3 font-medium font-rubik text-white text-left z-[1]">
                      How-to-Video
                    </a>
                  </button>
                  <button className="cursor-pointer pt-[15px] pb-4 pr-4 pl-[17px] bg-[transparent] rounded-[66.67px] flex flex-row items-start justify-start border-[1.3px] border-solid border-crimson-200 hover:bg-crimson-300 hover:box-border hover:border-[1.3px] hover:border-solid hover:border-crimson-100">
                    <div className="h-[60px] w-[222.7px] relative rounded-[66.67px] box-border hidden border-[1.3px] border-solid border-crimson-200" />
                    <a className="[text-decoration:none] relative text-2xl-3 font-medium font-rubik text-crimson-200 text-left whitespace-nowrap z-[1]">
                      Chrome Extension
                    </a>
                  </button>
                </div>
              </div>
              <div className="w-[401.3px] flex flex-row items-start justify-start shrink-0 max-w-full">
                <div className="h-[590.7px] flex-1 relative max-w-full">
                  <div className="absolute top-[278.7px] left-[40px] [filter:blur(140.93px)] rounded-[50%] bg-gray-100 w-[269.3px] h-[312px]" />
                  <img
                    className="absolute top-[0px] left-[0px] w-[401.3px] h-[526.2px] object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/untitled-design--20240710t224039764-2@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="w-[1532.7px] flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
            <textarea
              className="[border:none] bg-gray-300 h-[252.3px] w-[1425.1px] [outline:none] absolute !m-[0] bottom-[-56px] left-[47.4px] [filter:blur(152px)] rounded-[13.33px]"
              rows={13}
              cols={71}
            />
            <div className="flex-1 rounded-[13.33px] bg-white flex flex-row items-start justify-between py-[90px] pr-[98px] pl-[121px] box-border max-w-full gap-[20px] z-[2] mq825:pl-[30px] mq825:pr-6 mq825:box-border mq1450:flex-wrap mq1450:pl-[60px] mq1450:pr-[49px] mq1450:box-border">
              <img
                className="h-[167.4px] w-[2.7px] relative hidden"
                alt=""
                src="/vector-14.svg"
              />
              <img
                className="h-[167.4px] w-[2.7px] relative hidden"
                alt=""
                src="/vector-15.svg"
              />
              <div className="h-[266.7px] w-[1520px] relative rounded-[13.33px] bg-white hidden max-w-full" />
              <UserStatsCard
                group1216="/group-1216.svg"
                userStatsCardNumber="90+"
                users="Users"
              />
              <div className="w-[784.7px] flex flex-row items-start justify-start gap-[206.7px] max-w-full mq450:gap-[52px] mq825:flex-wrap mq825:gap-[103px]">
                <UserStatsCard
                  group1216="/group-1215.svg"
                  userStatsCardNumber="1000+"
                  users="Blocked Websites"
                  propWidth="unset"
                  propFlex="1"
                  propMinWidth="220px"
                />
                <div className="w-60 flex flex-row items-start justify-start gap-[48.7px]">
                  <div className="flex flex-col items-start justify-start pt-[6.7px] px-0 pb-0">
                    <img
                      className="w-[73.3px] h-[73.3px] relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/iconserver.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[6.7px]">
                    <b className="relative leading-[40px] inline-block min-w-[108px] z-[1] mq450:text-xl mq450:leading-[24px] mq825:text-8xl mq825:leading-[32px]">
                      Active
                    </b>
                    <div className="relative text-7xl-7 leading-[40px] text-dimgray inline-block min-w-[118px] z-[1] mq450:text-2xl mq450:leading-[32px]">
                      Database
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
