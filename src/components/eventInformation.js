import React from 'react';
import line from "../assets/images/hr-line.png";
import img from "../assets/images/img.png";

class EventInformation extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: "#1E1E1E"}} className="bgimage">
                <div>
                    <div className="text-white md:text-2xl tracking-widest text-10 pt-10 font-bold text-center">EVENT INFORMATION</div>
                    <div className="flex justify-center">
                        <img src={line} alt="hr-line" className="w-1/4 my-4"/>
                    </div>
                    <div className="md:text-2xl text-10 font-bold text-center text-[#38D9BA]">NOVEMBER 2022</div>
                </div>
                <div className="flex md:flex-row flex-col md:justify-around justify-center p-20">
                    <div className="flex flex-col justify-center text-center my-4">
                        <div className="text-[#38D9BA]">
                            <div className="font-bold md:text-3xl text-xl">12</div>
                            <div className="md:text-xl text-sm">sat</div>
                        </div>
                        <div className="text-white md:text-[18px] md:text-10 text-6 py-4 font-bold text-center">FIRST TOUR</div>
                        <div className="text-white md:text-[18px] text-10 text-center">
                            <div>ONLINE</div>
                            <div>TEST</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center text-center my-4">
                        <div className="text-[#38D9BA]">
                            <div className="font-bold md:text-3xl text-xl">26</div>
                            <div>sat</div>
                        </div>
                        <div className="text-white md:text-[18px] text-10 py-4 font-bold text-center">SECOND TOUR</div>
                        <div className="text-white md:text-[18px] text-10 text-center">
                            <div>OFFLINE</div>
                            <div>PACKET TRACER TASK</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center text-center my-4">
                        <div className="text-[#38D9BA]">
                            <div className="font-bold md:text-3xl text-xl">27</div>
                            <div>sun</div>
                        </div>
                        <div className="text-white md:text-[18px] text-10 py-4 font-bold text-center">THIRD TOUR</div>
                        <div className="text-white md:text-[18px] text-10 text-center">
                            <div>OFFLINE</div>
                            <div>QUEST</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventInformation;