import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="p-10 footer bg-neutral text-base-100">
      <div>
        <Image
          src={"/images/logo.png"}
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
        <span className="footer-title">ຂໍ້ມູນຕິດຕໍ່</span>
        <div className="flex flex-col gap-4">
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
          <div className="flex items-center gap-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <p>051 212 218</p>
          </div>
          <Link
            href={`mailto:poutthy.thanousone@gmail.com`}
            className="flex items-center gap-x-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>

            <p>{`poutthy.thanousone@gmail.com`}</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
