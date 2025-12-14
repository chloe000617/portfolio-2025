// App.tsx
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection'; // 記得這個也要有
import AboutSection from './components/AboutSection'; // 新生成的
import ProjectsSection from './components/ProjectsSection'; // 新生成的
import ContactSection from './components/ContactSection'; // 新生成的
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="...">
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}