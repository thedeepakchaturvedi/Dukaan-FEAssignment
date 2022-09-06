import React from "react";
import './SloganComponent.css'
import Slogans from "./Slogans";

const SloganComponent = () => {
    const content = ["There is no Sore it will Not Heal, No cool it will not Subdue.","coziness building for tomorrow"];
    return(
        <div className="slogan-outer">
            <div className="slogan-header">
                <div className="heading">
                    Free slogan maker
                </div>
                <div className="description">
                    Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.
                </div>
            
            </div>

            <div className="input-slogan">
                <div className="input-heading">
                    Word for your slogan
                </div>
                <div className="input-container">
                    <input type="text" value="cozy"/>
                    <div className="cross">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#4D4D4D" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
                    </div>
                </div>
            </div>

            <div className="generate-slogans">
                <div className="gen-btn">
                    <div className="txt">Generate slogans</div>
                </div>
            </div>

            <div className="hr-1">
            </div>

            <div className="slogan-output">
                <div className="heading">
                    <div className="txt">
                        We have generated 1,023 slogans for “cozy”
                    </div>

                    <div className="dwn-btn">
                        <div className="btn-txt">
                            Download all
                        </div>
                    </div>
                </div>
            </div>

            <div className="slogan-output-container">
                {
                    [...Array(18)].map((ele, index) => 
                        index % 2
                            ? <Slogans content={content[1]}/> 
                            : <Slogans content={content[0]}/>
                    )
                }
            </div>

            <div className="hr-2">
            </div>

            <div className="pagination-container">
                <div className="pagination">
                    <div className="pages">
                        <div className="one"><div>1</div></div>
                        <div className="two">2</div>
                        <div className="three">3</div>
                        <div className="dot">...</div>
                        <div className="two-one">21</div>
                    </div>
                </div>
                <div className="nxt-btn">
                    <div className="nxt-txt">Next <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#146EB4" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg> </div>
                </div>
            </div>

        </div>
    )
}

export default SloganComponent;