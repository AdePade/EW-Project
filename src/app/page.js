"use client";
import Image from "next/image";
import { Navbar } from "@/componets/Navbar";
import Link from "next/link";
import styles from "./page.module.css";
import { Carousel } from "@/componets/Carousel";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background}>
        <Image
          src="/HOMELESS-SERVICES-WEB-BANNER.png"
          width="1384"
          height="196"
        ></Image>
      </div>
      <Navbar></Navbar>
      <div className={styles.pageContent}>
      <Carousel></Carousel>
        <div className={styles.sections}>
          <h1>Welcome to Homeless Resources Hub</h1>
          <p>
            At the Homeless Resources Hub, we are dedicated to making a positive
            impact on the lives of individuals facing homelessness. Our mission
            is to provide a single, user-friendly platform where those in need
            can easily find essential resources and support in their community.
          </p>
        </div>
        <div className={styles.cardRow + " " + styles.sections}>
          <Link href="/housing" className={styles.card}>
            <h2>Find Shelter</h2>
            <p>
              Quickly locate nearby shelters and safe accommodations for
              temporary relief.
            </p>
          </Link>
          <Link href="/food" className={styles.card}>
            <h2>Food Assistance</h2>
            <p>
              Access information on local food banks, meal programs, and food
              distribution services.
            </p>
          </Link>
          <Link href="/legal" className={styles.card}>
            <h2>Legal Services</h2>
            <p>
              Discover legal aid organizations that can provide assistance and
              guidance.
            </p>
          </Link>
          <Link href="/clothing" className={styles.card}>
            <h2>Clothing</h2>
            <p>Clothing description</p>
          </Link>
        </div>
        <div className={styles.sections}>
          <h1>Why Choose Us</h1>
          
        </div>

        <div className={styles.sections}>
          <h1>Get Started</h1>
          <p>
            It&apos;s simple to get started. Just enter your location or browse
            by categories to find the help you need. Our goal is to connect you
            with the support that can make a real difference in your life.
          </p>
        </div>
        <div className={styles.sections}>
          <h1>Join Us in Making a Difference</h1>
          <p>
            Whether you&apos;re someone in need, a volunteer, or an organization
            dedicated to helping the homeless, we invite you to be part of our
            community. Together, we can make a positive impact on those who need
            it most.
          </p>
          <p>
            Remember, you&apos;re not alone on this journey. Homeless Resources
            Hub is here to assist you every step of the way.
          </p>
        </div>
      </div>
    </main>
  );
}
