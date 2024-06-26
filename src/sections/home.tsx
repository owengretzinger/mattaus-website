import Link from 'next/link'
import ButtonLink from '@/components/button'
import { BsInstagram, BsYoutube, BsEnvelope } from 'react-icons/bs';
import BackgroundImage from '@/components/bg-image'
import Divider from '@/components/divider';
import { ContactPageContent, HomePageContent, Show } from '@/lib/content-types';
import ShowCard from '@/components/show-card';
import processShows from '@/lib/process-shows';
import { AllUpcomingShowsText, NextShow, NextShowText } from '@/components/show-cards-ordered';
import { convertToEmbedLink } from './videos';

export default function Home({ pageText, contactPageText, allShows }: { pageText: HomePageContent, contactPageText: ContactPageContent, allShows: Show[] }) {
  
  const shows = processShows(allShows);
  const ShowToDisplay = <NextShow shows={shows} />;

  return (
    <>
      <div className="h-screen relative">
        <BackgroundImage src={pageText.backgroundImage} alt='Picture of me playing the saxophone' gradientDirClass='bg-gradient-to-t' middleColourPercentClass='via-25%' priority={true} sizes="100vw"  />

        <div className="absolute bottom-0 w-full flex flex-col items-center text-center">
          <div className="flex gap-20 md:gap-28 pb-2 z-10 text-3xl md:text-4xl items-end">
            <Link href={contactPageText.instagram} target="_blank">
              <BsInstagram title='Instagram' className="text-accentcol lg:hover:text-5xl lg:transition-all" />
            </Link>
            <Link href={contactPageText.youtube} target="_blank">
              <BsYoutube title='Youtube' className="text-accentcol lg:hover:text-5xl lg:transition-all" />
            </Link>
            <Link href={`mailto:${contactPageText.email}`} target="_blank">
              <BsEnvelope title='Email' className="text-accentcol lg:hover:text-5xl lg:transition-all" />
            </Link>
          </div>
          <svg viewBox="0 -12 140 15" width="97%" height="100%" className="block md:hidden">
            <text className="fill-textcol font-bold">{pageText.title}</text>
          </svg>
          <h1 className="text-5xl md:text-7xl font-bold hidden md:block">{pageText.title}</h1>
          <svg viewBox="0 -12 260 15" width="90%" height="100%" className="block md:hidden">
            <text className="fill-accentcol font-dancing font-bold">{pageText.subtitle}</text>
          </svg>
          <h2 className="text-2xl md:text-4xl font-dancing text-accentcol hidden md:block">{pageText.subtitle}</h2>
          <div className="flex gap-3 md:gap-6 pb-12 pt-6 md:pt-12">
            <ButtonLink type="Secondary" text="Shows" link="/shows" widthClass="w-36 md:w-48" smallOnMobile={true} />
            <ButtonLink type="Primary" text="Book" link="/contact" widthClass="w-36 md:w-48" smallOnMobile={true} />
          </div>
        </div>
      </div>

      <Divider />

      <div className="min-[1100px]:h-screen bg-bglightcol flex items-center relative grain">
        <div className="w-full min-[650px]:w-fit mx-auto min-[1100px]:w-full h-fit flex flex-col min-[1100px]:flex-row px-4 md:px-6 py-10 gap-14 min-[1100px]:gap-8 z-10">
          <div className="w-full min-[650px]:w-fit min-[1100px]:basis-[58%]">
            <div className="min-[1100px]:w-[600px] flex flex-col gap-8">
              <h1 className="text-5xl min-[1060px]:text-6xl font-bold -mb-3"><NextShowText shows={shows} /></h1>
              <div className="w-full min-[650px]:w-[600px]">
                {ShowToDisplay}
              </div>
              <ButtonLink type="Secondary" text={<AllUpcomingShowsText shows={shows} />} link="/shows" widthClass="w-[250px] lg:w-[360px]" />
            </div>
          </div>

          <div className="w-full min-[1100px]:basis-[42%]">
            <div className="min-[1100px]:w-[434px] flex flex-col gap-8">
              <h1 className="text-5xl min-[1060px]:text-6xl font-bold -mb-3">Featured Video</h1>
              <div className="w-full aspect-[5.6/3.15] relative grain">
                <div className="w-full h-full absolute -top-2 -left-2 border border-accentcol pointer-events-none"></div>
                <div className="absolute bg-texttint pointer-events-none"></div>
                <iframe width="100%" height="100%" src={convertToEmbedLink(pageText.featuredVideo)} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="absolute" loading='lazy' />
                <div className="absolute w-full h-full bg-accentcol/20 pointer-events-none"></div>
                <div className="absolute w-full h-full bg-bgcol/20 pointer-events-none"></div>
              </div>
              <ButtonLink type="Secondary" text="See More Videos" link="/videos" widthClass="w-[250px] lg:w-[360px]" />
            </div>
          </div>
        </div>
      </div>

      <Divider />
    </>
  )
}


{/* <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wf1UQTX2iuc" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */ }

// {gigs?.map(gig => (
//   <GigCard key={gig.title} gig={gig} />
// ))}