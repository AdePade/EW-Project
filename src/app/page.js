'use client';
import Image from 'next/image';
import { Navbar } from '@/componets/Navbar';
import Link from 'next/link';
import styles from './page.module.css';
import Slider from "react-slick";

export default function Home() {
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
return (
<main className={styles.main}>
  <div className={styles.background}>
  <Image src='/HOMELESS-SERVICES-WEB-BANNER.png' width='1384' height='196'></Image>
  </div>
  <Navbar>
  </Navbar>
  <div className={styles.pageContent}>
    <div className={styles.sections}>
    <h1>Welcome to Homeless Resources Hub</h1>
      <p>At the Homeless Resources Hub, we are dedicated to making a positive impact on the lives of individuals facing 
        homelessness. Our mission is to provide a single, user-friendly platform where those in need can easily find 
        essential resources and support in their community.</p>
    </div>
    <div className={styles.cardRow + ' ' + styles.sections}>
    <Link href="/housing" className={styles.card}>
      <h2>Find Shelter</h2>       
        <p>Quickly locate nearby shelters and safe accommodations for temporary relief.</p>
        </Link>
        <Link href="/food" className={styles.card}>
      <h2>Food Assistance</h2>
        <p>Access information on local food banks, meal programs, and food distribution services.</p>
        </Link>
        <Link href="/legal" className={styles.card}>
      <h2>Legal Services</h2>
        <p>Discover legal aid organizations that can provide assistance and guidance.</p>
        </Link>
        <Link href="/clothing" className={styles.card}>
      <h2>Clothing</h2>
        <p>Clothing description</p>
        </Link>
    
    </div>
    <div className={styles.sections}>
        <h1>Why Choose Us</h1>
    <Slider {...settings}>
   
        <div className={styles.sections}>
          <Image src="/pexels-mart-production-8078386.jpg" width={300} height={200} alt="Simplicity Image" />
          <h2>Simplicity: Our user-friendly interface</h2>
          <p>Our user-friendly interface makes it easy to find the resources you need, even if you have limited online experience.</p>
          </div>

          <div className={styles.sections}>
          <Image src="/pexels-mart-production-8078441.jpg" width={300} height={200} alt="Comprehensive Listings Image" />
          <h2>Comprehensive Listings: We strive to provide up-to-date</h2>
          <p>We strive to provide up-to-date and comprehensive listings of essential resources to meet your immediate needs.</p>
          </div>

          <div className={styles.sections}>
          <Image src="/pexels-pixabay-35183.jpg" width={300} height={200} alt="Community-Driven Image" />
          <h2>Community-Driven: We believe in the power of community support</h2>
          <p>We believe in the power of community support. Connect with local organizations and volunteers dedicated to helping the homeless.</p>
          </div>

          <div className={styles.sections}>
          <Image src="/pexels-timur-weber-9532020.jpg" width={300} height={200} alt="Your Voice Matters Image" />
          <h2>Your Voice Matters: Share your experiences</h2>
          <p>Share your experiences, feedback, and suggestions. We are here to listen and improve our platform continually.</p>
          </div>

      
    </Slider>
    


<div className={styles.sections}>
<h1>Get Started</h1>
<p>It's simple to get started. Just enter your location or browse by categories to find the help you need. Our goal is to connect you with the support that can make a real difference in your life.</p>
</div>
<div className={styles.sections}>
  <h1>Join Us in Making a Difference</h1>
  <p>Whether you're someone in need, a volunteer, or an organization dedicated to helping the homeless, we invite you to be part of our community. Together, we can make a positive impact on those who need it most.</p>
  <p>Remember, you're not alone on this journey. Homeless Resources Hub is here to assist you every step of the way.</p>
</div>
  </div>
  
</main>
)
}
