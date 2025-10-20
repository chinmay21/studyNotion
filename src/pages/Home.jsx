import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import HighlightText from '../components/core/HomePage/HighlightText'

import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import ReviewSlider from '../components/common/ReviewSlider'

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Section 1 */}
      <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between'>
        <Link to={"/signup"}>
          <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all duration-200 hover:scale-95 w-fit'>
            <div className='flex flex-row items-center gap-2 rounded-full px-8 sm:px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblack-900'>
              <p className='text-sm sm:text-base'>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className='text-center text-2xl sm:text-3xl md:text-4xl font-semibold mt-7'>
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        <div className='mt-4 w-full sm:w-[90%] text-center text-sm sm:text-base md:text-lg font-bold text-richblack-300'>
          With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
        </div>

        <div className='flex flex-col sm:flex-row gap-4 sm:gap-7 mt-8'>
          <CTAButton active={true} linkto={"/signup"}> 
            Learn More
          </CTAButton>

          <CTAButton active={false} linkto={"/login"}> 
            Book a Demo
          </CTAButton>
        </div>

        <div className='w-full mx-3 my-12 shadow-blue-200 overflow-hidden rounded-lg'>
          <video
            muted
            loop
            autoPlay
            className="w-full h-auto object-cover rounded-lg"
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Sections */}
        <div className='flex flex-col gap-10 w-full'>
          <CodeBlocks 
            position={"flex flex-col lg:flex-row"}
            heading={
                <div className='w-full mx-auto text-2xl sm:text-3xl md:text-4xl font-semibold text-center lg:text-left'>
                    Unlock Your <HighlightText text={"coding potential"} /> with our online courses
                </div>  
            }
            subheading="Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            ctabtn1={{ btnText: "Try It Yourself", linkto: "/signup", active: true }}
            ctabtn2={{ btnText: "Learn More", linkto: "/login", active: false }}
            codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><link rel="stylesheet" href="styles.css">\n/head>\n`}
            codeColor={"text-yellow-25"}
          />

          <CodeBlocks 
            position={"flex flex-col lg:flex-row-reverse"}
            heading={
              <div className='text-2xl sm:text-3xl md:text-4xl font-semibold text-center lg:text-left'>
                Unlock Your <HighlightText text={"coding potential"} /> with our online courses
              </div>
            }
            subheading="Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            ctabtn1={{ btnText: "Try It Yourself", linkto: "/signup", active: true }}
            ctabtn2={{ btnText: "Learn More", linkto: "/login", active: false }}
            codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><link rel="stylesheet" href="styles.css">\n/head>\n`}
            codeColor={"text-yellow-25"}
          />
        </div>

        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className='bg-pure-greys-5 text-richblack-700 w-full'>
        <div className='homepage_bg h-[310px] sm:h-[350px] md:h-[400px] lg:h-[450px]'>
          <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
            <div className='h-[150px] sm:h-[100px]'></div>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-7 text-white'>
              <CTAButton active={true} linkto={"/signup"}>
                <div className='flex items-center gap-3'>
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                Learn more
              </CTAButton>
            </div>
          </div>
        </div>

        <div className='mx-auto w-11/12 max-w-maxContent flex flex-col md:flex-row items-center justify-between gap-10 py-10'>
          <div className='w-full md:w-[45%] text-center md:text-left text-xl sm:text-2xl md:text-4xl font-semibold'>
            Get the Skills you need for a <HighlightText text={"Job that is in demand"} />
          </div>

          <div className='w-full md:w-[45%] flex flex-col gap-5 items-center md:items-start'>
            <p className='text-sm sm:text-base md:text-lg text-center md:text-left'>
              The modern StudyNotion dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
            </p>
            <CTAButton active={true} linkto={"/signup"}>
              Learn more
            </CTAButton>
          </div>
        </div>

        <TimelineSection />
        <LearningLanguageSection />
      </div>

      {/* Section 3 */}
      <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 bg-richblack-900 text-white py-10'>
        <InstructorSection />
        <h2 className='text-center text-2xl sm:text-3xl md:text-4xl font-semibold mt-10'>Reviews from Other Learners</h2>
        <ReviewSlider />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home

