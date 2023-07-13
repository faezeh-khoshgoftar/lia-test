import React from "react";
import { Link } from "react-router-dom";
import { logo, instagram, telegram, aparat } from "../../assets/images/images";

function Footer() {
  return (
    <footer className="px-10 py-4">
      <div className="flex justify-between items-center gap-x-5 pb-4 mb-4 border-b border-gray-300">
        <Link to="/">
          <img src={logo} alt="lia-logo" />
        </Link>
        <p>
          تمامی حقوق این وب‌سایت متعلق به شرکت آرمان تدبیر اطلس 1398-1400
          می‌باشد
        </p>
        <div>
          <p className="pb-2">لیا را در شبکه‌های اجتماعی دنبال کنید</p>
          <div className="flex justify-between">
            <a href="https://www.instagram.com/">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="https://www.telegram.com/">
              <img src={telegram} alt="telegram" />
            </a>
            <a href="https://www.aparat.com/">
              <img src={aparat} alt="aparat" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-gray-500 gap-x-5">
        <p>
          این شرکت هیچگونه وابستگی به ارگانها و نهادهای دولتی ، غیر دولتی و
          امنیتی ندارد.
        </p>
        <p>
          شماره واحد بازرسی و نظارت بر واحد بازاریابی شبکه‌ای : 26421289-021 و
          26421197-021
        </p>
      </div>
    </footer>
  );
}

export default Footer;
