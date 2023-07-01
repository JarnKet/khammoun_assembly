import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="p-10 footer bg-neutral text-base-100">
      <div>
        <Image
          src={"images/logo.png"}
          unoptimized
          alt="lao assembly logo"
          width={60}
          height={60}
        />
        <p>
          <span className="font-bold">ສະພາປະຊາຊົນ ແຂວງຄຳມ່ວນ</span>
          <br />
          ລິຂະສິດ ©2023
        </p>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
          <Link href={`https://web.facebook.com/poutthy`} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current hover:scale-110"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
