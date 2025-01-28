import { useState, useEffect } from 'react';
import { Layout, Figma, CheckCircle, ChevronLeft, ChevronRight, Monitor } from 'lucide-react';

const courses = [
  {
    title: 'Programming',
    icon: <Layout className="w-6 h-6" />,
    description: 'Master modern web development with hands-on projects',
    features: [
      'Frontend Development',
      'Backend Development',
      'Database Design',
      'API Integration'
    ],
  },
  {
    title: 'Video Montage',
    icon: <Monitor className="w-6 h-6" />,
    description: 'Learn professional video editing and post-production',
    features: [
      'Video Editing',
      'Motion Graphics',
      'Color Grading',
      'Sound Design'
    ],
  },
  {
    title: 'UI/UX Design',
    icon: <Figma className="w-6 h-6" />,
    description: 'Create beautiful and user-friendly interfaces',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
];

const sliderImages = [
  {
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200",
    caption: "Modern Development Environment"
  },
  {
    url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200",
    caption: "UI/UX Design"
  },
  {
    url: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1200",
    caption: "Video Montage"
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const typingTexts = ["Programming", "UI/UX Design", "Video Montage"];

  useEffect(() => {
    const textTimer = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % typingTexts.length);
    }, 2000);
    return () => clearInterval(textTimer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with Animation */}
      <header className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <img src="sb.png" alt="Skill Boost Logo" className="w-24 h-24 mr-2" />
              <span className="text-3xl font-bold text-gray-900">Skill Boost</span>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up-delay">
              Welcome to Skill Boost. We specialize in{' '}
              <span className="text-blue-600 font-semibold typing-text">
                {typingTexts[currentText]}
              </span>
            </p>
          </div>
        </div>
      </header>

      {/* Image Slider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-xl font-semibold">{image.caption}</p>
              </div>
            </div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Montage Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-slide-right">
            <h2 className="text-3xl font-bold">Why Choose Skill Boost?</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Expert Instructors</h3>
                  <p className="text-gray-600">Learn from industry professionals with years of experience.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Hands-on Projects</h3>
                  <p className="text-gray-600">Build real-world applications as you learn.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Career Support</h3>
                  <p className="text-gray-600">Get guidance on your journey to becoming a developer.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 animate-slide-left">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
              alt="Students collaborating"
              className="rounded-lg shadow-md hover:scale-105 transition-transform"
            />
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600"
              alt="Code review session"
              className="rounded-lg shadow-md hover:scale-105 transition-transform"
            />
            <img
              src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=600"
              alt="Developer workspace"
              className="rounded-lg shadow-md hover:scale-105 transition-transform"
            />
            <img
              src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&q=80&w=600"
              alt="Team meeting"
              className="rounded-lg shadow-md hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={course.title} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                {course.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <ul className="space-y-2">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Programming Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-slide-up">Programming Resources</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up-delay">
            Explore our curated collection of programming tutorials and resources.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Flower shop',
              url: 'https://flower-shop-seven-gamma.vercel.app/',
              description: 'Modern web development workflow and best practices',
              image: '1.png'
            },
            {
              title: 'Trips website',
              url: 'https://stay-flow.vercel.app/',
              description: 'Building scalable online shopping platforms',
              image: '2.png'
            },
            {
              title: 'E-commerce Systems',
              url: 'https://modern-shop-orcin.vercel.app/',
              description: 'Building scalable online shopping platform',
              image: '3.png'
            },
            {
              title: 'Coffee House',
              url: 'https://san-francisco-coffee.vercel.app/',
              description: 'Building scalable online shopping platform',
              image: '4.png'
            }
          ].map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Video Montage Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-slide-up">Video Production</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up-delay">
            Watch our video editing and production showcase.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <video
              className="w-full h-64 object-cover"
              controls
              poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1200"
            >
              <source src="your-video-url-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-2">Motion Graphics</h3>
              <p className="text-gray-600">Professional motion graphics and animations.</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <video
              className="w-full h-64 object-cover"
              controls
              poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1200"
            >
              <source src="your-video-url-2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-2">Video Editing</h3>
              <p className="text-gray-600">Advanced video editing and post-production.</p>
            </div>
          </div>
        </div>
      </section>

      {/* UI/UX Design Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-slide-up">UI/UX Design Gallery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up-delay">
            Explore our design portfolio and creative process.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'photo-1551650975-87deedd944c3',
            'photo-1561070791-2526d30994b5',
            'photo-1559028012-481c04fa702d',
            'photo-1531403009284-440f080d1e12',
            'photo-1508921912186-1d1a45ebb3c1',
            'photo-1513542789411-b6a5d4f31634',
            'photo-1486312338219-ce68d2c6f44d',
            'photo-1522542550221-31fd19575a2d',
          ].map((photoId, index) => (
            <div
              key={photoId}
              className={`group relative overflow-hidden rounded-lg ${
                index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={`https://images.unsplash.com/${photoId}?auto=format&fit=crop&q=80&w=800`}
                alt="Design Work"
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">View Design</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
            <img src="sb.png" alt="Skill Boost Logo" className="w-24 h-24 mr-2" />
              <span className="text-xl font-bold">Skill Boost</span>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            © {new Date().getFullYear()} Skill Boost. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;