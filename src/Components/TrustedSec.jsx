import SectionHead from "./SectionHead";
import TrastedBanner from "../assets/trusted_Banner.jpg";
import FieldIcon_1 from "../assets/field_icon (1).png";
import FieldIcon_2 from "../assets/field_icon (2).png";
import PlayIconWhite from "../assets/play_white_icon.svg"
import Modal from 'react-modal';
import { useState } from "react";
import ReactPlayer from 'react-player'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

function TrustedSec() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
 
  return (
    <section className="py-20">
      <div className="container">
        <SectionHead
          title="We are providing best business service."
          discription="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
        />
        {/* Trusted Main Part */}
        <div className="grid grid-cols-[600px_auto] items-center justify-center gap-25 py-25">
          {/* Video Part */}
          <div className="relative">
            <img src={TrastedBanner} alt="trusted banner" />
            {/* <div className="absolute top-1/2 left-1/2 -translate-1/2 "> 
            </div>*/}
            <div className="size-[97px] absolute top-1/2 left-1/2 -translate-1/2">
              <button onClick={openModal} id="play-video" className="video-play-button">
                <span className="absolute top-1/2 left-1/2 z-10 translate-x-[-10px] translate-y-[-13px]">
                  <img src={PlayIconWhite} alt="white icon" />
                </span>
              </button>

              <div id="video-overlay" class="video-overlay">
                <a class="video-overlay-close">&times;</a>
              </div>
            </div>
          </div>
          {/* Trusted Field Part */}
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-[#252B42] font-bold text-[40px] leading-[57px]">
              Most trusted in our field
            </h3>
            <p className="text-[#737373] font-medium text-[14px] leading-[20px] pt-[10px] pb-[50px]">
              Most calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.
            </p>
            {/* icon Part 1 */}
            <div className="flex justify-center gap-5 pb-[30px]">
              <div className="size-8 flex">
                <img className="size-full" src={FieldIcon_1} alt="icon" />
              </div>
              <div>
                <h5 className="text-text-color font-bold text-[16px] leading-[24px] tracking-[0.1px]">
                  the quick fox jumps over the lazy dog
                </h5>
                <p className="text-second-text-color font-semibold text-[14px] leading-[24px]">
                  Things on a very small scale ...
                </p>
              </div>
            </div>
            {/* icon Part 2 */}
            <div className="flex justify-center gap-5">
              <div className="size-8 flex">
                <img className="size-full" src={FieldIcon_2} alt="icon" />
              </div>
              <div>
                <h5 className="text-text-color font-bold text-[16px] leading-[24px] tracking-[0.1px]">
                  the quick fox jumps over the lazy dog
                </h5>
                <p className="text-second-text-color font-semibold text-[14px] leading-[24px]">
                  Things on a very small scale ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
        <button onClick={closeModal}>X</button>
        <div>
        <ReactPlayer url='https://www.youtube.com/watch?v=-ZYe9ZT8WNQ' />
        </div>
      </Modal>
    </section>
  );
}

export default TrustedSec;
