import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home';
import AboutsUs from './pages/aboutsUs';
import Menu from './pages/menu';
import Gallery from './pages/gallery';
import Blog from './pages/blog';
import Contact from './pages/contact';
import LetfSide from "./pages/letfSide";
import SpecificItem from './pages/specificItem';
import SpecificCategory from './pages/specificCategory';
import SearchResult from './pages/searchResult';
import { useEffect, useState } from 'react';
import { Loading } from './pages/loading';
import { Header } from './pages/header';

function App() {
  return (
    <BrowserRouter basename="/Project13-Resturan-redboa">
      <AppWithRouter />
    </BrowserRouter>
  );
}

function AppWithRouter() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // محاكاة تحميل البيانات عند بداية تحميل الصفحة
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // زمن التحميل (2 ثانية كمثال)

    return () => clearTimeout(timer); // تنظيف التايمر بعد انتهاء التأثير
  }, []);

  useEffect(() => {
    // إعادة تعيين حالة التحميل عند تغيير المسار
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // زمن التحميل (500 ميللي ثانية)

    return () => clearTimeout(timer); // تنظيف التايمر
  }, [location]); // يعتمد على تغيير الـ location

  if (isLoading) {
    return <Loading />; // عرض صفحة التحميل أثناء الانتظار
  }

  return (
    <div className="container-fluid g-0">
      <div className="row g-0" style={{ minHeight: '100vh' }}>
        {/* الشريط الجانبي */}
        <div className="col-md-3 vh-100 leftSideShadow position-fixed start-0">
          <LetfSide />
        </div>
        <div className='col-md-12 header-show-small fixed-top bg-white'><Header /></div>
        {/* محتوى الصفحة مع تعويض عرض الشريط الجانبي */}
        <div className="col-md-9 offset-md-3"  >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutsUs />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<SpecificItem />} />
            <Route path="/blog/category/:category" element={<SpecificCategory />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
