"use client";
import Image from "next/image";
import Link from "next/link";
import { GoPlay } from "react-icons/go";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { GrApple } from "react-icons/gr";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  function getCurrentYear() {
    return new Date().getFullYear();
  }
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#100425] text-white">
      {/* Desktop Screen */}
      <div className="hidden md:flex flex-col max-w-[1440px] mx-auto">
        {/* HERO */}
        <div className="mt-2 w-[1395px] h-[680px] rounded-t-3xl opacity-90 border border-[#FFFFFF7D] bg-[#D9D9D91A] shadow-custom-inset-1">
          <div className="flex flex-row justify-center font-semibold text-base space-x-24">
            <div className="flex flex-row justify-center font-semibold text-base space-x-24 mt-2">
              <Link href="/">HOME</Link>
              <Link href="#products">PRODUCTS</Link>
            </div>
            <Image src="/fantasy_light_set.png" alt="fantasy light set" width={120} height={32} className="bg-[#110B2C] angled-rectangle items-center mt-0 w-[180px] h-[48px]" />
            <div className="flex flex-row justify-center font-semibold text-base space-x-24 mt-2">
              <Link href="#services">SERVICES</Link>
              <Link href="#contact">CONTACT</Link>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            {/* LEFT */}
            <div className="ml-16 mt-32">
              <div className="next-gen">NEXT GEN</div>
              <div className="virtual-reality-bg virtual-reality-text">VIRTUAL REALITY</div>
              <div className="hero-description mt-5">
                Experience the future of immersive technology with Nexarion.
                Dive into worlds beyond imagination, where cutting-edge virtual reality transforms how you interact,
                explore, and create. Discover new dimensions in entertainment, education,
                and innovation with seamless integration of the digital and physical realms.
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
        <div className="w-[1278px] mt-32 flex flex-row justify-center space-x-48 items-center mx-auto font-semibold text-xl">
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
        <div className="w-[1306px] my-28 flex flex-row justify-center mx-auto space-x-64 ">
          {/* Image */}
          <Image src="/explore.png" alt="explore in the metaverse" width={403} height={436} className="items-center w-[269px] h-[291px]" />

          {/* Text */}
          <div className="w-[654px] flex flex-col">
            <div className="flex flex-row w-[539px]">
              <p className="explore-text">Explore in the metaverse one pixel at a time</p>
            </div>
            <div className="text-base mt-4">
              Step into boundless digital realms where every pixel unlocks new possibilities.
              Immerse yourself in a universe that evolves with every interaction,
              blending reality and imagination in a seamless virtual experience.
              Uncover endless opportunities to connect, create, and explore in the vast metaverse.
            </div>
            <div className="flex flex-row space-x-8 mt-8 items-center text-center ">
              <button className="playnow-btn">Play Now</button>
              <button><GoPlay className="text-5xl" /></button>
            </div>
          </div>
        </div>

        {/* Touch the Reality */}
        <div className="w-[1308px] flex flex-row justify-center mx-auto mb-28 space-x-14">
          {/* Text */}
          <div className="flex flex-col ">
            <div className="touch-the-reality">Touch the Reality</div>
            <div className="text-base mt-4 w-[643px]">
              Step beyond the physical and immerse yourself in a world where virtual meets tangible.
              With cutting-edge technology, you can feel, see, and interact with environments
              that blur the lines between the real and the virtual.
              Dive into a new dimension of reality, crafted just for you.
            </div>
            <div className="flex flex-row space-x-8 mt-8 items-center text-center ">
              <button className="playnow-btn">Play Now</button>
              <button><GoPlay className="text-5xl" /></button>
            </div>
          </div>

          {/* Image */}
          <Image src="/touch_the_reality.png" alt="touch the reality" width={545} height={340} className="items-center w-[545px] h-[340px]" />
        </div>

        {/* Subscribe to NewsLetter */}
        <div className="flex flex-col mx-auto w-[676px] h-[235px] mb-32 border-[3.5px] rounded-3xl border-[#FF0AE6] items-center text-center">
          <div className="mt-6 font-semibold text-2xl">SUBSCRIBE TO OUR NEWSLETTER</div>
          <div className="mt-4 w-[460px] text-sm">
            Stay at the forefront of virtual reality innovation.
            Get the latest updates on cutting-edge technology,
            immersive experiences, and exclusive
            insights delivered right to your inbox.
          </div>
          <div className="flex flex-row mt-8">
            <input className="bg-transparent border-2 border-[#FF0AE6] rounded-l-full w-80 pl-5"></input>
            <button className="bg-[#FF0AE6] rounded-r-full py-3 px-8">Subscribe</button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col mx-auto w-[1350px] items-center text-center mb-6">
          <div className="flex flex-row space-x-28 font-semibold">
            <Link href="#help">Help</Link>
            <Link href="#about">About Us</Link>
            <Link href="#company">Company</Link>
            <Link href="#services">Services</Link>
            <Link href="#contact">Contact</Link>
          </div>
          <div className="flex flex-row mt-12 font-semibold text-2xl">Download our App</div>
          <div className="flex flex-row w-[464px] text-sm mt-6">
            Immerse yourself in the future of virtual reality.
            Experience cutting-edge VR technology right
            from your device. Download now and step into a new dimension.
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
      {/* END Desktop Screen */}

      {/* Small Screen / Mobile Devices */}
      <div className="container mx-auto px-4 flex md:hidden flex-col text-white">
        {/* NAV */}
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center text-center mt-4 px-2">
            <Link href="/" className="text-2xl font-bold">NEXARION</Link>
            {/* Mobile Button */}
            <div onClick={toggleMenu} className="flex md:hidden z-20 items-center">
              {showMenu ? <AiOutlineClose size={36} /> : <AiOutlineMenu size={36} />}
            </div>
          </div>
          {/* Mobile Menu */}
          <>
            {showMenu &&
              <div className="flex flex-col px-2 mt-2 space-y-2">
                <Link href="/">Home</Link>
                <Link href="#products">Products</Link>
                <Link href="#services">Services</Link>
                <Link href="#contact">Contact</Link>
              </div>
            }
          </>
          {/* END Mobile menu */}
        </div>

        <div className="flex flex-col mt-20 pl-2">
          <div className="text-5xl font-bold">NEXT GEN</div>
          <div className="virtual-reality-bg text-3xl font-semibold mt-2">VIRTUAL REALITY</div>
          <div className="text-sm mt-3">
            Experience the future of immersive technology with Nexarion.
            Dive into worlds beyond imagination, where cutting-edge virtual reality transforms how you interact,
            explore, and create. Discover new dimensions in entertainment, education,
            and innovation with seamless integration of the digital and physical realms.
          </div>
          <button className="see-more-btn-mobile rounded-full w-24 h-10 font-bold mt-3">Play Now</button>
        </div>

        {/* VR Images */}
        <div className="flex flex-col mt-14 items-center text-center justify-center mx-auto font-semibold text-xl space-y-10">
          <div className="flex flex-col items-center text-center space-y-5">
            <Image src="/vr_1.png" alt="Gear VR Headset" width={365} height={400} className="items-center mt-0 w-[365px] h-[400px]" />
            <p>Gear VR Headset</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-5">
            <Image src="/vr_2.png" alt="Smart VR Headset" width={280} height={310} className="items-center mt-0 w-[280px] h-[310px]" />
            <p>Smart VR Headset</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-5">
            <Image src="/vr_3.png" alt="Play Station VR" width={365} height={400} className="items-center mt-0 w-[365px] h-[400px]" />
            <p>Play Station VR</p>
          </div>
        </div>

        <div className="w-90 ml-2 flex flex-col mt-10">
          <div className="flex flex-row w-80">
            <p className="explore-bg font-extrabold text-2xl">Touch the Reality</p>
          </div>
          <div className="text-base mt-4 w-90">
            Step beyond the physical and immerse yourself in a world where virtual meets tangible.
            With cutting-edge technology, you can feel, see, and interact with environments
            that blur the lines between the real and the virtual.
            Dive into a new dimension of reality, crafted just for you.
          </div>
          <div className="flex flex-row space-x-7 mt-4 items-center text-center ">
            <button className="playnow-btn-bg text-lg font-semibold">Play Now</button>
            <button><GoPlay className="text-4xl" /></button>
          </div>
        </div>

        {/* NewsLetter Mobile */}
        <div className="flex flex-col mx-auto mt-12 sm:mt-20 w-96 sm:w-5/6 h-60 mb-20 border-[3.5px] rounded-3xl border-[#FF0AE6] items-center text-center">
          <div className="mt-6 font-semibold text-lg">SUBSCRIBE TO OUR NEWSLETTER</div>
          <div className="mt-4 w-80 text-sm">
            Stay at the forefront of virtual reality innovation.
            Get the latest updates on cutting-edge technology,
            immersive experiences, and exclusive
            insights delivered right to your inbox.
          </div>
          <div className="flex flex-row mt-8 w-80 justify-center mx-auto">
            <input className="bg-transparent border-2 border-[#FF0AE6] rounded-l-full w-60 pl-5"></input>
            <button className="bg-[#FF0AE6] rounded-r-full py-3 px-4 font-semibold">Subscribe</button>
          </div>
        </div>

        {/* Footer Mobile */}
        <div className="flex flex-col px-4 mb-4">
          <div className="flex flex-row font-bold text-lg">NEXARION</div>

          <div className="flex flex-row justify-between mt-10">
            <div className="flex flex-col">
              <p className="font-bold explore-bg text-lg">Menu</p>
              <div className="flex flex-col mt-3 space-y-2">
                <Link href="#help">Help</Link>
                <Link href="#about">About Us</Link>
                <Link href="#company">Company</Link>
                <Link href="#services">Services</Link>
                <Link href="#contact">Contact</Link>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="font-bold explore-bg text-lg">Legal</p>
              <div className="flex flex-col mt-3 space-y-2">
                <Link href="#terms">Terms</Link>
                <Link href="#privacy">Privacy</Link>
                <Link href="#condition">Condition</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-6">
            <p className="font-bold explore-bg text-lg">Download App</p>
            <div className="flex flex-col mt-3 space-y-2">
              <Link href="#playstore">Get it on Google Play</Link>
              <Link href="#appstore">Download on the iOS Appstore</Link>
            </div>
          </div>

          <div className="flex flex-col mt-8">
            <p className="font-bold explore-bg text-lg">Socials</p>
            <div className="flex flex-row space-x-4 mt-2">
              <Link href="#twitter"><FaTwitter className="text-lg" /></Link>
              <Link href="#facebook"><FaFacebook className="text-lg" /></Link>
              <Link href="#youtube"><FaYoutube className="text-lg" /></Link>
              <Link href="#instagram"><FaInstagram className="text-lg" /></Link>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center text-center mt-10">
            <p>&copy; {getCurrentYear()} NEXARION. All rights reserved.</p>
          </div>
        </div>
      </div>
      {/* END Small Screen / Mobile Devices */}
    </main>
  );
}
