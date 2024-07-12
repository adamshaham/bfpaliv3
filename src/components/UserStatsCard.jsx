import { useMemo } from "react";
import PropTypes from "prop-types";

const UserStatsCard = ({
  className = "",
  group1216,
  userStatsCardNumber,
  users,
  propWidth,
  propFlex,
  propMinWidth,
}) => {
  const userStatsCardStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  return (
    <div
      className={`w-[193px] flex flex-row items-start justify-start gap-[48.7px] text-left text-14xl-3 text-gray-200 font-rubik ${className}`}
      style={userStatsCardStyle}
    >
      <div className="flex flex-col items-start justify-start pt-[6.7px] px-0 pb-0">
        <div className="w-[73.3px] h-[73.3px] rounded-[93.33px] bg-lavenderblush flex flex-row items-start justify-start pt-[20.6px] px-5 pb-[20.7px] box-border shrink-0 z-[1]">
          <div className="h-[73.3px] w-[73.3px] relative rounded-[93.33px] bg-lavenderblush hidden" />
          <img
            className="h-8 w-8 relative z-[1]"
            loading="lazy"
            alt=""
            src={group1216}
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[6.7px] shrink-0">
        <b className="relative leading-[40px] inline-block min-w-[65px] z-[1] mq450:text-xl mq450:leading-[24px] mq825:text-8xl mq825:leading-[32px]">
          {userStatsCardNumber}
        </b>
        <div className="relative text-7xl-7 leading-[40px] text-dimgray inline-block min-w-[71px] z-[1] mq450:text-2xl mq450:leading-[32px]">
          {users}
        </div>
      </div>
    </div>
  );
};

UserStatsCard.propTypes = {
  className: PropTypes.string,
  group1216: PropTypes.string,
  userStatsCardNumber: PropTypes.string,
  users: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default UserStatsCard;
