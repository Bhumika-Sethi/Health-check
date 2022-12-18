import React, {useState,useEffect} from 'react'
import axios from 'axios';
import mentalHealthVideo from '../video/mentalHealthVideo.mp4'
import quizimg from '../images/quiz1.jpg';
import mailimg from '../images/needToTalk3.jpg';
import colorgameimg from '../images/colorgame2.jpg';
import drumkitimg from '../images/drumkit6.jpg';
import memeimg from '../images/meme.jpg';
import milestoneimg from '../images/milestone3.jpg';
import eventsimg from '../images/events2.jpg';
import newsimg from '../images/article3.jpg';
import { FadeWrapper } from './FadeWrapper';
import Card from './Card1'

// import quizimg from '../images/quiz1.jpg';

import Discussion from '../video/discussion.mp4';
function Homepage() {
    
    const [advice,setAdvice] =  useState('');
       useEffect(()=> {
        console.log("called");
        fetchAdvice();
      })
    
      function fetchAdvice() {
        axios.get('https://api.adviceslip.com/advice')
          .then((response) => {
            //  const adviced  = response.data.slip;
              console.log(advice);
    
            setAdvice(response.data.slip.advice);
          })
          .catch((error) => {
            console.log(error);
          });
      }

  return (
    <div>
        <video muted loop autoPlay 
            style={{
            position:'absolute',
            top: "0%",
            left: "15.6%",
            width:"86.5%",
            height: '100%',
            objectFit: "fill"
            }}>
                <source src={mentalHealthVideo} type="video/mp4"/>
        </video>
        <div className="card">
          <h1 className="heading"
          style={{
            position: "relative",
            color: "white",
            textAlign: "center"
          }}>{advice}</h1>
          <button className="button" onClick={()=>{fetchAdvice()}}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
        <div className="topDiv">
              {/* <AppearWrapper> */}
                <video autoPlay loop muted className="stylesVideo">
                  <source src={Discussion} type="video/mp4" />
                </video>
              {/* </AppearWrapper>/ */}

              <p>
                Just as physical fitness helps our bodies to stay strong, mental
                fitness helps us to achieve and sustain a state of good mental
                health. When we are mentally healthy, we enjoy our life and
                environment, and the people in it. We can be creative, learn,
                try new things, and take risks. We are better able to cope with
                difficult times in our personal and professional lives. We feel
                the sadness and anger that can come with the death of a loved
                one, a job loss or relationship problems and other difficult
                events, but in time, we are able to get on with and enjoy our
                lives once again. Nurturing our mental health can also help us
                combat or prevent the mental health problems that are sometimes
                associated with a chronic physical illness. In some cases, it
                can prevent the onset or relapse of a physical or mental
                illness. Managing stress well, for instance, can have a positive
                impact on heart disease.
              </p>
            </div>

            <section className="blur">
              <section className="mdbCustom">
                <FadeWrapper>
                  <Card
                    path="/QuizLanding"
                    imgSrc={quizimg}
                    alt={"..."}
                    cardName={`Quiz`}
                    cardDesc={`Take our Mental Health Self Assessment Test to know about
        your mental health. Answer all the questions honestly.`}
                  />
                </FadeWrapper>
                <FadeWrapper>
                  <Card
                    path="/News"
                    imgSrc={newsimg}
                    alt={"..."}
                    cardName={`Articles`}
                    cardDesc={`
            A good article is like a wholesome healthy meal for your
            brain and mental well-being. So check out some latest news
            and feed your brain.`}
                  />
                </FadeWrapper>
                <FadeWrapper>
                  <Card
                    path="/Memes"
                    imgSrc={memeimg}
                    alt={"..."}
                    cardName={`Memes`}
                    cardDesc={`Watch some wholesome memes and share them with your family
            and friends.`}
                  />
                </FadeWrapper>
                <FadeWrapper>
                  <Card
                    path="/MilestonesHome"
                    imgSrc={milestoneimg}
                    alt={"..."}
                    cardName={`Milestones`}
                    cardDesc={`Create tasks and mark them as completed upon successful
            completion. You can see your achievements in the form of a
            timeline and keep yourselves motivated.`}
                  />
                </FadeWrapper>
                <FadeWrapper>
                  <Card
                    path="/Events"
                    imgSrc={eventsimg}
                    alt={"..."}
                    cardName={` Virtual Events`}
                    cardDesc={`Explore virtual events on mental health. Register to the
              events and improve your well-being. Rate the events and ask your
              questions in the FAQ section.`}
                  />
                </FadeWrapper>
                <FadeWrapper>
                  {" "}
                  <Card
                    path="/Drumkit"
                    imgSrc={drumkitimg}
                    alt={"..."}
                    cardName={`Drumkit`}
                    cardDesc={`Play our drumkit by clicking on the drums or by clicking the 
              keyboard keys. You can also record and download it.`}
                  />
                </FadeWrapper>
                <FadeWrapper>
                  <Card
                    path="/ColorGame"
                    imgSrc={colorgameimg}
                    alt={"..."}
                    cardName={`Color Game`}
                    cardDesc={`Play our simple color-memory game to feel focused`}
                  />
                </FadeWrapper>
                <FadeWrapper>
                  <Card
                    path="/Mailer"
                    imgSrc={mailimg}
                    alt={"..."}
                    cardName={`Need To Talk?`}
                    cardDesc={`Feeling Down? Need to talk to someone but don't know how to start!? We're here for u. Just Let us alert your friends that u need a breather!! `}
                  />
                </FadeWrapper>
              </section>
            </section>
            
    </div>
  )
}

export default Homepage;