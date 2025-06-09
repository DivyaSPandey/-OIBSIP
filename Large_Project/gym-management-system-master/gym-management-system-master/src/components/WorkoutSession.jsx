// eslint-disable-next-line no-unused-vars
import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>Top Workout Sessions</h1>
        <p>
          Discover our most popular workout sessions designed to help you
          achieve your fitness goals. From high-intensity interval training to
          strength-building routines, our sessions are crafted by expert
          trainers to ensure you get the most out of your workout.
        </p>
        <img src="/img5.jpg" alt="workout session" />
      </div>
      <div className="wrapper">
        <h1>Featured Bootcamps</h1>
        <p>
          Join our exclusive bootcamps for a transformative fitness experience.
          Our bootcamps offer a mix of cardio, strength training, and functional
          exercises to challenge and motivate you. Whether youre a beginner or
          an advanced athlete, our bootcamps cater to all fitness levels.
        </p>
        <div className="bootcamps">
          <div>
            <h4>HIIT Bootcamp</h4>
            <p>
              Our High-Intensity Interval Training (HIIT) bootcamp is designed
              to push your limits with short bursts of intense exercise followed
              by recovery periods. Perfect for burning calories and building
              endurance.
            </p>
          </div>
          <div>
            <h4>Strength & Conditioning</h4>
            <p>
              Focus on building strength and improving overall conditioning with
              exercises that target major muscle groups. This bootcamp is ideal
              for those looking to increase their power and muscle mass.
            </p>
          </div>
          <div>
            <h4>Cardio Kickboxing</h4>
            <p>
              Get your heart pumping with our cardio kickboxing bootcamp. This
              high-energy class combines martial arts techniques with
              cardiovascular exercise to improve agility, speed, and stamina.
            </p>
          </div>
          <div>
            <h4>Functional Fitness</h4>
            <p>
              Enhance your functional strength and mobility with exercises that
              mimic everyday movements. This bootcamp is great for improving
              balance, flexibility, and overall physical fitness.
            </p>
          </div>
          <div>
            <h4>Heavy Weight Lifting</h4>
            <p>
              Push your limits with our intense heavy weight lifting sessions.
              Designed to build strength and muscle mass, these workouts focus
              on compound movements and high-intensity training to help you
              achieve your fitness goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
