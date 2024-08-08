import Image from "next/image";
import Link from "next/link";
import { GoPlay } from "react-icons/go";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { GrApple } from "react-icons/gr";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#100425]">
      <div className="flex flex-col max-w-[1440px] mx-auto">
        {/* HERO */}
        <div className="mt-2 w-[1395px] h-[680px] rounded-t-3xl opacity-90 border border-[#FFFFFF7D] bg-[#D9D9D91A] shadow-custom-inset-1">
          <div className="flex flex-row justify-center text-white font-semibold text-base space-x-24">
            <div className="flex flex-row justify-center text-white font-semibold text-base space-x-24 mt-2">
              <Link href="/">HOME</Link>
              <Link href="#products">PRODUCTS</Link>
            </div>
            <Image src="/fantasy_light_set.png" alt="fantasy light set" width={120} height={32} className="bg-[#110B2C] angled-rectangle items-center mt-0 w-[180px] h-[48px]" />
            <div className="flex flex-row justify-center text-white font-semibold text-base space-x-24 mt-2">
              <Link href="#services">SERVICES</Link>
              <Link href="#contact">CONTACT</Link>
            </div>
          </div>
          <div className="flex flex-row text-white justify-between">
            {/* LEFT */}
            <div className="ml-16 mt-32">
              <div className="next-gen">NEXT GEN</div>
              <div className="virtual-reality">VIRTUAL REALITY</div>
              <div className="description mt-5">
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
                risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                Maecenas eget condimentum velit, sit amet feugiat lectus.
              </div>
              <button className="see-more-btn mt-2">See More</button>
            </div>

            {/* RIGHT */}
            <div className="mr-16 relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 grid-background"></div>
              <div className="relative z-10 text-center">
                <Image src="/futuristic_young_woman.png" alt="photo of a futuristic young woman with a virtual reality viewer in neon colors" width={358} height={626} className="" />
              </div>
            </div>
          </div>
        </div>
        {/* END HERO */}

        {/* VR Images */}
        <div className="w-[1278px] mt-32 flex flex-row justify-center space-x-48 items-center mx-auto text-white font-semibold text-xl">
          <div className="flex flex-col items-center text-center space-y-8">
            <Image src="/vr_1.png" alt="Gear VR Headset" width={365} height={400} className="items-center mt-0 w-[244px] h-[267px]" />
            <p>Gear VR Headset</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-8">
            <Image src="/vr_2.png" alt="Smart VR Headset" width={280} height={310} className="items-center mt-0 w-[187px] h-[207px]" />
            <p>Smart VR Headset</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-8">
            <Image src="/vr_3.png" alt="Play Station VR" width={365} height={400} className="items-center mt-0 w-[244px] h-[267px]" />
            <p>Play Station VR</p>
          </div>
        </div>

        {/* Explore The Metaverse */}
        <div className="w-[1306px] my-28 flex flex-row justify-center mx-auto space-x-64 text-white">
          {/* Image */}
          <Image src="/explore.png" alt="explore in the metaverse" width={403} height={436} className="items-center w-[269px] h-[291px]" />

          {/* Text */}
          <div className="w-[654px] flex flex-col">
            <div className="flex flex-row w-[539px]">
              <p className="explore-text">Explore in the metaverse one pixel at a time</p>
            </div>
            <div className="text-base mt-4">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam eu turpis molestie, dictum est a, mattis tellus.
              Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
              ut interdum tellus elit sed risus. Maecenas eget condimentum velit,
              sit amet feugiat lectus.
            </div>
            <div className="flex flex-row space-x-8 mt-8 items-center text-center text-white">
              <button className="playnow-btn">Play Now</button>
              <button><GoPlay className="text-5xl" /></button>
            </div>
          </div>
        </div>

        {/* Touch the Reality */}
        <div className="w-[1308px] flex flex-row justify-center mx-auto mb-28 space-x-14">
          {/* Text */}
          <div className="flex flex-col text-white">
            <div className="touch-the-reality">Touch the Reality</div>
            <div className="text-base mt-4 w-[643px]">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam eu turpis molestie, dictum est a, mattis tellus.
              Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
              ut interdum tellus elit sed risus. Maecenas eget condimentum velit,
              sit amet feugiat lectus.
            </div>
            <div className="flex flex-row space-x-8 mt-8 items-center text-center text-white">
              <button className="playnow-btn">Play Now</button>
              <button><GoPlay className="text-5xl" /></button>
            </div>
          </div>

          {/* Image */}
          <Image src="/touch_the_reality.png" alt="touch the reality" width={545} height={340} className="items-center w-[545px] h-[340px]" />
        </div>

        {/* Subscribe to NewsLetter */}
        <div className="flex flex-col mx-auto w-[676px] h-[235px] mb-32 border-[3.5px] rounded-3xl border-[#FF0AE6] text-white items-center text-center">
          <div className="mt-6 font-semibold text-2xl">SUBSCRIBE TO OUR NEWSLETTER</div>
          <div className="mt-4 w-[460px] text-sm">Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</div>
          <div className="flex flex-row mt-8">
            <input className="bg-transparent border-2 border-[#FF0AE6] rounded-l-full w-80 pl-5"></input>
            <button className="bg-[#FF0AE6] rounded-r-full py-3 px-8">Subscribe</button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col mx-auto w-[1350px] text-white items-center text-center mb-6">
          <div className="flex flex-row space-x-28 font-semibold">
            <Link href="#help">Help</Link>
            <Link href="#about">About Us</Link>
            <Link href="#company">Company</Link>
            <Link href="#services">Services</Link>
            <Link href="#contact">Contact</Link>
          </div>
          <div className="flex flex-row mt-12 font-semibold text-2xl">Download our App</div>
          <div className="flex flex-row w-[464px] text-sm mt-6">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos.
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col mt-5 items-center text-left space-y-2">
            <Link href="#playstore" className="flex flex-row bg-black rounded-xl py-2 px-4 items-center text-left space-x-1">
              <IoLogoGooglePlaystore className="text-2xl mt-3" />
              <div className="flex flex-col">
                <p className="text-[8.5px]">GET IT ON</p>
                <p className="flex flex-row font-medium text-lg">Google Play</p>
              </div>
            </Link>
            <Link href="#appstore" className="flex flex-row bg-black rounded-xl py-2 px-4 items-center text-left space-x-2">
              <GrApple className="text-2xl mt-[2px]" />
              <div className="flex flex-col">
                <p className="text-[8.5px]">Download on the</p>
                <p className="flex flex-row font-medium text-xl">App Store</p>
              </div>
            </Link>
          </div>
          {/* END Download Buttons */}

          {/* Socials */}
          <div className="flex flex-row border-t mt-10 w-full"></div>
          <div className="flex flex-row mt-4 w-full justify-between items-center text-center px-5">
            <div className="flex flex-row w-[322px] justify-between">
              <Link href="#terms">Terms</Link>
              <Link href="#privacy">Privacy</Link>
              <Link href="#condition">Condition</Link>
            </div>
            <div className="flex flex-row w-[150px] justify-between">
              <Link href="#twitter"><FaTwitter /></Link>
              <Link href="#facebook"><FaFacebook /></Link>
              <Link href="#youtube"><FaYoutube /></Link>
              <Link href="#instagram"><FaInstagram /></Link>
            </div>
          </div>
          {/* END Socials */}
        </div>
        {/* END Footer */}
      </div>
    </main>
  );
}
