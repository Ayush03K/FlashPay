import NavBar from '../components/NavBar';
import AllUsers from '../components/AllUsers';

export default function Users() {
  return (
    <div className='bg-[#0A0A0A] min-h-screen w-full flex'>
      <NavBar />
      <AllUsers/>
    </div>
  );
}
