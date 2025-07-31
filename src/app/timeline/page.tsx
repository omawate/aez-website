import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function TimelinePage() {
  const timelineEvents = [
    {
      date: 'January 20',
      title: 'Rush Applications Open',
      description: 'Submit your application to join our Spring 2025 recruitment process.',
      type: 'application' as const
    },
    {
      date: 'January 27',
      title: 'Information Session',
      description: 'Learn about AEZ\'s mission, values, and what makes our brotherhood unique.',
      type: 'event' as const
    },
    {
      date: 'February 3',
      title: 'Professional Workshop',
      description: 'Join us for a networking and professional development workshop.',
      type: 'event' as const
    },
    {
      date: 'February 10',
      title: 'Coffee Chats',
      description: 'One-on-one conversations with current brothers to learn more about AEZ.',
      type: 'social' as const
    },
    {
      date: 'February 17',
      title: 'Final Interviews',
      description: 'Interview with our executive board and get to know us better.',
      type: 'interview' as const
    },
    {
      date: 'February 24',
      title: 'Bid Day',
      description: 'Receive your invitation to join the AEZ brotherhood.',
      type: 'decision' as const
    }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'application':
        return '📋';
      case 'event':
        return '🎓';
      case 'social':
        return '☕';
      case 'interview':
        return '🤝';
      case 'decision':
        return '🎉';
      default:
        return '📅';
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'application':
        return 'bg-blue-100 border-blue-200';
      case 'event':
        return 'bg-green-100 border-green-200';
      case 'social':
        return 'bg-purple-100 border-purple-200';
      case 'interview':
        return 'bg-orange-100 border-orange-200';
      case 'decision':
        return 'bg-red-100 border-red-200';
      default:
        return 'bg-gray-100 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/timeline/timeline_image.jpeg)'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-4">Rush</h1>
          <p className="text-xl md:text-2xl font-montserrat max-w-2xl mx-auto px-4">
            Your journey to joining Alpha Epsilon Zeta starts here
          </p>
        </div>
      </section>

      {/* Rush Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-center mb-8">Spring Rush 2025</h2>
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              Alpha Epsilon Zeta&apos;s recruitment process is an inclusive series of events open to all 
              prospective members. These events are designed to foster mutual connections between our 
              brothers and potential members. Our organization is proud of its diversity in intellectual 
              passions and pursuits and we value innovative perspectives. We encourage all our members 
              to bring their unique ideas to our organizations&apos; professional and social endeavors.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12">Rush Timeline</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Event Card */}
                  <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2 md:mr-8' : 'md:pl-1/2 md:ml-8'}`}>
                    <Card className={`p-6 ${getEventColor(event.type)} border-2`}>
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{getEventIcon(event.type)}</div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-gray-500 mb-1">{event.date}</div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                          <p className="text-gray-700">{event.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">Ready to Join?</h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards joining UC Berkeley&apos;s premier multidisciplinary professional fraternity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              href="https://airtable.com/appyWVJTerxEykO4A/pagzqgUqNe5oEKFy7/form"
              external
            >
              Apply Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/coffee-chats"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Coffee Chats
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Who can apply to AEZ?</h3>
              <p className="text-gray-700">
                AEZ is open to all UC Berkeley students regardless of major, year, or background. 
                We value diversity in intellectual interests and welcome students from all disciplines.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">What is the time commitment?</h3>
              <p className="text-gray-700">
                As a professional fraternity, we balance academic excellence with meaningful brotherhood experiences. 
                Members typically participate in 2-3 events per month, including professional development workshops, 
                social events, and community service.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">What makes AEZ different?</h3>
              <p className="text-gray-700">
                AEZ is a multidisciplinary professional fraternity that brings together students from various fields 
                to create a diverse network. Our focus on innovation, entrepreneurship, and professional development 
                sets us apart from traditional social fraternities.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">How can I prepare for rush?</h3>
              <p className="text-gray-700">
                Come with an open mind and be yourself! We&apos;re looking for genuine individuals who are passionate 
                about their goals and want to contribute to our brotherhood. Review our website, follow us on social media, 
                and don&apos;t hesitate to reach out with questions.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}