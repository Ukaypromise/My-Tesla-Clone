import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Main() {
  return (
    <Container>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Dev<span>Promise</span>
          </h3>

          <p className="footer-links">
            <a href="#" class="link-1">
              HTML
            </a>

            <a href="#">CSS</a>

            <a href="#">Javascript</a>

            <a href="#">ReactJS</a>

            <a href="#">NodeJS</a>
          </p>
          <p>HTML</p>
          <SkillBar>
            <div className="contain">
              <div className="skill html">90%</div>
            </div>
          </SkillBar>
          <p>CSS</p>
          <SkillBar>
            <div className="contain">
              <div className="skill css">75%</div>
            </div>
          </SkillBar>
          <p>JAVASCRIPT</p>
          <SkillBar>
            <div className="contain">
              <div className="skill js">70%</div>
            </div>
          </SkillBar>
          <p>REACT JS</p>
          <SkillBar>
            <div className="contain">
              <div className="skill react">65%</div>
            </div>
          </SkillBar>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Port Harcout, Nigeria</span>
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+2347064505393</p>
          </div>

          <div>
            <p>
              <a href="promiseukaimo@gmail.com">promiseukaimo@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About Me</span>
            Meticulous Frontend developer with over 6months of frontend
            experience and passion for responsive website/web application
            design. I am a firm believer in the mobile-first approach.
            Freecodecamp certified.
          </p>

          <div className="footer-icons">
            <a href="https://www.facebook.com/ukapromiseimo">
              <Facebook />
            </a>
            <a href="https://twitter.com/PromiseUkay">
              <Twitter />
            </a>
            <a href="https://www.linkedin.com/in/promise-uka-5a1450173">
              <LinkedIn />
            </a>
            <a href="https://github.com/Ukaypromise">
              <GitHub />
            </a>
          </div>
        </div>
      </footer>
    </Container>
  );
}

export default Main;

const SkillBar = styled.div`
  width: 100%;
  background-color: #ddd;
  .skill {
    text-align: right;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
  }
  .html {
    width: 90%;
    background-color: #04aa6d;
  }
  .css {
    width: 75%;
    background-color: #2196f3;
  }
  .js {
    width: 70%;
    background-color: #f44336;
  }
  .react {
    width: 65%;
    background-color: orange;
  }
`;

const Facebook = styled(FacebookIcon)`
  cursor: pointer;
`;
const Twitter = styled(TwitterIcon)`
  cursor: pointer;
`;
const LinkedIn = styled(LinkedInIcon)`
  cursor: pointer;
`;
const GitHub = styled(GitHubIcon)`
  cursor: pointer;
`;

const Container = styled.div`
  section {
    width: 100%;
    display: inline-block;
    background: #333;
    height: 50vh;
    text-align: center;
    font-size: 22px;
    font-weight: 700;
    text-decoration: underline;
  }

  .footer-distributed {
    background: #666;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    font: bold 16px sans-serif;
    padding: 55px 50px;
  }

  .footer-distributed .footer-left,
  .footer-distributed .footer-center,
  .footer-distributed .footer-right {
    display: inline-block;
    vertical-align: top;
  }

  /* Footer left */

  .footer-distributed .footer-left {
    width: 40%;
  }

  /* The company logo */

  .footer-distributed h3 {
    color: #ffffff;
    font: normal 36px "Open Sans", cursive;
    margin: 0;
  }

  .footer-distributed h3 span {
    color: lightseagreen;
  }

  /* Footer links */

  .footer-distributed .footer-links {
    color: #ffffff;
    margin: 20px 0 12px;
    padding: 0;
  }

  .footer-distributed .footer-links a {
    display: inline-block;
    line-height: 1.8;
    font-weight: 400;
    text-decoration: none;
    color: inherit;
  }

  .footer-distributed .footer-company-name {
    color: #222;
    font-size: 14px;
    font-weight: normal;
    margin: 0;
  }

  /* Footer Center */

  .footer-distributed .footer-center {
    width: 35%;
  }

  .footer-distributed .footer-center i {
    background-color: #33383b;
    color: #ffffff;
    font-size: 25px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    text-align: center;
    line-height: 42px;
    margin: 10px 15px;
    vertical-align: middle;
  }

  .footer-distributed .footer-center i.fa-envelope {
    font-size: 17px;
    line-height: 38px;
  }

  .footer-distributed .footer-center p {
    display: inline-block;
    color: #ffffff;
    font-weight: 400;
    vertical-align: middle;
    margin: 0;
  }

  .footer-distributed .footer-center p span {
    display: block;
    font-weight: normal;
    font-size: 14px;
    line-height: 2;
  }

  .footer-distributed .footer-center p a {
    color: lightseagreen;
    text-decoration: none;
  }

  .footer-distributed .footer-links a:before {
    content: "|";
    font-weight: 300;
    font-size: 20px;
    left: 0;
    color: #fff;
    display: inline-block;
    padding-right: 5px;
  }

  .footer-distributed .footer-links .link-1:before {
    content: none;
  }

  /* Footer Right */

  .footer-distributed .footer-right {
    width: 20%;
  }

  .footer-distributed .footer-company-about {
    line-height: 20px;
    color: white;
    font-size: 16px;
    font-weight: normal;
    margin: 0;
  }

  .footer-distributed .footer-company-about span {
    display: block;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .footer-distributed .footer-icons {
    margin-top: 25px;
  }

  .footer-distributed .footer-icons a {
    display: inline-block;
    width: 35px;
    height: 35px;
    cursor: pointer;
    // background-color: #33383b;
    border-radius: 2px;

    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;

    margin-right: 3px;
    margin-bottom: 5px;
  }

  /* If you don't want the footer to be responsive, remove these media queries */

  @media (max-width: 880px) {
    .footer-distributed {
      font: bold 14px sans-serif;
    }

    .footer-distributed .footer-left,
    .footer-distributed .footer-center,
    .footer-distributed .footer-right {
      display: block;
      width: 100%;
      margin-bottom: 40px;
      text-align: center;
    }

    .footer-distributed .footer-center i {
      margin-left: 0;
    }
  }
  p {
    color: white;
  }
  .footer-center {
    padding-left: 20px;
  }
`;
