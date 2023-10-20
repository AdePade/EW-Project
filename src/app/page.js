import Image from 'next/image'
import { Navbar } from '@/componets/Navbar'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar>
      </Navbar>
      <h1>Welcome to Homeless Resources Hub</h1>
      <p>At the Homeless Resources Hub, we are dedicated to making a positive impact on the lives of individuals facing homelessness. Our mission is to provide a single, user-friendly platform where those in need can easily find essential resources and support in their community.</p>
      <h2>Find Shelter</h2>                {/* Add Link */}
        <p>Quickly locate nearby shelters and safe accommodations for temporary relief.</p>
      <h2>Food Assistance</h2>
        <p>Access information on local food banks, meal programs, and food distribution services.</p>
      <h2>Legal Services</h2>
        <p>Discover legal aid organizations that can provide assistance and guidance.</p>
      <h2>Clothing</h2>
        <p>Clothing description</p>

      <h1>Why Choose Us</h1>
      <ul>
        <li>Simplicity: Our user-friendly interface makes it easy to find the resources you need, even if you have limited online experience.</li>
        <li>Comprehensive Listings: We strive to provide up-to-date and comprehensive listings of essential resources to meet your immediate needs.</li>
        <li>Community-Driven: We believe in the power of community support. Connect with local organizations and volunteers dedicated to helping the homeless.</li>
        <li>Your Voice Matters: Share your experiences, feedback, and suggestions. We are here to listen and improve our platform continually.</li>
      </ul>

    <h1>Get Started</h1>
    <p>It's simple to get started. Just enter your location or browse by categories to find the help you need. Our goal is to connect you with the support that can make a real difference in your life.</p>

    <h1>Join Us in Making a Difference</h1>
    <p>Whether you're someone in need, a volunteer, or an organization dedicated to helping the homeless, we invite you to be part of our community. Together, we can make a positive impact on those who need it most.</p>
    <p>Remember, you're not alone on this journey. Homeless Resources Hub is here to assist you every step of the way.

Feel free to customize this description to match the specific tone and message you want to convey on your website's home page.</p>
    </main>
  )
}
