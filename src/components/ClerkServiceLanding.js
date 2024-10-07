'use client'

import Image from 'next/image'
import { Badge } from '@/components/shadcn/ui/badge'
import { Input } from '@/components/shadcn/ui/input';
import { Button} from '@/components/shadcn/ui/button'
import {
	AreaChartIcon,
	ArrowRightSquare, BriefcaseIcon,
	CheckCircle,
	CheckIcon, CheckSquare, CombineIcon, FactoryIcon, FilesIcon,
	HomeIcon, LucideFacebook, LucideInstagram,
	LucideLinkedin, LucideShoppingBag,
	MailCheckIcon, MoreHorizontalIcon,
	PlaySquare, UserIcon, UsersIcon,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/shadcn/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem, CarouselNext, CarouselPrevious,
} from '@/components/shadcn/ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/shadcn/ui/radio-group";
import { Label } from "@/components/shadcn/ui/label";
import { Slider } from "@/components/shadcn/ui/slider";

const LeftSideContent = () => {
	return (
		<div className='flex flex-col w-2/4 h-full gap-8'>
			<Badge className='w-fit py-3 px-6 font-thin text-xl'>Clerk Services Agency</Badge>
			<h1 className='text-7xl font-bold'>The Fastest way <br/> to achieve success</h1>
			<p className='text-xl'>It was popularised in the 1960s with the release sheets.<br/> We bring the right people together</p>
			<div className='flex gap-2 mt-8'>
				<Button className='w-full h-full py-4 text-2xl'>
					Get start<ArrowRightSquare className='ml-3 mt-[2px] h-[22px]'/>
				</Button>
				<Button variant='ghost' className='w-full h-full py-4 text-2xl'>
					<PlaySquare className='mr-3 mt-[2px] h-[22px]'/>How it works
				</Button>
			</div>
		</div>
	)
}

const RightSideContent = () => {
	return (
		<div className='flex flex-wrap w-1/3 h-full gap-6'>
			<Image
				className='ml-80 shadow-2xl'
				src="/assets/card.png"
				width={180}
				height={180}
				alt="card picture"
			/>
			<Image
				className='-ml-20 mt-40'
				src="/assets/line-chart.svg"
				width={140}
				height={140}
				alt="chart picture"
			/>
			<Image
				className='-mt-96'
				src="/assets/banner.png"
				width={580}
				height={580}
				alt="human picture"
			/>
		</div>
	)
}

const WelcomeSection = () => {
	return (
		<div className='flex justify-center'>
			<LeftSideContent/>
			<RightSideContent/>
		</div>
	)
}

