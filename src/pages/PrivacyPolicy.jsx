import PropTypes from "prop-types";


const PrivacyPolicy = ({ className = "" }) => {
  return (
    <div
      className={`w-[1920px] bg-white max-w-full overflow-hidden flex flex-row items-start justify-center pt-[159px] px-5 pb-40 box-border leading-[normal] tracking-[normal] ${className}`}
    >
      <section className="h-[7000px] w-[1080px] relative text-black text-left inline-block shrink-0 max-w-full text-[64px] font-rubik mq450:text-5xl mq767:text-[32px]">
        <p className="m-0">
          <b>
            <span className="text-21xl">&nbsp;</span>
            <span>Privacy Policy</span>
          </b>
        </p>
        <p className="m-0 text-21xl">
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>{`Effective Date: 13th of July, 2024
`}</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>{`1. Introduction
`}</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>
              Welcome to BFPali ("we," "our," or "us"). This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you use our Google Chrome extension designed to
              block certain websites that support a specific organization (the
              "Extension"). By using the Extension, you agree to the terms of
              this Privacy Policy.
            </span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>{`2. Information We Collect
`}</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>
              We do not collect, store, or share any personal information from
              users of the Extension. The Extension operates locally on your
              device and does not transmit any data to our servers.
            </span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>{`3. How the Extension Works
`}</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>
              The Extension works by accessing and modifying your web browsing
              experience locally on your device. It blocks access to certain
              websites based on a predefined list of URLs associated with the
              specified organization. This process is entirely local, and no
              data about your browsing activities is sent to us
            </span>
            <b>.</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>{`4. Permissions
`}</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>
              The Extension requires the following permissions to function
              correctly:
            </span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>
              - **Read and change your data on the websites you visit:** This
              permission allows the Extension to block access to certain
              websites.
            </span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>{`5. Data Security
`}</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>
              As the Extension does not collect or transmit any personal data,
              there are no specific data security measures in place. Your
              privacy is protected as the Extension operates entirely on your
              local device.
            </span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>{`6. Third-Party Services
`}</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>
              The Extension does not integrate with or use any third-party
              services that collect or process your data.
            </span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>7. Changes to This Privacy Policy</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated effective date. Your
              continued use of the Extension after any changes indicates your
              acceptance of the updated Privacy Policy.
            </span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>{`8. Contact Us
`}</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>
              If you have any questions or concerns about this Privacy Policy or
              the Extension, please contact us at:
            </span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>{`contact@bfpali.com
`}</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>{`9. Consent
`}</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>
              By using the Extension, you consent to this Privacy Policy.
            </span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>**10. Disclaimer**</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>&nbsp;</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>
              The Extension is provided "as is" without any warranties. We are
              not responsible for any issues or damages resulting from the use
              of the Extension.
            </span>
          </span>
        </p>
      </section>
    </div>
  );
};

PrivacyPolicy.propTypes = {
  className: PropTypes.string,
};

export default PrivacyPolicy;
