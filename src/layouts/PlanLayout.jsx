import { Outlet } from 'react-router-dom';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';

const PlanLayout = () => {
  return (
    <div>
      <div className="w-full max-w-560 mx-auto flex flex-col h-screen">
        <div className="h-70">
          <Header />
        </div>
        <div className="flex-1 h-full mt-50">
          <Outlet />
        </div>
      </div>
        <div className='w-full h-70'>
            <Footer />
        </div>
    </div>

  );
};

export default PlanLayout;
