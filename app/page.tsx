"use client";
import SongInput from '../components/SongInput'; // Adjust path if necessary
import Navbar from '../components/Navbar'; // Adjust the path if necessary
import Footer from '../components/Footer'; // Import the Footer component
import AboutUs from '../components/about'; // Adjust the path as needed
import How from '../components/HowItWorks'; // Adjust the path as needed
import Spotify from '../components/spotify'; // Adjust the path as needed

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'grey' }}>
      <div style={{ padding: "25px" }}>
        <Navbar />
      </div>
      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', marginBottom: "0px" }}>
        <SongInput />
      </main>
      <div style={{
        paddingTop: "25px",
        width: "90vw",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh", // Ensures content area takes at least 70vh
        display: 'flex',
        flexDirection: 'column'
      }}>
        <AboutUs />
        <How />
        <Spotify />
        <Footer />
      </div>
    </div>
  );
}
