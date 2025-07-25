import React from "react";

const CashoutDashboard = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4" >
            <div className="w-full max-w-6xl rounded-3xl bg-[#0C0E20] text-white shadow-lg border border-yellow-500 p-6 flex flex-col lg:flex-row gap-10" style={{ backgroundImage: `url('/dashboard.png')`, backgroundSize: "cover", backgroundPosition: "center" }}>

                {/* Left Panel */}
                <div className="flex-1 relative">
                    <div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2" >THIS MONTH’S</h2>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">TOTAL CASHOUT</h2>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">$491,186.52</h1>

                        <div className="flex flex-wrap gap-4">
                            <img src="/zoo112.png" alt="Apple" className="h-8 w-8" />
                            <img src="/zoo112.png" alt="Visa" className="h-8 w-8" />
                            <img src="/zoo112.png" alt="Playstore" className="h-8 w-8" />
                            <img src="/zoo112.png" alt="Bitcoin" className="h-8 w-8" />
                            <img src="/zoo112.png" alt="Amazon" className="h-8 w-8" />
                        </div>
                    </div>

                    {/* Optional Floating Coins */}
                    <div className="absolute bottom-0 left-0 hidden md:block">
                        <img src="/coins-floating.png" alt="Coins" className="w-52 opacity-80" />
                    </div>
                </div>

                {/* Right Panel */}
                <div className="flex-1 bg-[#12142B] rounded-2xl p-5 overflow-y-auto max-h-[80vh] space-y-4">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="flex justify-between items-center bg-[#1C1F3A] p-4 rounded-xl shadow-md hover:bg-[#23274d] transition">
                            <div className="flex items-center gap-3">
                                <img
                                    src="/user-avatar.png"
                                    alt="User"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold">Jennifer</p>
                                    <p className="text-xs text-gray-400">1 minute ago</p>
                                </div>
                            </div>
                            <p className="text-lg font-bold text-green-400">$15.00</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CashoutDashboard;