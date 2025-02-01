import HomeHeroSection from './HomeHeroSection'
import LegacySection from './LegacySection'
import OurPhilosophy from './OurPhilosophy'
import PoweringFinance from './PoweringFinance'
import TechnologySection from './TechnologySection'
import TrustedLogosSection from './TrustedLogosSection'
import TrustedSection from './TrustedSection'

const HomeBlock = () => {
  return (
    <div>
      <HomeHeroSection />
      <PoweringFinance />
      <OurPhilosophy />
      <TechnologySection />
      <TrustedSection />
      <TrustedLogosSection />
      <LegacySection />
    </div>
  )
}

export default HomeBlock
