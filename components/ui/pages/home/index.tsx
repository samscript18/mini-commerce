import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HomePage = () => {
	return (
		<div>
			<div className="md:min-h-screen">
				<div className="h-full relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl">
					<div className="absolute inset-0 opacity-30">
						<div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
						<div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-400/20 to-pink-400/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
						<div className="absolute bottom-0 left-1/2 w-80 h-80 bg-gradient-to-t from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
					</div>

					<div className="absolute inset-0 overflow-hidden pointer-events-none">
						<div
							className="absolute top-20 left-10 w-4 h-4 bg-blue-400/30 rounded-full animate-bounce"
							style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
						<div
							className="absolute top-32 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce"
							style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
						<div
							className="absolute bottom-20 left-20 w-5 h-5 bg-pink-400/30 rounded-full animate-bounce"
							style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
						<div
							className="absolute bottom-32 right-10 w-2 h-2 bg-cyan-400/30 rounded-full animate-bounce"
							style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}></div>
					</div>

					<div className="absolute inset-0 opacity-5">
						<div
							className="w-full h-full"
							style={{
								backgroundImage: `
        linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
      `,
								backgroundSize: '50px 50px',
							}}></div>
					</div>

					<div className="relative z-10 text-center pt-[18%] md:pt-[12%] pb-20 px-6">
						<div className="animate-fade-in">
							<h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text py-4 text-transparent leading-tight">
								Discover Amazing Products
							</h1>
							<p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
								Find everything you need from electronics to home essentials, all in one place.
							</p>

							<Link href={'/products'} className="flex flex-col gap-4 justify-center items-center">
								<button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
									Shop Now
									<ArrowRight className="w-6 h-6 inline-flex ml-2" />
								</button>
							</Link>
						</div>
					</div>

					<div className="absolute bottom-0 left-0 right-0">
						<svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-white">
							<path
								d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
								opacity=".25"></path>
							<path
								d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
								opacity=".5"></path>
							<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
						</svg>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default HomePage;
