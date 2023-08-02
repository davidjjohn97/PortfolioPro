import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/scrollService";
import Animations from "../../utilities/animations";
import "./Testimonials.css";
import chris from "../../assets/Testimonials/chris.png";
import paul from "../../assets/Testimonials/paul.png";
import tristu from "../../assets/Testimonials/tristu.png";
import shape from "../../assets/Testimonials/shape-bg.png";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeIScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My Client Say About Me"}
      />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Throughout his tenure, David's technical expertise 
                      in full stack development, with a strong focus on ReactJs and NodeJs.
                      What set David apart from his peers was his proactive and forward-thinking approach.
                      He consistently sought out opportunities to optimize existing processes and improve 
                      the overall efficiency of our development workflows.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={chris} alt="no internet connection"></img>
                    <h5>Chris Boutiette</h5>
                    <p>Manaager, Software Engineering at Shell Tech Works, Boston</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      As a senior software engineer at Shell Techworks, I supervised David’s
                       work as an intern on a software project. He proved capable at both front-end
                        and backend work in JavaScript and TypeScript, using React as a framework.
                         He coded a comprehensive set of tests for the calculation engine, which analyzes
                          data related to surface oil and gas wells. David was a pleasure to work with;
                           friendly, conscientious, and receptive to criticism of his code when it needed
                            modification. Due to other priorities for the team, there were long stretches 
                            when David was the only person working on the project, and he was able to complete
                             his work with minimal supervision during those times.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={paul} alt="no internet connection"></img>
                    <h5>Paul Chernoch</h5>
                    <p>Senior Software Engineer at Shell Tech Works</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I had the opportunity of working with David at Keyvalue Software Systems.
                       We started our professional careers together and from day one he was a great teammate,
                        always willing to help. He consistently gave his 100 percent and went the extra mile
                         to get work done in a timely manner. I was lucky to have him as my coworker and
                          we very much miss him around the office. Any team would be lucky to have him,
                           and if the opportunity comes I would be more than happy to work with him again.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={tristu} alt="no internet connection"></img>
                    <h5>Tristan Rodriguez</h5>
                    <p>Senior Software Engineer at KeyValue Software Systems</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="image not responding" />
      </div>
    </div>
  );
}