const ServicesSection = () => {
	const data = [
		{
			title: 'Primary documentation check',
			description: '',
		},
		{
			title: 'Accounting',
			description: 'We always provide people a complete solution upon focused of any business',
		},
		{
			title: 'Taxes and fees calculation',
			description: '',
		},
		{
			title: 'Payment data preparation right in time',
			description: '',
		},
		{
			title: 'Tax reports preparation and submission',
			description: '',
		},
		{
			title: 'Consultations',
			description: 'We always provide people a complete solution upon focused of any business',
		},
		{
			title: 'Primary documents making',
			description: '',
		},
		{
			title: 'Bank account control',
			description: '',
		},
		{
			title: 'Bookkeeping restoration',
			description: '',
		},
		{
			title: 'Audit control',
			description: '',
		},
	]

	return (
		<div className='flex flex-col w-screen h-64 -mt-32 items-center bg-neutral-100'>
			<Carousel className="h-fit w-5/6 -mt-16"
					  opts={{
						  align: "start",
						  loop: true,
					  }}
					  plugins={[
						  Autoplay({
							  delay: 8000,
						  }),
					  ]}>
				<CarouselContent className='overflow-visible'>
					{data.map((item, index) => (
						<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
							<div>
								<Card>
									<CardContent className="flex overflow-hidden h-48 p-8">
										<div className='flex w-full gap-8 justify-between'>
											<div className='flex flex-col gap-4'>
												<h3 className='text-2xl font-bold'>{item.title}</h3>
												<p className=''>{item.description}</p>
											</div>
											<img src={'/assets/carousel-' + index + '.png'} alt=""
												 className='max-h-max max-w-max rounded-3xl aspect-auto'
											/>
										</div>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselNext/>
				<CarouselPrevious/>
			</Carousel>
		</div>
	)
}

const CalculatorSection = () => {

	return (
		<div className='flex w-5/6 gap-16'>

			<div className='flex flex-col w-full gap-8'>
				<Card>
					<CardHeader>
						<CardTitle>Ownership</CardTitle>
						<CardDescription>
							Select an ownership method related to your business type.
						</CardDescription>
					</CardHeader>
					<CardContent className="flex gap-8 w-full">
						<RadioGroup defaultValue="fop" className="flex gap-4 w-full">
							<div className='w-full'>
								<RadioGroupItem value="fop" id="fop" className="peer sr-only"/>
								<Label htmlFor="fop" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
									<UserIcon className="mb-3 h-6 w-6"/>
									Entrepreneur (FOP)
								</Label>
							</div>
							<div className='w-full'>
								<RadioGroupItem value="tov" id="tov" className="peer sr-only"/>
								<Label htmlFor="tov" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
									<UsersIcon className="mb-3 h-6 w-6"/>
									LLC (TOV)
								</Label>
							</div>
							<div className='w-full'>
								<RadioGroupItem value="other" id="other" className="peer sr-only"/>
								<Label htmlFor="other" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
									<MoreHorizontalIcon className="mb-3 h-6 w-6"/>
									Other
								</Label>
							</div>
						</RadioGroup>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Activity</CardTitle>
						<CardDescription>
							Select an activity type you are using intence your business.
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col gap-8 w-full">
						<RadioGroup defaultValue="sales" className="flex gap-4">
							<div className='w-full'>
								<RadioGroupItem value="sales" id="sales" className="peer sr-only"/>
								<Label htmlFor="sales" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
									<BriefcaseIcon className="mb-3 h-6 w-6"/>
									Sales
								</Label>
							</div>
							<div className='w-full'>
								<RadioGroupItem value="manufacture" id="manufacture" className="peer sr-only"/>
								<Label htmlFor="manufacture"
									   className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
									<FactoryIcon className="mb-3 h-6 w-6"/>
									Manufacturing
								</Label>
							</div>
							<div className='w-full'>
								<RadioGroupItem value="services" id="services" className="peer sr-only"/>
								<Label htmlFor="services" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
									<LucideShoppingBag className="mb-3 h-6 w-6"/>
									Services
								</Label>
							</div>
							<div className='w-full'>
								<RadioGroupItem value="import_export" id="import_export" className="peer sr-only"/>
								<Label htmlFor="import_export" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
									<CombineIcon className="mb-3 h-6 w-6"/>
									Import / Export
								</Label>
							</div>
						</RadioGroup>
					</CardContent>
				</Card>

				<div className='w-full'>
					<Label htmlFor="documents_count" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
						<FilesIcon className="mb-3 h-6 w-6"/>
						Documents quantity per month
					</Label>
					<Slider defaultValue={[33]} max={1000} step={1} id="documents_count"/>
				</div>

				<div className='w-full'>
					<Label htmlFor="employees_count" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
						<UsersIcon className="mb-3 h-6 w-6"/>
						Employees quantity
					</Label>
					<Slider defaultValue={[33]} max={500} step={1} id="employees_count"/>
				</div>
			</div>


			<div className='flex flex-col w-2/4 justify-between gap-8 p-8 shadow-2xl rounded-3xl'>
				<div className='flex flex-col p-8 bg-yellow-100 rounded-xl gap-4'>
					<p className='text-xl font-bold'>Your price is</p>
					<h1 className='text-6xl font-bold'>$413.00</h1>
					<p className='font-thin'>*Final price can be higher due to the estimate quote results.</p>
				</div>
				<div className="flex flex-col w-full gap-8">
				<p className=''>We always keep your data secure and do not sharing any personal information.</p>
					<Button className='h-16  w-full py-4 text-2xl'>
						Apply<CheckSquare className='ml-3 mt-[2px] h-[22px]'/>
					</Button>
				</div>
			</div>


		</div>
	)
}

const StatsSection = () => {
	return (
		<div className='flex w-5/6'>

			<div className='flex flex-wrap w-full gap-16'>

				<div className='flex flex-col gap-4'>
					<h1 className='text-6xl font-bold'>38k</h1>
					<h3 className='text-3xl font-semibold'>Our Office</h3>
					<p className='text-xl'>We always provide people a complete<br/>
						solution upon focused of any business </p>
				</div>

				<div className='flex flex-col gap-4'>
					<h1 className='text-6xl font-bold'>12k+</h1>
					<h3 className='text-3xl font-bold'>Completed Cases</h3>
					<p className='text-xl'>We always provide people a complete<br/>
						solution upon focused of any business </p>
				</div>

				<div className='flex flex-col gap-4'>
					<h1 className='text-6xl font-bold'>17k+</h1>
					<h3 className='text-3xl font-bold'>Happy Clients</h3>
					<p className='text-xl'>We always provide people a complete<br/>
						solution upon focused of any business </p>
				</div>

				<div className='flex flex-col gap-4'>
					<h1 className='text-6xl font-bold'>18k+</h1>
					<h3 className='text-3xl font-bold'>Skilled People</h3>
					<p className='text-xl'>We always provide people a complete<br/>
						solution upon focused of any business </p>
				</div>

			</div>

			<div className='flex flex-col w-2/4 justify-between gap-6'>
				<h1 className='text-6xl font-bold'>Tell us about your business, we are ready to solve.</h1>
				<div className="flex w-full max-w-sm items-center space-x-2">
					<Input type="email" placeholder="Email" className='h-16 text-xl'/>
					<Button className='h-16 text-xl' type="submit">Get a Quote</Button>
				</div>
				<p className='text-xl'>We always provide people a complete<br/>
					solution upon focused of any business </p>
			</div>


		</div>
	)
}

const DeliverySection = () => {
	return (
		<div className='flex flex-col w-5/6 pt-16'>

			<div className='flex flex-col w-full gap-16 p-16 rounded-3xl bg-orange-100'>
				<img className=' shadow-xl rounded-3xl -mt-32'
					 src="/assets/office-2.png"
					 alt="card picture"
				/>

				<div className='flex flex-wrap gap-8 justify-between'>
					<div className='flex flex-col gap-4'>
						<h1 className='text-3xl font-bold'>1. Acquisition</h1>
						<p className='text-xl'>Excepteur sint occaecat cupidatat <br/>non proident, sunt in culpa qui officia</p>
					</div>

					<div className='flex flex-col gap-4'>
						<h1 className='text-3xl font-bold'>2. Activation</h1>
						<p className='text-xl'>Lorem ipsum dolor sit amet, <br/>consec adipiscing elit, sed do
							eiusmod</p>
					</div>

					<div className='flex flex-col gap-4'>
						<h1 className='text-3xl font-bold'>3. Retention</h1>
						<p className='text-xl'>Ut enim ad minim veniam, quis <br/>nostrud exercitation ullamco laboris
							<br/>nisi ut a</p>
					</div>
				</div>

			</div>

		</div>
	)
}

const PrivilegesSection = () => {
	return (
		<div className='flex flex-row w-5/6 gap-16'>
			<img className='w-2/5 shadow-xl rounded-3xl'
				 src="/assets/working.png"
				 alt="working picture"
			/>

			<div className='flex flex-col gap-8'>
				<Badge className='w-fit py-3 px-6 font-thin text-xl'>What We Do, What You Get</Badge>
				<h1 className='text-6xl font-bold'>Exceptional Solution for
					<br/>Digital Business Model</h1>
				<p className='text-xl'>In a professional context it often happens that private or corporate
					<br/>clients order a publication news while still not being ready.</p>

				<div className='flex flex-wrap gap-8 justify-between'>
					<div className='flex flex-col gap-8'>
						<h6 className='font-bold text-xl flex gap-4 items-center'>
							<CheckCircle/> Boost your sale
						</h6>

						<h6 className='font-bold text-xl flex gap-4 items-center'>
							<CheckIcon/> Introducing New Features
						</h6>
					</div>

					<div className='flex flex-col gap-8'>
						<h6 className='font-bold text-xl flex gap-4 items-center'>
							<CheckIcon/> Smart Installation Tools
						</h6>

						<h6 className='font-bold text-xl flex gap-4 items-center'>
							<CheckIcon/> Dynamic Boosting
						</h6>
					</div>
				</div>
			</div>

		</div>
	)
}

const ContactSection = () => {
	return (
		<div className='flex flex-col w-5/6 rounded-3xl bg-neutral-100 p-16 gap-16'>

			{/*up side*/}
			<div className='flex w-full justify-between'>
				<div className='flex flex-col gap-4'>
					<h4 className='text-2xl font-thin'>Contact us</h4>
					<h1 className='text-4xl font-bold'>Have an project in mind?</h1>
					<p className='text-xl'>The right move at the right time saves your investment.
						<br/>live the dream of expanding your business.</p>
				</div>
				<MailCheckIcon size={100} opacity={0.1}/>
			</div>

			{/*bottom side*/}
			<div className='flex gap-8 w-full'>
				<div className='flex flex-col w-full gap-4'>
					<div className='flex gap-2 items-center'>
						<HomeIcon/>
						<h6 className='text-2xl font-bold'>Clerk Services Studio</h6>
					</div>

					<p className='text-xl'>4517 Washington Ave.<br/>Manchester, Kentucky 39495
						<br/>(239) 555-0108<br/>contact@clerk.com
					</p>
				</div>

				<div className="flex flex-col w-full gap-4">
					<Input type="name" placeholder="Your name" className='h-16 text-xl'/>
					<Input type="email" placeholder="Conact email" className='h-16 text-xl'/>

					<Button className='h-16 text-xl' type="submit">Get a Quote</Button>
				</div>
			</div>

		</div>
	)
}

const FooterSection = () => {
	return (
		<div className='flex flex-col w-5/6 gap-8'>
			<div className='flex flex-row gap-4 justify-between items-center'>
				<div className='flex flex-row gap-4 items-center'>
					<AreaChartIcon size={68}/>
					<h1 className='text-4xl font-bold w-full'>Uacoo</h1>
				</div>
				<h1 className='text-xl font-thin'>Ready to get started?</h1>
			</div>

			<div className='flex w-full h-0.5 bg-neutral-100'/>

			<div className='flex flex-row gap-4'>
				<div className='flex flex-col gap-2 w-full'>
					<h4 className='text-2xl font-bold mb-4'>Contact</h4>
					<Link href=''>4517 Washington Ave.<br/>Manchester, Kentucky 39495</Link>
					<Link href=''>(239) 555-0108</Link>
					<Link href=''>contact@clerk.com</Link>
				</div>
				<div className='flex flex-col gap-2 w-full'>
					<h4 className='text-2xl font-bold mb-4'>Company</h4>
					<Link href=''>About us</Link>
					<Link href=''>Contact us</Link>
					<Link href=''>Careers</Link>
					<Link href=''>Investors</Link>
				</div>
				<div className='flex flex-col gap-2 w-full'>
					<h4 className='text-2xl font-bold mb-4'>Support</h4>
					<Link href=''>How it works</Link>
					<Link href=''>Support center</Link>
				</div>
				<div className='flex flex-col gap-2 w-full'>
					<h4 className='text-2xl font-bold mb-4'>Resourses</h4>
					<Link href=''>Calculate price</Link>
					<Link href=''>Plans and pricing</Link>
					<Link href=''>Request an offer</Link>
				</div>
			</div>

			<div className='flex w-full h-0.5 bg-neutral-100'/>

			<div className='flex flex-row gap-4 justify-between items-center'>
				<div className='flex flex-row gap-12 w-full justify-between'>
					<div className='flex flex-row gap-8'>
						<h6 className='font-bold'>© Restelse Official 2024</h6>
						<h6 className='font-thin'>Privacy policy</h6>
						<h6 className='font-thin'>Cookies</h6>
						<h6 className='font-thin'>Terms of service</h6>
					</div>

					<div className='flex flex-row gap-4'>
						<LucideFacebook/>
						<LucideLinkedin/>
						<LucideInstagram/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default function ClerkServiceLanding() {
	return (
		<main className='flex flex-col py-16 gap-32 items-center overflow-hidden'>
			<WelcomeSection/>
			<ServicesSection/>
			<StatsSection/>
			<CalculatorSection/>
			<DeliverySection/>
			<PrivilegesSection/>
			<ContactSection/>
			<FooterSection/>
		</main>
	);
}
