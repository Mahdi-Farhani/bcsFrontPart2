import Image from "next/image";
import { useState } from "react";
import style from "./contactUs.module.css";
import mainImg from "@/asset/banner/36.png";
import icon1 from "@/public/icons/image/contactUs/1.png";
import icon2 from "@/public/icons/image/contactUs/2.png";
import icon3 from "@/public/icons/image/contactUs/3.png";
import icon4 from "@/public/icons/image/contactUs/4.png";
import img1 from "@/asset/contactUs/1.jpg";
import img2 from "@/asset/contactUs/2.jpg";
import img3 from "@/asset/contactUs/3.png";
import img4 from "@/asset/contactUs/4.png";
import img5 from "@/asset/contactUs/5.png";
import img6 from "@/asset/contactUs/6.jpg";
import img7 from "@/asset/contactUs/7.jpg";
export const ContactUsPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  return (
    <div>
      <div className={style.imageTop}>
        <Image
          src={mainImg}
          alt="Media Banner"
          title="media"
          width={2560}
          height={1440}
        />
      </div>
      <div className={style.historyBody}>
        <h1>مرکز فروش و تجاری سازی</h1>
        <div className={style.contactAllDetailPart}>
          <div className={style.contactDetail}>
            <div className={style.part1}>
              <Image src={icon1} alt="center icon" height={20} width={20} />
              <p>مرکز فروش و تجاری سازی</p>
            </div>
            <div className={style.contactDetail2}>
              <p>
                تهران، میدان آرژانتین، خیابان احمد قصیر (بخارست)، خیابان دهم
                غربی، پلاک 23، واحد 5
              </p>
              <div>
                <div className={style.part2}>
                  <Image src={icon2} alt="phone icon" height={20} width={20} />
                  <p>02158462000</p>
                </div>
                <div className={style.part2}>
                  <Image
                    src={icon3}
                    alt="postalCode icon"
                    height={20}
                    width={20}
                  />
                  <p>1514748416</p>
                </div>
                <div className={style.part2}>
                  <Image src={icon4} alt="email icon" height={20} width={20} />
                  <p>info@holding-bcs.com</p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={img1}
            alt="Sales and commercialization center"
            width={513}
            height={256}
            className={style.contactImage}
          />
        </div>
        <h1>مرکز توسعه کسب و کار و نوآوری سازمانی</h1>
        <div className={style.contactAllDetailPart}>
          <Image
            src={img2}
            alt="Sales and commercialization center"
            width={513}
            height={256}
            className={style.contactImage}
          />
          <div className={style.contactDetail}>
            <div className={style.part1}>
              <Image src={icon1} alt="center icon" height={20} width={20} />
              <p>مرکز توسعه کسب و کار و نوآوری سازمانی</p>
            </div>
            <div className={style.contactDetail2}>
              <p>
                اصفهان، دانشگاه صنعتی اصفهان، شهرک علمی تحقیقاتی اصفهان، ضلع
                شمال شرقی برج فناوری
              </p>
              <div>
                <div className={style.part2}>
                  <Image src={icon2} alt="phone icon" height={20} width={20} />
                  <p>02158462000</p>
                </div>
                <div className={style.part2}>
                  <Image
                    src={icon3}
                    alt="postalCode icon"
                    height={20}
                    width={20}
                  />
                  <p>8415681774</p>
                </div>
                <div className={style.part2}>
                  <Image src={icon4} alt="email icon" height={20} width={20} />
                  <p>info@holding-bcs.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1>مراکز تولیدی</h1>
        <div className={style.contactAllDetailPart}>
          <div className={style.contactDetail}>
            <div className={style.part1}>
              <Image src={icon1} alt="center icon" height={20} width={20} />
              <p>آمیزه های بسپار لاستیک سپیدان</p>
            </div>
            <div className={style.contactDetail2}>
              <p>
                اصفهان، شهرک صنعتی مورچه خورت، خیابان دکتر حسابی، فرعی پنجم،
                پلاک 676
              </p>
              <div>
                <div className={style.part2}>
                  <Image src={icon2} alt="phone icon" height={20} width={20} />
                  <p>02158462000</p>
                </div>
                <div className={style.part2}>
                  <Image
                    src={icon3}
                    alt="postalCode icon"
                    height={20}
                    width={20}
                  />
                  <p>8333116855</p>
                </div>
                <div className={style.part2}>
                  <Image src={icon4} alt="email icon" height={20} width={20} />
                  <p>info@holding-bcs.com</p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={img3}
            alt="Sales and commercialization center"
            width={513}
            height={256}
            className={style.contactImage}
          />
        </div>
        <div className={style.contactAllDetailPart}>
          <Image
            src={img4}
            alt="Sales and commercialization center"
            width={513}
            height={256}
            className={style.contactImage}
          />
          <div className={style.contactDetail}>
            <div className={style.part1}>
              <Image src={icon1} alt="center icon" height={20} width={20} />
              <p>بسپار شیمی سپیدان</p>
            </div>
            <div className={style.contactDetail2}>
              <p>
                اصفهان، شهرک صنعتی مورچه خورت، خیابان شیخ بهایی ششم، پلاک 181
              </p>
              <div>
                <div className={style.part2}>
                  <Image src={icon2} alt="phone icon" height={20} width={20} />
                  <p>02158462000</p>
                </div>
                <div className={style.part2}>
                  <Image
                    src={icon3}
                    alt="postalCode icon"
                    height={20}
                    width={20}
                  />
                  <p>8333116365</p>
                </div>
                <div className={style.part2}>
                  <Image src={icon4} alt="email icon" height={20} width={20} />
                  <p>info@holding-bcs.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.contactAllDetailPart}>
          <div className={style.contactDetail}>
            <div className={style.part1}>
              <Image src={icon1} alt="center icon" height={20} width={20} />
              <p>سپید شیمی پرتو</p>
            </div>
            <div className={style.contactDetail2}>
              <p>
                اصفهان، شهرک صنعتی مورچه‌خورت، خیابان زکریای 5، پلاک 395،
                کدپستی 
              </p>
              <div>
                <div className={style.part2}>
                  <Image src={icon2} alt="phone icon" height={20} width={20} />
                  <p>02158462000</p>
                </div>
                <div className={style.part2}>
                  <Image
                    src={icon3}
                    alt="postalCode icon"
                    height={20}
                    width={20}
                  />
                  <p>8333114461</p>
                </div>
                <div className={style.part2}>
                  <Image src={icon4} alt="email icon" height={20} width={20} />
                  <p>info@holding-bcs.com</p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={img5}
            alt="Sales and commercialization center"
            width={513}
            height={256}
            className={style.contactImage}
          />
        </div>
        <h1>مرکز تحقیقات و نوآوری</h1>
        <div className={style.contactAllDetailPart}>
          <Image
            src={img6}
            alt="Sales and commercialization center"
            width={513}
            height={256}
            className={style.contactImage}
          />
          <div className={style.contactDetail}>
            <div className={style.part1}>
              <Image src={icon1} alt="center icon" height={20} width={20} />
              <p>مرکزتحقیقات و نوآوری</p>
            </div>
            <div className={style.contactDetail2}>
              <p>
                اصفهان ، میدان استقلال ، بلوار آزادگان ، دانشگاه صنعتی اصفهان ،
                صد متر بالاتر از دفتر فنی سابق
              </p>
              <div>
                <div className={style.part2}>
                  <Image src={icon2} alt="phone icon" height={20} width={20} />
                  <p>02158462000</p>
                </div>
                <div className={style.part2}>
                  <Image
                    src={icon3}
                    alt="postalCode icon"
                    height={20}
                    width={20}
                  />
                  <p>8415683111</p>
                </div>
                <div className={style.part2}>
                  <Image src={icon4} alt="email icon" height={20} width={20} />
                  <p>info@holding-bcs.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.contactAllDetailPart}>
          <div className={style.contactDetail}>
            <div className={style.part1}>
              <Image src={icon1} alt="center icon" height={20} width={20} />
              <p>دفتر فروش مشهد</p>
            </div>
            <div className={style.contactDetail2}>
              <p>مشهد ، خیابان دانشگاه ، برج آلتون ، طبقه بیست ، واحد چهار</p>
              <div>
                <div className={style.part2}>
                  <Image src={icon2} alt="phone icon" height={20} width={20} />
                  <p>9 - 05138491368</p>
                </div>
                <div className={style.part2}>
                  <Image
                    src={icon3}
                    alt="postalCode icon"
                    height={20}
                    width={20}
                  />
                  <p>05138491343</p>
                </div>
                <div className={style.part2}>
                  <Image src={icon4} alt="email icon" height={20} width={20} />
                  <p>info@holding-bcs.com</p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={img7}
            alt="Sales and commercialization center"
            width={513}
            height={256}
            className={style.contactImage}
          />
        </div>
      </div>
      <h2 className={style.titleOfMessage}>
        برای برقراری ارتباط با تیم پشتیبانی سایت می توانید از طریق فرم زیر اقدام
        نمایید:{" "}
      </h2>
      <div className={style.form}>
        <div className={style.customerMessagePart1}>
          <div className={style.formPart}>
            <input
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <label placeholder="Name..."></label>
          </div>
          <div className={style.formPart}>
            <input
              type="text"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label placeholder="Email..."></label>
          </div>
        </div>

        <div className={style.formPart}>
          <textarea required onChange={(e) => setMessage(e.target.value)} />
          <label placeholder="Message..."></label>
        </div>
        <button className={style.submitBtn} type="button">
          ارسال پیام
        </button>
      </div>
    </div>
  );
};
