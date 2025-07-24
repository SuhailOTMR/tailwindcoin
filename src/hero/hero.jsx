import React from 'react';
import Scroller from '../scroller/scroller';
import Carousel from '../controll/ControlableSlide';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Hero = () => {
    const starStyle = {
        color: '#FFA900',
        fontSize: '25px',
        marginTop: '3px',
        marginLeft: '5px',
    };

    const cards = ['zoo100.png', 'zoo101.png', 'zoo102.png', 'zoo103.png', 'zoo104.png', 'zoo105.png', 'zoo106.png', 'zoo107.png', 'zoo108.png', 'soo101.png', 'soo2003.png', 'soo2002.png'];
    const card1 = ['zoo109.png', 'zoo110.png', 'zoo111.png', 'zoo112.png', 'zoo113.png', 'zoo114.png', 'zoo115.png', 'zoo116.png', 'zoo117.png'];

    return (
        <>
            {/* Hero background section */}
            <div className="w-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero.png')" }}>



                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col items-center text-white pt-[140px] text-center space-y-5">

                        {/* Narrowed width for h1 and p */}
                        <div className="max-w-xl w-full">
                            <h1 className="font-bold font-sans " style={{ fontSize: "30px" }}>
                                <span className="text-[#FFA900]">Earn Rewards</span> By Sharing Your Opinion & Exploring New Apps
                            </h1>
                            <p className="mt-3">
                                Earn money by testing apps, games and taking surveys. Earn up to{' '}
                                <b className="text-[#FFA900]">$50.40</b> per offer 494 available offers now. Get started today!
                            </p>
                        </div>

                        <button className="w-[200px] bg-[#FFA900] rounded-full shadow-lg py-2 font-semibold text-black">
                            Sign UP
                        </button>
                    </div>
                </div>


                <Scroller />
            </div>

            {/* Stats section */}
            <div className="container mx-auto px-4">
                <div className="yo">
                    <div>
                        <span className="text-2xl font-bold">$60,000,000+</span>
                        <span>Paid Out to Users</span>
                    </div>
                    <div>
                        <span className="text-2xl font-bold">1M+</span>
                        <span>Active Users Worldwide</span>
                    </div>
                    <div>
                        <span className="text-2xl font-bold">4.6 EXCELLENT</span>
                        <div className="flex">
                            <FaStar style={starStyle} />
                            <FaStar style={starStyle} />
                            <FaStar style={starStyle} />
                            <FaStar style={starStyle} />
                            <FaStarHalfAlt style={starStyle} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Offer instructions */}
            <div className="container mx-auto px-4 mt-12">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="text-white space-y-4">
                        <h1 className="font-bold font-sans text-xl">1. CHOOSE AN OFFER</h1>
                        <p className="w-[90%] ml-5">Take your pick from the tasks on the earn page. We list the best offers from companies who want to advertise their apps, surveys, and products.
                        </p>

                        <img src="/pandafinal.png" alt="" className="img-fluid yopanda rounded-2xl" />

                        <h3 className="font-bold font-sans mt-3 text-xl">2. COMPLETE OFFER</h3>
                        <p className="w-[90%] ml-5">Most offers are very simple and have already earned money for thousands of people. Most offers take around 5-10 minutes to complete.</p>

                        <h3 className="font-bold font-sans mt-3 text-xl">3. GET PAID</h3>
                        <p className="w-[90%] ml-5">For each task you complete, you’ll be rewarded with coins: 1000 coins = $1,00. Cashout the coins and get your hands on your free cash!</p>
                    </div>

                    <div className="contentWrapper secondSection flex flex-col gap-4 text-white">
                        <h2 className="text-center font-bold font-sans w-[80%] mx-auto forpadding"

                        >
                            WANT TO POCKET SOME QUICK CASH? FIND OUT <span className="text-[#FFA900]">HOW HERE</span>
                        </h2>
                        <button className="bg-[#FFA900] text-black font-bold text-xl py-2 w-[280px] rounded-full mx-auto">
                            Start earning now
                        </button>
                        <img src="/yoyo.png" alt="" className="img-fluid pandaimg rounded-2xl mt-4" />
                    </div>
                </div>
            </div>

            {/* Highlighted section */}
            <div className="col col-11 col-lg-5 mx-auto mt-8 custom2heading">
                <h2 className="text-white font-bold font-sans text-center" style={{ fontSize: "25px" }}>
                    WE'RE THE ROP SPOT TO BOOST YOUR EARNING. <span className="text-[#FFA900]">DISCOVER WHY</span>
                </h2>
            </div>

            {/* Image triplet */}
            <div className="container mx-auto px-4 mt-8 grid sm:grid-cols-3 gap-4 customtriple">
                {['zoo2.png', 'zoo3.png', 'zoo1.png'].map((img, i) => (
                    <img key={i} src={`/${img}`} alt="" className="img-fluid yopanda  mx-auto imgfor" />
                ))}
            </div>

            {/* Earning Cards */}
            {/* <div className="container mx-auto px-4 mt-10 grid md:grid-cols-3 gap-6">
                {[
                    { img: 'zoo4.png', title: 'Play & Win', value: '$1.00-$120.00', desc: 'Play Games. Earn Cash...' },
                    { img: 'zoo5.png', title: 'Complete offers', value: '$1.00 - $75.00', desc: 'Try New Apps...' },
                    { img: 'zoo6.png', title: 'Join surveys', value: '$1.00', desc: 'Your Opinion Matters!' },
                ].map((card, index) => (
                    <div key={index} className="bg-[#1E1E2E] rounded-2xl p-6 text-center text-white flex flex-col items-center gap-3">
                        <div
                            className="rounded-full h-40 w-40 bg-cover bg-center mx-auto"
                            style={{ backgroundImage: `url('/${card.img}')` }}
                        />
                        <span className="text-2xl font-bold font-sans">{card.title}</span>
                        <p className="w-[90%] mx-auto">{card.desc}</p>
                        <h3 className="text-[#27FD6A] font-bold">{card.value}</h3>
                        <button className="bg-[#FFA900] text-black font-bold py-2 w-[220px] rounded-full">
                            Start Playing & Earning
                        </button>
                    </div>
                ))}
            </div> */}

            <h1 style={{ color: "white", fontSize: "30px", textAlign: "center", margin: "20px 0px", fontWeight: "bold" }} className='font-sans' >EXCITED WAYS TO <span style={{ color: "#FFA900" }}>MAKE MONEY!</span></h1>

            <div className="container mx-auto px-4 mt-10 grid md:grid-cols-3 gap-6 justify-center" >
                {[
                    { img: 'zoo4.png', title: 'Play & Win', value: '$1.00-$120.00', desc: 'Play Games. Earn Cash. It’s that simple—try out exciting new games and get rewarded.' },
                    { img: 'zoo5.png', title: 'Complete offers', value: '$1.00 - $75.00', desc: 'Try New Apps. Get Paid Instantly. Making money has never been this easy.' },
                    { img: 'zoo6.png', title: 'Join surveys', value: '$1.00', desc: 'Your Opinion Matters! Companies pay you to improve their products and services.' },
                ].map((card, index) => (
                    <div
                        key={index}
                        className="bg-[#1E1E2E] rounded-2xl p-6 text-center text-white flex flex-col items-center gap-3 mx-auto max-w-[305px] w-full" style={{ padding: "40px 0px" }}
                    >
                        <div
                            className="rounded-full h-40 w-40 bg-cover bg-center mx-auto"
                            style={{ backgroundImage: `url('/${card.img}')` }}
                        />
                        <span className="text-2xl font-bold font-sans">{card.title}</span>
                        <p className="w-[90%] mx-auto" style={{ textAlign: "center" }}>{card.desc}</p>
                        <h3 className="text-[#27FD6A] font-bold" style={{ fontSize: "25px" }}>{card.value}</h3>
                        <button className="bg-[#FFA900] text-black font-bold py-2 w-[220px] rounded-full">
                            Start Playing & Earning
                        </button>
                    </div>
                ))}
            </div>


            {/* Partners */}
            <div className="container mx-auto px-4 mt-12 text-center text-white font-bold">
                <h3 style={{ fontSize: "30px" }}>INTEGRATED <span className="text-[#FFA900]">PARTNER</span></h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 py-4 ">
                    {cards.map((img, i) => (
                        <img key={i} src={`/${img}`} alt="" className="w-[90%] mx-auto customway" />
                    ))}
                </div>
            </div>

            {/* Cashout */}
            <div className="container mx-auto px-4 mt-12 text-center text-white font-bold">
                <h3 style={{ fontSize: "30px" }}>CASHOUT <span className="text-[#FFA900]">VIA</span></h3>
                <div className="flex flex-wrap justify-center mt-6 gap-4 youCard">
                    {/* {card1.map((img, index) => (
                        <img
                            key={index}
                            src={`/${img}`}
                            alt=""
                            className="customLogocards w-[100px] h-auto mx-auto"
                        />
                    ))} */}
                    <img
                        src='/zoo109.png'
                        alt=""
                        className="customLogocards w-[100px] h-auto mx-auto"
                    />
                    <img
                        src='/zoo110.png'
                        alt=""
                        className="customLogocards w-[100px] h-auto mx-auto"
                    />
                    <img
                        src='/zoo111.png'
                        alt=""
                        className="customLogocards w-[100px] h-auto mx-auto"
                    />
                    <img
                        src='/zoo112.png'
                        alt=""
                        className="customLogocards w-[100px] h-auto mx-auto"
                    />
                    <img
                        src='/zoo113.png'
                        alt=""
                        className="customLogocards w-[100px] h-auto mx-auto"
                    />
                    <img
                        src='/zoo114.png'
                        alt=""
                        className="customLogocards w-[100px] h-auto mx-auto"
                    />
                    <img
                        src='/zoo115.png'
                        alt=""
                        className="customLogocards w-[100px] h-auto mx-auto"
                    />
                    <img
                        src='/zoo116.png'
                        alt=""
                        className="customLogocards w-[100px] h-auto mx-auto"
                    />
                    <img
                        src='/zoo117.png'
                        alt=""
                        className="customLogocards w-[100px] h-auto mx-auto hiddlelogoformobile"
                    />
                </div>
                <img src="/zoo700.png" alt="" className="img-fluid mt-20" style={{ width: "1000px", margin: "60px auto" }} />
            </div>

            {/* Carousel section */}
            <Carousel />

            {/* Community section */}
            <div
                className="w-full bg-cover bg-center py-12 px-4"
                style={{ backgroundImage: `url('/zoo2000.png')`, marginTop: "0px" }}
            >
                <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
                    <img src="/zoo2001.png" alt="" className="img-fluid mx-auto" />
                    <div className="text-white space-y-4 text-left">
                        <h3 className="font-bold font-sans footPara text-xl" >Join the community</h3>
                        <p className="footPara1 w-[80%]">
                            When you sign up for Freecash, you join a community of millions of people who choose to make money online. This amazing community can help you to complete the offers fast and earn more money.
                            In this video, one of our community members shares how to get started on Freecash now.
                        </p>
                    </div>
                </div>
            </div>


            {/* footer */}


            {/* Footer */}
            <div className="w-full text-white py-12 bg-transparent min-h-[300px] relative">
                <div className="flex flex-col lg:flex-row lg:justify-between gap-8 px-6">

                    {/* Logo and Description */}
                    <div className="flex flex-col gap-4 lg:w-1/3">
                        <img src="/logo.png" alt="Coin Looty Logo" className="max-w-[300px] w-full" />
                        <p className="max-w-[90%]">
                            Coin Looty is an online reward website for <span className="text-[#FFA900]">new generation</span> where you can start earning online today <span className="text-[#FFA900]">and turn your opinions</span> into cash.
                        </p>

                        {/* Social Icons Row */}
                        <div className="flex flex-wrap items-center gap-3 ">
                            {[0, 1, 2, 3, 4].map(i => (
                                <a key={i} href="">
                                    <img
                                        src={`/zoo100${i}.png`}
                                        alt=""
                                        className=" customicon"
                                    />
                                </a>
                            ))}
                        </div>

                        
                    </div>

                    {/* Links section */}
                    <div className="flex flex-wrap justify-between gap-6 lg:w-2/3">

                        {/* Coinlooty */}
                        <div className="min-w-[150px]">
                            <h3 className="font-bold font-sans" style={{color:"#FFA900"}}>Coinlooty</h3>
                            <hr className="h-1 w-1/2 bg-white -mt-1 mb-3" style={{marginTop:"3px"}} />
                            <div className="flex flex-col gap-2">
                                <a href="#" className=" text-white no-underline">Daily Bonus</a>
                                <a href="#" className=" text-white no-underline">Wallet / My Rewards</a>
                                <a href="#" className=" text-white no-underline">How it Works</a>
                                <a href="#" className=" text-white no-underline">Refer & Earn</a>
                            </div>
                        </div>

                        {/* Support */}
                        <div className="min-w-[150px]">
                            <h3 className="font-bold font-sans" style={{color:"#FFA900"}}>Support</h3>
                            <hr className="h-1 w-1/2 bg-white -mt-1 mb-3" style={{marginTop:"3px"}}/>
                            <div className="flex flex-col gap-2">
                                <a href="#" className=" text-white no-underline">Help Center/FAQ</a>
                                <a href="#" className=" text-white no-underline">Live chat</a>
                                <a href="#" className=" text-white no-underline">Submit a Ticket</a>
                                <a href="#" className=" text-white no-underline">Email Support</a>
                            </div>
                        </div>

                        {/* Legal */}
                        <div className="min-w-[150px]">
                            <h3 className="font-bold font-sans" style={{color:"#FFA900"}}>Legal</h3>
                            <hr className="h-1 w-1/2 bg-white -mt-1 mb-3" style={{marginTop:"3px"}} />
                            <div className="flex flex-col gap-2">
                                <a href="#" className=" text-white no-underline">Privacy Policy</a>
                                <a href="#" className=" text-white no-underline">Terms & Conditions</a>
                                <a href="#" className=" text-white no-underline">Disclaimer</a>
                            </div>
                        </div>

                        {/* Company */}
                        <div className="min-w-[150px]">
                            <h3 className="font-bold font-sans" style={{color:"#FFA900"}}>Company</h3>
                            <hr className="h-1 w-1/2 bg-white -mt-1 mb-3" style={{marginTop:"3px"}}/>
                            <div className="flex flex-col gap-2">
                                <a href="#" className=" text-white no-underline">About Us</a>
                                <a href="#" className=" text-white no-underline">Team</a>
                                <a href="#" className=" text-white no-underline">Career</a>
                            </div>
                        </div>

                        {/* App buttons */}
                        <div className="min-w-[150px] flex flex-col gap-3">
                            <img src="/newgoogleplay.webp" alt="Google Play" className="max-w-[160px] w-full" />
                            <img src="/appstore.png" alt="App Store" className="max-w-[160px] w-full" />
                        </div>
                    </div>
                </div>

                {/* Divider + Disclaimer */}
                <hr className="h-[3px] w-[90vw] bg-white my-8 mx-auto" />
                
                <p className="text-white w-[90%] mx-auto text-center">Copyright © 2025 CoinLooty. All Rights Reserved.</p>
            </div>



            {/*  */}
        </>
    );
};

export default Hero;
