import { useState } from 'react';
import Head from 'next/head';

type RevealState = {
  [key: string]: boolean;
};

export default function MarinePhylumQuiz() {
  const [revealedPhylum, setRevealedPhylum] = useState<RevealState>({});
  const [revealedInfo, setRevealedInfo] = useState<RevealState>({});

  const toggleReveal = (id: string) => {
    setRevealedPhylum((prevState: RevealState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const toggleRevealInfo = (title: string) => {
    setRevealedInfo((prevState: RevealState) => ({
      ...prevState,
      [title]: !prevState[title]
    }));
  };

  const phylums = [
    {
      id: 'porifera',
      name: 'Porifera',
      description: '→ Do not have any symmetry, no true tissues \n→ porous tubular body and they are non-motile \n→ ex: sponges.',
      photo: 'Screenshot 2023-11-26 at 4.49.15 PM.png',
    },
    {
      id: 'cnidaria',
      name: 'Cnidaria',
      description: '→ Have radial symmetry (coral, jelly, etc.).',
      photo: 'Cassiopeia-jellyfish.webp',
    },
    {
      id: 'annelida',
      name: 'Annelida',
      description: '→ cylindrical, segmented bodies \n→ bilaterally symmetrical \n→ have a true body cavity (like worms, leeches).',
      photo: 'Screenshot 2023-11-26 at 4.49.19 PM.png',
    },
    {
      id: 'arthropoda',
      name: 'Arthropoda',
      description: '→ They have jointed appendages, and their body is bilaterally symmetrical \n→ segmented bodies + exoskeleton \n→ presence of an open circulatory system is seen \n→ ex: lobsters, crab, shrimp.',
      photo: 'Screenshot 2023-11-26 at 4.49.24 PM.png',
    },
    {
      id: 'mollusca',
      name: 'Mollusca',
      description: '→ bilaterally symmetrical \n→ their circulatory system is open and limbs are seen \n→ ex: clams, squid, octopus, etc.',
      photo: 'Screenshot 2023-11-26 at 4.49.33 PM.png',
    },
    {
      id: 'echinodermata',
      name: 'Echinodermata',
      description: '→ water vascular system and 5-sided radial symmetry \n→ exoskeleton made of calcium carbonate (seat urchins, starfish, etc.).',
      photo: 'Screenshot 2023-11-26 at 4.49.37 PM.png',
    },
    {
      id: 'chordata',
      name: 'Chordata',
      description: '→ bilaterally symmetrical, well developed organ system \n→ closed circulatory system \n→ presence of notochord and nerve cord - things with backbones (mammals, reptiles, fish, birds).',
      photo: 'Screenshot 2023-11-26 at 4.49.28 PM.png',
    },
    {
      id: 'platyhelminthes',
      name: 'Platyhelminthes',
      description: '→ Bilateral symmetry \n→ A body plan with a head and tail (anterior-posterior polarity) \n→ Three layers of tissues (triploblastic) \n→ No body cavity (acoelomate) \n→ Flattened body shape to maximize diffusion of nutrients and oxygen',
      photo: '1000292_orig.jpg', 
    },    
  ];

  const more_info = [
    {
      title: 'What happens when CO2 is absorbed in the ocean?',
      bullets: [
        '→ the total dissolved inorganic carbon increases (think how the carbon breaks down from carbonic acid to bicarbonate to carbonate, etc.) + the pH increases as the breakdown of the carbon dioxide will lead to more hydrogen ions in this process.',
        'However, Ocean acidification can cause organisms’ shells and skeletons made from calcium carbonate to dissolve.'
      ],
      photo: 'paragraphs/Screenshot 2023-11-26 at 5.11.19 PM.png'
    },
    {
      title: 'What is the saturation state?',
      bullets: [
        'The saturation state measures how much aragonite can dissolve or the depth under which calcium carbonate mineral is unstable + dissolves',
        'it is used to track ocean acidification because it measures the carbonate ion concentration',
        'the lower the number, the more severe the conditions of acidification are as shells and other aragonite structures will begin to dissolve.'
      ], 
      photo: 'paragraphs/Screenshot 2023-11-26 at 5.11.24 PM.png'
    }, 
    {
      title: 'What is the Pacific Decadal Oscillation (PDO), and why is it important?', 
      bullets: [
        'First, there are changes in the temperature in the ocean (in the Pacific Ocean)',
        'sometimes there is a colder horse shoe pattern of water along the US west coast which leads to increased rain in Australia, etc.',
        'other times there is a warmer horse show pattern of water along the US west coast which leads to greater amounts of salmon in southern Alaska',
        'the impact of industrial pollution and the long-lasting fingerprints of El Nino and La Nina events can explain the cause of the changes in the PDO'
      ], 
      photo: 'paragraphs/Screenshot 2023-11-26 at 5.13.04 PM.png'
    },
    {
      title: 'Explain the conservative, nutrient-like, and scavenged profiles in the ocean. ',
      bullets: [
        'Conservative profiles - concentration of elements varies at different levels in the ocean.',
        'Nutrient-like profiles → taken up in the surface ocean remineralized/recycled/regenerated at depth → ex: nitrogen may increase in concentration in the deeper depths of the ocean because the conditions are more suitable there → this relates to the scavenged profiles',
        'Scavenged profiles - high concentrations near the source such as hydrothermal vents) and less in the other depths of the ocean '
      ],
      photo: 'paragraphs/Screenshot 2023-11-26 at 5.13.35 PM.png'
    }, 
    {
      title: 'Which is the best breadth class to take at Berkeley? ', 
      bullets: [
        'EPS 82! Professor Edwards and the GSIs are some of the nicest people you will meet. In the class you get to learn about the biological and physical processes that make up the ocean. With imminent issues such as the impact of climate change on the ocean, this course is important in preparing our generation for the future! '
      ],
      photo: 'paragraphs/Screenshot 2023-11-26 at 5.14.04 PM.png'
    }


  ]

  return (
    <>
      <Head>
        <title>Oceans Pop Quiz (EPS 82)</title>
        <meta name="description" content="Understanding the different animal phylums! Can you name and describe the characteristics of a marine organism that falls in each category?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-100 min-h-screen text-gray-800">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold">Oceans Pop Quiz (EPS 82)</h1>
            <p className="text-xl mt-4">By Rebecca Peng</p>
            <p className="mt-2">Understanding the different animal phylums! Can you name and describe the characteristics of a marine organism that falls in each category?</p>
          </header>
          
          <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
            {phylums.map((phylum) => (
              <section key={phylum.id} id={phylum.id} className="bg-white text-gray-700 rounded-lg shadow overflow-hidden">
                <h2 className="text-2xl font-semibold p-4 border-b">{phylum.name}</h2>
                <img 
                  src={phylum.photo} 
                  alt={`Image of ${phylum.name}`}
                  className="w-full h-48 object-cover" 
                />
                <div className="p-4">
                  <button 
                    onClick={() => toggleReveal(phylum.id)}
                    className="mb-3 px-4 py-2 border-2 border-gray-300 text-gray-800 bg-transparent rounded-full transition duration-300 hover:bg-gray-200 hover:shadow-lg transform hover:-translate-y-1"
                  >
                    Reveal Characteristics
                  </button>
                  {revealedPhylum[phylum.id] && (
                    <div className="mt-4 space-y-2">
                      {phylum.description.split('\n').map((line, lineIndex) => (
                        <p key={lineIndex}>{line}</p>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            ))}
          </main>
  
          <section className="my-8">
            <h2 className="text-3xl font-bold text-center mb-8">More Ocean Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {more_info.map((info) => (
                <div key={info.title} className="bg-white text-gray-700 rounded-lg shadow overflow-hidden">
                  <h3 className="text-2xl font-semibold p-4 border-b">{info.title}</h3>
                  <img 
                    src={info.photo} 
                    alt={`Illustration for ${info.title}`}
                    className="w-100 h-64 object-cover" 
                  />
                  <div className="p-4">
                    <button 
                      onClick={() => toggleRevealInfo(info.title)}
                      className="mb-3 px-4 py-2 border-2 border-gray-300 text-gray-800 bg-transparent rounded-full transition duration-300 hover:bg-gray-200 hover:shadow-lg transform hover:-translate-y-1"
                    >
                      Reveal Information
                    </button>
                    {revealedInfo[info.title] && (
                      <div className="mt-4 space-y-2">
                        {info.bullets.map((bullet, bulletIndex) => (
                          <p key={bulletIndex}>{bullet}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
  
        </div>
      </div>
    </>
  );  
}


