import HeroSection from '../components/Home/HeroSection';
import FeaturesSection from '../components/Home/FeaturesSection';
import ExercisesSection from '../components/Home/ExercisesSection';
import StatsSection from '../components/Home/StatsSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import PricingSection from '../components/Home/PricingSection';
import AppointmentSection from '../components/Home/AppointmentSection';
import TeamSection from '../components/Home/TeamSection';
import FAQSection from '../components/Home/FAQSection';
import CTASection from '../components/Home/CTASection';
import { getAllDoctors, transformDoctorForTeam } from '../utils/doctorUtils';

const mainHome = () => {
  // Data for the exercises section 
  const featuredExercises = [ 
    {
      id: 1,
      title: 'Knee Rehabilitation',
      description: 'Gentle exercises to strengthen knee joints',
      duration: '15 min',
      difficulty: 'Beginner',
      category: 'Knee',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      title: 'Back Pain Relief',
      description: 'Stretches to alleviate lower back pain',
      duration: '20 min',
      difficulty: 'Intermediate',
      category: 'Back',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1520&q=80'
    },
    {
      id: 3,
      title: 'Shoulder Mobility',
      description: 'Improve range of motion in shoulders',
      duration: '10 min',
      difficulty: 'Beginner',
      category: 'Shoulder',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  // Data for testimonials section
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Patient',
      content: 'After my knee surgery, PhysioFlex helped me regain full mobility in just 8 weeks. The personalized exercises made all the difference!',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      role: 'Orthopedic Surgeon',
      content: 'I recommend PhysioFlex to all my post-op patients. The platform makes it easy to track progress and adjust treatment plans.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Senior Patient',
      content: 'As an older adult, I was nervous about exercising at home. The clear instructions and modifications made me feel safe and confident.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg'
    }
  ];

  // Data for pricing section
  const pricingPlans = [
    {
      id: 1,
      name: 'Basic',
      price: '$19',
      period: 'month',
      features: [
        'Access to basic exercises',
        '1 consultation per month',
        'Progress tracking',
        'Email support'
      ],
      featured: false,
      color: 'blue'
    },
    {
      id: 2,
      name: 'Premium',
      price: '$49',
      period: 'month',
      features: [
        'All exercises unlocked',
        '4 consultations per month',
        'Personalized plans',
        'Priority support',
        'Video call sessions'
      ],
      featured: true,
      color: 'teal'
    },
    {
      id: 3,
      name: 'Annual',
      price: '$399',
      period: 'year',
      features: [
        'All premium features',
        'Unlimited consultations',
        'Family plan (up to 3 users)',
        '24/7 support',
        'Free health assessments'
      ],
      featured: false,
      color: 'indigo'
    }
  ];

  // Get all doctors and transform for team section
  const allDoctors = getAllDoctors();
  const teamMembers = allDoctors.map(transformDoctorForTeam);

  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <ExercisesSection featuredExercises={featuredExercises} />
      <StatsSection />
      <TestimonialsSection testimonials={testimonials} />
      <PricingSection pricingPlans={pricingPlans} />
      <AppointmentSection />
      <TeamSection teamMembers={teamMembers} />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default mainHome;
