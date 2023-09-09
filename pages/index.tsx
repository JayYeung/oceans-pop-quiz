import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>StopItch</title>
        <meta name="description" content="Learn about Epidermi and Stop Itch" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center">
        <div className="bg-blue-200 py-4"> 
          <header className="py-4">
            <h1 className="text-4xl font-bold">StopItch</h1>
            <br></br>
            <nav className="space-x-4">
              <a href="#top" className="text-lg">Home</a>
              <a href="#overview" className="text-lg">Overview</a>
              <a href="#statistics" className="text-lg">Statistics</a>
              <a href="#treatment" className="text-lg">Treatment</a>
              <a href="#video" className="text-lg">Online Video</a>
            </nav>
          </header>
        </div>
        <section id="overview" className="py-4 px-20 text-left">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p>
          Eczema, also known as atopic dermatitis, is a chronic skin condition that affects millions of people worldwide, including schoolchildren. Australia is among the countries with the highest rate of eczema, with between 10% to 15% of the entire population having the chronic skin condition. The inflammatory skin condition causes inflamed red, itchy, and dry patches of skin that can be uncomfortable and sometimes painful. It can also result in scaly patches, blisters, and ultimately skin infections. Eczema can appear anywhere on the body, but it is most prevalent on the hands, face, and the inside of the elbows and knees. The visible rashes and scarring associated with eczema can lead to social isolation and feelings of low self-esteem, which can further exacerbate the condition, therefore making it vital to raise awareness about eczema, especially among schoolchildren who tend to have “no filters”.
According to research conducted at the University of Melbourne, study showed that more than one in three infants suffer from eczema. Most children tend to grow out of the skin disease, however, about 10% of children will continue to suffer from eczema into adulthood, making eczema one of the most common chronic conditions affecting the Australian population. 
          </p>
        </section>
        <section id="statistics" className="py-4 px-20 text-left">
          <h2 className="text-2xl font-semibold">Statistics</h2>
          <p>
According to research conducted at the University of Melbourne, study showed that more than one in three infants suffer from eczema. Most children tend to grow out of the skin disease, however, about 10% of children will continue to suffer from eczema into adulthood, making eczema one of the most common chronic conditions affecting the Australian population. 
          </p>
          <div className="flex justify-center space-x-4">
            <img src="/image1.jpg" alt="Image 1" />
            <img src="/image2.jpg" alt="Image 2" />
          </div>
        </section>
        <section id="treatment" className="py-4 px-20 text-left">
          <h2 className="text-2xl font-semibold">How to Treat It</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
        <section id="video" className="py-4 text-left">
          <h2 className="text-2xl font-semibold px-20">Online Video</h2>
          <div className="flex justify-center">
            <div className="relative w-3/5" style={{ paddingBottom: '30.25%' }}>
              <iframe src="https://www.youtube.com/embed/apiK65tkbq8" title="Online Session" className="absolute top-0 left-0 w-full h-full" allowFullScreen></iframe>
            </div>
          </div>
        </section>
        <footer className="py-4 text-center text-gray-500 text-sm">
          &copy; 2023 . All rights reserved.
        </footer>
      </div>
    </>
  );
}
