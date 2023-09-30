import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "/images/logo.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Enter a valid Email")
      .required("Email is Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    navigate("/signup");
  };

  return (
    <div className="home">
      <div className="header">
        <img
          src={
            "https://assets.nflxext.com/ffe/siteui/vlv3/d7af077c-af5a-4055-8f9a-740a43588583/3fa6713a-569f-4688-9c1a-ce9fb79ad501/NP-en-20230717-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          }
          alt="bgImg"
          className="bgImg"
        />
        <div className="top">
          <img src={logo} alt="logo" className="logo" />

          <ul className="signin">
            <li>
              <Link
                to="/signin"
                style={{
                  position: "absolute",
                  textDecoration: "none",
                  color: "white",
                  left: "0.9vw",
                  top: "0.5vh",
                }}
              >
                {" "}
                Sign In
              </Link>
            </li>
          </ul>
        </div>
        <div className="intro">
          <Text-1>Unlimited movies, TV shows, and more</Text-1>
          <Text-2>Watch anywhere. Cancel anytime.</Text-2>
          <Text-3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </Text-3>
          <nav className="navbar">
            {" "}
            <form
              className="d-flex"
              role="search"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="name"
                placeholder="Email address"
                {...register("email")}
              />
              <p>{errors.email?.message}</p>
              <button className="getStarted">Get Started</button>
            </form>
          </nav>
        </div>
      </div>

      {/* ------------------------------------------------------- */}
      {/* ------------------------------------------------------- */}
      {/* ------------------------------------------------------- */}
      {/* Second*/}

      <div className="second">
        <div className="second_text">
          <Text-1>Enjoy on your TV</Text-1>
          <Text-2>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </Text-2>
        </div>
        <div className="second_visuals">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="tvImg"
            className="tvImg"
            width={600}
          />
          <video loop autoPlay muted>
            <source
              src={
                "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              }
            />
          </video>
        </div>
      </div>

      {/* ------------------------------------------- */}
      {/* ------------------------------------------- */}
      {/* ------------------------------------------- */}
      {/* Third */}

      <div className="third">
        <div className="third_text">
          <Text-1>Download your shows to watch offline</Text-1>
          <Text-2>
            Save your favorites easily and always have something to watch.
          </Text-2>
        </div>
        <div className="third_visuals">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="stranger1"
            className="stranger1"
          />
          <div className="box">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt="stranger2"
              className="stranger2"
            />
            <div className="box_text">
              <Text-1>Stranger Things</Text-1>
              <Text-2>Downloading...</Text-2>
            </div>
            <div className="downloadImg">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                alt="downloadImg"
                className="downloadImg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------- */}
      {/* ------------------------------------------- */}
      {/* ------------------------------------------- */}
      {/* Fourth */}

      <div className="fourth">
        <div className="fourth_text">
          <Text-1>Watch everywhere</Text-1>
          <Text-2>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </Text-2>
        </div>
      </div>

      {/* ------------------------------------------- */}
      {/* ------------------------------------------- */}
      {/* ------------------------------------------- */}
      {/* Fifth */}

      <div className="fifth">
        <div className="fifth_text">
          <Text-1>Create profiles for kids</Text-1>
          <Text-2>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </Text-2>
        </div>
        <div className="fifth_visual">
          <img
            src="https://occ-0-7254-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
            alt="kidsPhoto"
            height={435}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
