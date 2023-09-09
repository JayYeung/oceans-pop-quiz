import Head from 'next/head';
import { useState } from 'react';

export default function OceanEquations() {
  const [showDensitySolution, setShowDensitySolution] = useState(false);
  const [showDepthSolution, setShowDepthSolution] = useState(false);
  const [showShadowSolution, setShowShadowSolution] = useState(false);
  return (
    <>
      <Head>
        <title>Ocean Equations</title>
        <meta name="description" content="Learn about key ocean equations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center bg-cover min-h-screen" style={{ backgroundImage: "url('/joseph-barrientos-oQl0eVYd_n8-unsplash.jpg')" }}>
        
        <header className="py-4 bg-opacity-60 bg-blue-500">
          <h1 className="text-4xl font-bold">Ocean Equations</h1>
          <p className="italic">By <a href="https://jayyeung.vercel.app">Jay Yeung</a></p>
          <nav className="space-x-4">
            <a href="#density" className="text-lg">Density</a>
            <a href="#depth" className="text-lg">Depth</a>
            <a href="#shadow" className="text-lg">Shadow</a>
          </nav>
        </header>
        
        <section id="density" className="py-4 px-20 text-left bg-opacity-60 bg-white">
          <h2 className="text-2xl font-semibold">Density</h2>
          <p>Equation: Density (D) = Mass (M) / Volume (V)</p>
          <p>M = Mass of the object
          <br></br>V = Volume occupied by the object</p>
          <p>Problem: Calculate the density of a unicorn inflatable filled with air that takes up 0.1 m^3 and weighs 3 lbs.</p>
          <button 
            onClick={() => setShowDensitySolution(!showDensitySolution)}
            className="mt-2 px-2 py-0.5 bg-cyan-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Show/Hide Solution
          </button>
          {showDensitySolution && (
            <p>
              Density (D) = 3 lbs/0.1 m^3
              <br></br>D = 30 lbs/m^3
            </p>
          )}
        </section>
        
        <section id="depth" className="py-4 px-20 text-left bg-opacity-60 bg-white">
          <h2 className="text-2xl font-semibold">Depth</h2>
          <p>Equation: Depth (D) = Speed of Sound (V) * Time Taken (T) / 2</p>
          <p>V = Speed of sound in the medium (e.g., seawater)
          <br></br>T = Time taken for the soundwave to travel and return</p>
          <p>Problem: If a soundwave takes 0.86 seconds to travel from the hull of a ship to the bottom of the ocean and back, how deep is the water? (hint- The average speed of sound in seawater is 1533 m/s.)</p>
          <button 
            onClick={() => setShowDepthSolution(!showDepthSolution)}
            className="mt-2 px-2 py-0.5 bg-cyan-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Show/Hide Solution
          </button>
          {showDepthSolution && (
            <p>
              Depth (D) = 1533 m/s * 0.86 s / 2
              <br></br>D = 659.19 m
            </p>
          )}
        </section>
        
        <section id="shadow" className="py-4 px-20 text-left bg-opacity-60 bg-white">
          <h2 className="text-2xl font-semibold">Shadow</h2>
          <p>Equation: Angle of Shadow (A) / 360 degrees = Known Distance (K) / Total Circumference (C)</p>
          <p>A = Angle covered by the shadow
          <br></br>K = Known distance corresponding to the shadow angle
          <br></br>C = Total circumference or distance to be determined</p>
          <p>Problem: If a shadow on Earth covers 7.2 degrees, and the known distance is 800 km, what is the total circumference of Earth?</p>
          <button 
            onClick={() => setShowShadowSolution(!showShadowSolution)}
            className="mt-2 px-2 py-0.5 bg-cyan-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Show/Hide Solution
          </button>
          {showShadowSolution && (
            <p>
              7.2 degrees / 360 degrees = 800 km / C
              <br></br>C ≈ 40000 km
            </p>
          )}
        </section>
        
        <footer className="w-full py-4 text-center text-gray-500 text-sm bg-opacity-60 bg-blue-500">
          &copy; 2023 . All rights reserved. By <a href="https://jayyeung.vercel.app">Jay Yeung</a>
        </footer>
      </div>
    </>
  );
}
