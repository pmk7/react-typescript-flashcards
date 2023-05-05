import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import CreateSvg from "../assets/create.svg";
import StudySvg from "../assets/study.svg";
import AchieveSvg from "../assets/achieve.svg";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
}

interface Step {
  id: number;
  image: string;
  title: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John",
    title: "Language Enthusiast",
    quote:
      "The interactive flashcards made learning French a breeze! Highly recommend!",
    image: profile1,
  },

  {
    id: 2,
    name: "Jane",
    title: "Traveler",
    quote:
      "A game-changer for communicating with locals during my travels. Love it!",
    image: profile2,
  },
  {
    id: 3,
    name: "Sarah",
    title: "Business Professional",
    quote:
      "Mastered multiple languages, expanding my business worldwide. Outstanding!",
    image: profile3,
  },
];

export const steps: Step[] = [
  {
    id: 1,
    image: CreateSvg,
    title: "Create Flashcards",
    text: "Build your personalized flashcard sets with ease.",
  },
  {
    id: 2,
    image: StudySvg,
    title: "Study",
    text: "Learn at your own pace and track your progress.",
  },
  {
    id: 3,
    image: AchieveSvg,
    title: "Achieve Goals",
    text: "Master languages and reach your learning objectives.",
  },
];
