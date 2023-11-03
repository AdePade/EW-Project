import styles from "./page.module.css";
import Image from "next/image";
import { Navbar } from "@/componets/Navbar";

export default function HousingPage() {
  return (
    <main className={styles.main}>
      <div className={styles.background}>
        <Image
          src="/HOUSING-BANNER.png"
          width={1384}
          height={196}
          alt="Housing Banner"
        />
      </div>
      <Navbar />
      <div className={styles.pageContent}>
        <div className={styles.sections}>
          <h1>Find Shelter</h1>
          <p>
            Quickly locate nearby shelters and safe accommodations for temporary
            relief.
          </p>
        </div>
        <div className={styles.sections}>
          <Image
            src="/homeless man.webp"
            width={600}
            height={400}
            alt="Shelter Image"
          />
          <p>Here you can add more details about finding shelter.</p>
        </div>
      </div>
    </main>
  );
}
