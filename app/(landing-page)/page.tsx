import Link from "next/link";
import { ArrowRight, Twitter, Linkedin, Mail, MessageSquare, BookOpen, Mic2, Users2, Globe2, Gavel } from "lucide-react";

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            James St. James
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Advocate, Writer, and Public Speaker
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link 
              href="#work" 
              className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="#contact" 
              className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://twitter.com/jamesstjames" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/jamesstjames" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:hello@jamesstjames.com" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">My Work</h2>
            <p className="mt-4 text-xl text-gray-600">Areas of expertise and recent projects</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
                title: "Public Speaking",
                description: "Engaging talks on social justice, policy reform, and community empowerment."
              },
              {
                icon: <BookOpen className="h-8 w-8 text-green-600" />,
                title: "Writing",
                description: "Thought-provoking articles and policy papers on contemporary issues."
              },
              {
                icon: <Mic2 className="h-8 w-8 text-purple-600" />,
                title: "Podcasting",
                description: "Host of 'Voices for Change' discussing social and political issues."
              },
              {
                icon: <Users2 className="h-8 w-8 text-red-600" />,
                title: "Community Organizing",
                description: "Leading grassroots initiatives for social change and policy reform."
              },
              {
                icon: <Globe2 className="h-8 w-8 text-yellow-600" />,
                title: "Global Advocacy",
                description: "Working with international organizations on human rights issues."
              },
              {
                icon: <Gavel className="h-8 w-8 text-indigo-600" />,
                title: "Policy Development",
                description: "Advising on and developing policies for social impact."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            Interested in working together or have questions? Feel free to reach out.
          </p>
          <a 
            href="mailto:hello@jamesstjames.com" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800"
          >
            <Mail className="-ml-1 mr-2 h-5 w-5" />
            hello@jamesstjames.com
          </a>
        </div>
      </section>
    </div>
  );
}
