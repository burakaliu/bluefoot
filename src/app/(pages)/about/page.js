import Footer from "../../components/footer";
import SectionDivider from "../../components/sectionDivider";

export default function About() {
  return (
    <>
      <section className="min-h-screen bg-white p-8 relative overflow-hidden">
        <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-60"></div>
        <div className="z-10 container mx-auto px-6 py-24 relative">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              About
              <span className="text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-[length:200%_100%] text-transparent bg-clip-text transition-all duration-500 ease-in-out hover:bg-[position:100%_0] bg-[position:0_0] bg-[size:200%_100%] block my-2">
                Bluefoot
              </span>
            </h1>
            <div className="max-w-3xl">
              <p className="text-xl text-gray-900 mb-8">
                Welcome to Bluefoot, where we're revolutionizing the way businesses interact with AI technology.
              </p>
              <p className="text-lg text-gray-900 mb-6">
                Our mission is to make AI accessible and practical for businesses of all sizes. We specialize in developing
                cutting-edge AI solutions that help organizations streamline their operations and make data-driven decisions.
              </p>
              <p className="text-lg text-gray-900 mb-10">
                With expertise in machine learning, natural language processing, and AI integration, we're committed to
                delivering innovative solutions that drive real business value.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto mb-12">
              These principles guide everything we do at Bluefoot
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl">
              <div className="bg-blue-100 rounded-lg p-4 inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-gray-900 text-xl font-bold mb-3">Innovation in AI</h3>
              <p className="text-gray-900">Pushing the boundaries of what's possible with artificial intelligence technology.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl">
              <div className="bg-blue-100 rounded-lg p-4 inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-gray-900 text-xl font-bold mb-3">Customer-centric</h3>
              <p className="text-gray-900">Developing solutions that address real business needs and deliver measurable value.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl">
              <div className="bg-blue-100 rounded-lg p-4 inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-gray-900 text-xl font-bold mb-3">Ethical AI</h3>
              <p className="text-gray-900">Committed to responsible AI development that respects privacy and promotes fairness.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl">
              <div className="bg-blue-100 rounded-lg p-4 inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-gray-900 text-xl font-bold mb-3">Continuous Improvement</h3>
              <p className="text-gray-900">Always learning, adapting, and enhancing our solutions to stay at the forefront of AI technology.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-r from-purple-500 to-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Get in touch today to discuss how our AI solutions can help your organization thrive in the digital age.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300 hover:scale-105"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
