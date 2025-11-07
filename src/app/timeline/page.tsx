export default function TimelinePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/64b8403f97c120b90d8bfd50_DSC06251.jpg)',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-merriweather font-bold mb-4">Rush</h1>
          <p className="text-xl md:text-2xl font-inter max-w-2xl mx-auto px-4">
            Join the brotherhood of Alpha Epsilon Zeta
          </p>
        </div>
      </section>

      {/* Rush Timeline */}
      {/* <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-merriweather font-bold text-center mb-12">Rush Timeline</h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-[#3d0f19]"></div>

            <div className="space-y-12">
              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-[#3d0f19] rounded-full border-4 border-white shadow-lg"></div>

                <div className="ml-16 flex-1">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <img
                          src="https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/68a7f7f2de1fd6b300b41a99_IMG_4320.JPG"
                          alt="Coffee Chats"
                          className="w-72 h-56 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-[#3d0f19] font-bold text-sm mb-2">TUESDAY 08/27</div>
                        <h3 className="text-2xl font-merriweather font-bold mb-3">Coffee Chats Begin</h3>
                        <div className="text-gray-600 mb-3">Location: Various Campus Locations</div>
                        <p className="text-gray-700">
                          Start your AEZ journey with one-on-one conversations with current brothers.
                          Learn about their experiences and what brotherhood means to them.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-[#3d0f19] rounded-full border-4 border-white shadow-lg"></div>
                <div className="ml-16 flex-1">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <img
                          src="https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/66d133dedc85d19d15f59203_Screenshot%202024-08-29%20at%207.51.44%E2%80%AFPM.png"
                          alt="Rush Party"
                          className="w-72 h-56 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-[#3d0f19] font-bold text-sm mb-2">SATURDAY 09/06 | 9:00 PM - 12:00 PM</div>
                        <h3 className="text-2xl font-merriweather font-bold mb-3">Rush Party</h3>
                        <div className="text-gray-600 mb-3">Location: TBA</div>
                        <p className="text-gray-700">
                          Come out and meet the brothers in more of an informal setting. Tickets will be sold via our Instagram. Speak to us at tabling and through coffee chats for Rushee Bids.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-[#3d0f19] rounded-full border-4 border-white shadow-lg"></div>
                <div className="ml-16 flex-1">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <img
                          src="https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/68a7f7f29954b4d04aba7d81_IMG_4267.JPG"
                          alt="Infosession"
                          className="w-72 h-56 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-[#3d0f19] font-bold text-sm mb-2">MONDAY 09/08 | 8:00 PM - 9:30 PM</div>
                        <h3 className="text-2xl font-merriweather font-bold mb-3">General Infosession</h3>
                        <div className="text-gray-600 mb-3">Location: Wheeler 108</div>
                        <p className="text-gray-700">
                          Learn about AEZ&apos;s professional pillars: Paradigm Consulting, Innovate@Berkeley, and Zenith Capital.
                          Discover our social events and opportunities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-[#3d0f19] rounded-full border-4 border-white shadow-lg"></div>
                <div className="ml-16 flex-1">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <img
                          src="https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/68a7f7cd31fce84d375caa8f_IMG_0959.JPG"
                          alt="Meet & Greet"
                          className="w-72 h-56 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-[#3d0f19] font-bold text-sm mb-2">WEDNESDAY 09/10 | 7:00 PM - 8:30 PM</div>
                        <h3 className="text-2xl font-merriweather font-bold mb-3">Meet & Greet</h3>
                        <div className="text-gray-600 mb-3">Location: The Den Rooftop</div>
                        <p className="text-gray-700">
                          Connect with brothers in a relaxed setting and learn about the application process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-[#3d0f19] rounded-full border-4 border-white shadow-lg"></div>
                <div className="ml-16 flex-1">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <img
                          src="https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/68a7f7f28c72a0350925d703_2M0A4072.jpg"
                          alt="Applications Due"
                          className="w-72 h-56 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-[#3d0f19] font-bold text-sm mb-2">THURSDAY 09/11 | 7:00 PM</div>
                        <h3 className="text-2xl font-merriweather font-bold mb-3">Applications Due</h3>
                        <div className="text-gray-600 mb-3">Location: Online Submission</div>
                        <p className="text-gray-700">
                          Get your application in on time. Our application is a quick resume drop so make sure to apply as soon as you can!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Coming Soon Message */}
      <section className="min-h-[40vh] flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-merriweather font-bold">Come back for Spring &apos;26 rush!</h2>
        </div>
      </section>
    </main>
  );
}