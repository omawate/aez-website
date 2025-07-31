import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function CoffeeChatsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/coffee_chats/coffee_chats_image.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-4">Coffee Chats</h1>
          <p className="text-xl md:text-2xl font-montserrat max-w-2xl mx-auto px-4">
            Connect with our brothers one-on-one
          </p>
        </div>
      </section>

      {/* Status Message */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 text-center bg-yellow-50 border-2 border-yellow-200">
            <div className="text-6xl mb-6">☕</div>
            <h2 className="text-3xl font-playfair font-bold mb-6 text-gray-900">
              Coffee Chats are Currently Closed
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Coffee Chats are closed for Spring 2025 Rush. Come back next semester to chat with the brothers!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                href="/timeline"
              >
                View Rush Timeline
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/brothers"
              >
                Meet Our Brothers
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* What Are Coffee Chats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12">What Are Coffee Chats?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Personal Connection</h3>
              <p className="text-gray-600">
                One-on-one conversations with current AEZ brothers to learn about their experiences, 
                career journeys, and what brotherhood means to them.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3">Professional Insights</h3>
              <p className="text-gray-600">
                Get advice on career paths, internships, and professional development from brothers 
                working at top companies across various industries.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Mutual Fit</h3>
              <p className="text-gray-600">
                Determine if AEZ is the right fit for you while helping us understand your goals, 
                interests, and what you&apos;d bring to our brotherhood.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12">How Coffee Chats Work</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sign Up</h3>
                <p className="text-gray-600">
                  When coffee chats are open, you&apos;ll be able to sign up for time slots that work with your schedule.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Meet Up</h3>
                <p className="text-gray-600">
                  Connect with a brother for a casual 30-45 minute conversation over coffee, lunch, or even a virtual call.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Connect</h3>
                <p className="text-gray-600">
                  Ask questions, share your story, and get to know what makes AEZ special from a brother&apos;s perspective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">Questions About Rush?</h2>
          <p className="text-xl mb-8 opacity-90">
            Don&apos;t hesitate to reach out if you have any questions about the rush process or AEZ in general.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              href="mailto:aezberkeley@gmail.com"
              external
            >
              Email Us
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="https://www.instagram.com/aezberkeley/"
              external
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Follow on Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">
            Follow us on social media to be the first to know when coffee chats open for the next recruitment cycle.
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.instagram.com/aezberkeley/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span className="text-2xl">📱</span>
              @aezberkeley
            </a>
            <a 
              href="https://www.linkedin.com/company/alpha-epsilon-zeta/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span className="text-2xl">💼</span>
              Alpha Epsilon Zeta
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}