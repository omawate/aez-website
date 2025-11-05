'use client';

export default function CoffeeChatsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/68a8ff9a16825940e9801db8_Screenshot%202025-08-22%20at%204.39.02%E2%80%AFPM.png)'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-merriweather font-bold mb-4">Coffee Chats</h1>
          <p className="text-xl md:text-2xl font-inter max-w-2xl mx-auto px-4">
            Connect with our brothers one-on-one
          </p>
        </div>
      </section>

      {/* Airtable Embed Section */}
      {/* <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <iframe 
            className="airtable-embed" 
            src="https://airtable.com/embed/appdTFlIPI5LDX6ls/shruXQJvuztr1zFi6?viewControls=on" 
            frameBorder="0" 
            width="100%" 
            height="533" 
            style={{ background: 'transparent', border: '1px solid #ccc' }}
          />
        </div>
      </section> */}

      {/* Coming Soon Message */}
      <section className="min-h-[40vh] flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-merriweather font-bold">Come back for Spring &apos;26 rush!</h2>
        </div>
      </section>
    </div>
  );
}