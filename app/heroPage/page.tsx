import Link from 'next/link';
import Image from 'next/image';
import logo from "../../public/assets/logo.svg"
import { Button } from '@/components/ui/button';

const LandingPage = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 h-screen'>

            <div className="flex justify-between items-center px-20 py-12">
                <div>
                    <Image src={logo} alt="logo" height={200} width={200} />
                </div>
                <div className="space-x-4">
                    <Button asChild>
                        <Link href="/auth/login">Login</Link>

                    </Button>


                </div>

            </div>
            <div className='  flex  flex-col justify-center items-center h-1/2  '>
                <h1 className='flex  text-4xl font-extrabold   '> Welcome to AI.StoryWeaver</h1>
                <h2 className='flex mt-4 text-xl font-bold'>
                    Step into the realm of AI StoryWeaver, where your stories unfold with the magic touch of artificial intelligence.
                </h2>
                <div className='flex mt-6'>
                    <Link href= "/dashboard">
                        <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-md transition duration-300 ease-in-out'>
                            Get Started
                        </button>
                    </Link>
                </div>
                </div>



            </div>

    
    );
};


export default LandingPage;
