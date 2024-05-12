import Link from "next/link"
import Image from "next/image"
import { MdEmail } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";


export default function Footer() {
    return (
        <>
            <div className="mt-auto">
                <div className="flex justify-center gap-32 bg-[#a2463B] py-16 text-white">
                    <div className="flex flex-col items-start">
                        <span className="text-2xl mb-5 font-semibold">Quick Links</span>
                        <Link href="https://dciindia.gov.in/" target="_blank" className="mb-2 text-xs hover:underline">
                            <li className="list-[square]">
                                Medical Education & Drugs Department
                            </li>
                        </Link>
                        <Link href="https://merciedu.co.in/" className="mb-2 text-xs hover:underline">
                            <li className="list-[square]">
                                Medical Education & Research
                            </li>
                        </Link>
                        <Link href="https://www.msdcmumbai.org.in/MSDCNew/index.html#/Home" className="mb-2 text-xs hover:underline">
                            <li className="list-[square]">
                                Maharashtra State Dental Council
                            </li>
                        </Link>
                        <Link href="http://www.mpsc.gov.in/" className="mb-2 text-xs hover:underline">
                            <li className="list-[square]">
                                Maharashtra Public Service Commission
                            </li>
                        </Link>
                        <Link href="https://cetcell.mahacet.org/" className="mb-2 text-xs hover:underline">
                            <li className="list-[square]">
                                CET-CELL
                            </li>
                        </Link>
                        <Link href="https://www.muhs.ac.in/" className="mb-2 text-xs hover:underline">
                            <li className="list-[square]">
                                Maharashtra University Of Health & Science
                            </li>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl mb-2 font-semibold">Contact Us</span>
                        <div className="flex flex-col justify-center items-center  px-2 gap-4">
                            <div className=" flex justify-center flex-col items-start   ">
                                <h3 className="flex font-bold items-center gap-1">
                                    <MdEmail className=" text-xl" />
                                    Email
                                </h3>
                                <p className="hover:underline">
                                    Lorem_ipsum@gmail.com <br /> GDC_aurangabad@edu.in
                                </p>
                            </div>
                            <div className=" flex justify-center flex-col items-start   ">
                                <h3 className="flex font-bold items-center gap-1">
                                    <MdOutlineContactSupport className=" text-xl" />
                                    Have a question?
                                </h3>
                                <p className=" hover:underline">
                                    Call on +91 99990111 <br />
                                    Student sec: +91 90002101
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl mb-2 font-semibold">
                            Visitor Counter
                        </span>
                        <span className="text-2xl mb-2 font-semibold">193,425</span>
                    </div>
                </div>
                <div className="bg-[var(--primary-color)] text-white py-4 text-center max-sm:text-xs">
                    © Copyright GDC 2022. Designed and Developed by MIT.
                </div>
            </div>
        </>
    );
}