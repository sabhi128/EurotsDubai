// All FAQ content verbatim from wewillfixit.com (light formatting cleanup only).
export type FAQ = { q: string; a: string };
export type FAQCategory = { title: string; items: FAQ[] };

export const faqCategories: FAQCategory[] = [
  {
    title: "Air Conditioning Systems",
    items: [
      {
        q: "How often should I get my AC serviced?",
        a: "Experts agree that ideally AC units should be serviced every 3-4 months to maintain cleanliness and efficiency. Drain lines and drip trays build up and need to be cleaned in order to avoid leaks. Electrics also need to be checked and filters should be cleaned to ensure that the air is as clean as possible. One of the biggest benefits of regular AC servicing is that it allows any potential issues to be picked up early. This means that minor repairs can be made and parts replaced before a bigger issue occurs. During the AC service the Technician can also monitor the state of your ducts and coils and provide recommendations for their cleaning and maintenance.",
      },
      {
        q: "How do I know how many AC units I have?",
        a: "You can easily calculate the number of AC units in your property by counting the number of installed thermostats. Each thermostat will be controlling one AC unit.",
      },
      {
        q: "Do I need to service AC units that I don't use?",
        a: "You may have multiple units in your property - some that get used regularly (for example, in the kitchen) and some that get used rarely (perhaps in the guest room). However, it is recommended that all units are serviced on a regular basis regardless of how often they are used. Dust and dirt can still settle in an unused unit and electrical faults can still occur. We strongly recommend that you get them all serviced at the same time, so that if you are suddenly more reliant on them, they are ready to be used and are functioning optimally.",
      },
      {
        q: "If I am in an apartment, is the AC centralized or do I need to get my own system serviced?",
        a: "In most cases, the AC units for your apartment will need to be separately serviced from the others in the building and this is likely to be your responsibility to arrange. You should also be ensuring ducts within your apartment are regularly cleaned. If you aren't sure, speak to your building provider to establish if you need to schedule an AC service yourself.",
      },
      {
        q: "How often should I change my filters?",
        a: "Most filters do not need replacing often but they do benefit from regular cleaning. Almost all AC systems will have some kind of filter. These filters are necessary to remove minor particles from the air, keeping it safe and clean. Filter cleaning forms a part of most regular AC servicing visits.",
      },
      {
        q: "Should I do anything to maintain my AC between servicing?",
        a: "No. Aside from minimising running hours by keeping your system on Auto and turning off rooms as required, your system shouldn't require any special attention. Regular servicing needs to be carried out but this should always be done by professional technicians since it requires potentially dangerous electrical work and climbing onto ceilings and roofs.",
      },
    ],
  },
  {
    title: "AC Usage",
    items: [
      {
        q: "How can I reduce energy costs from ongoing AC use?",
        a: "Simple measures such as heat blocking blinds and curtains could help to block out the heat making it easier for your AC to maintain comfortable temperatures. Smart thermostats that include climate control and eco modes will help to ensure your system is running as efficiently as possible. Make sure fans are set to \"auto\" so that they shift to low or turn off entirely once comfortable temperatures are reached. During the hotter months increasing thermostats to around 25/26 when you are not at home will help to sustain acceptable humidity levels whilst minimising cost. It is also important to have your AC regularly serviced to ensure that your system is running efficiently.",
      },
      {
        q: "Can air conditioning control humidity?",
        a: "Yes, by their very nature air conditioners de-humidify the air. If you are experiencing high levels of humidity inside your home one of the first things you should do is to check that your AC system is running correctly. Inefficient AC can be a leading cause of high humidity levels. If the AC is running correctly and you are still experiencing high levels of humidity indoors, you may need to check for other issues in your property — incorrect seals on windows/doors or cracks in the ceiling.",
      },
      {
        q: "Is it better to leave your AC running or turn it on and off as needed?",
        a: "During the cooler months, turning your AC on strictly when needed makes sense. However, during the summer months turning your AC off when you leave the house could raise humidity levels and make it more difficult to reduce the heat again when you are back. If you are going out for an entire day or even away for a weekend, there is nothing to stop you turning your AC off altogether. Provided that your AC system is well-maintained, your property should return to an ambient temperature quickly once you return home and switch the AC back on.",
      },
      {
        q: "Should I leave my AC on when I go on holiday?",
        a: "We strongly recommend that you do not leave your AC system running when you are away on holiday. With no one checking your home any issues that may develop may not be picked up and you could find yourself returning home to a disaster zone. Blocked drains, gas leaks and electrical fires can all occur if AC systems are not regularly checked. If you are going to be away from your home for a long period, having someone attend your home and run your AC system once per week will help to manage the humidity and avoid any major issues. If you are not able to have someone do this on your behalf it is far safer to leave your AC off than leave it running without being monitored.",
      },
      {
        q: "What is the best temperature to have my AC on?",
        a: "The answer really depends on your personal preference. Most people are happy with a temperature of around 21/22 degrees in summer during the day, dropping it down a few degrees at night to help them sleep better. During summer, setting the temperature around 25/26 degrees when you are out of the house will keep the humidity at bay whilst minimising cost.",
      },
      {
        q: "Is it a good idea to also get ceiling fans?",
        a: "Ceiling fans do not directly impact the efficiency of your AC system. However, they can make rooms feel more pleasant by providing a breeze. Having a ceiling fan may make you feel more comfortable at temperatures slightly higher, allowing you to set your AC general temperature higher. Remember, a ceiling fan is simply shifting the existing air around a room, rather than cooling it.",
      },
    ],
  },
  {
    title: "AC Repairs",
    items: [
      {
        q: "What are the signs my AC isn't working correctly?",
        a: "The most obvious sign that your AC isn't working is that the air temperature in your property isn't cooling. If you feel warm air coming from vents or if you wake up sweating in the night it's very likely that something isn't right with your AC system. Strange noises and loud fans could also indicate that something within the system is faulty. In these instances you should always call out a technician — it isn't safe to play around with AC systems yourself. The combination of water and electrics can be deadly.",
      },
      {
        q: "How do I know it's time for a new air conditioner?",
        a: "When your AC is experiencing breakdown issues on a regular basis, there will come a point where it is more cost-effective to replace your system than to persist with replacing its parts. Dubai Municipality recommend replacing your AC units every ten years, though we believe this to be a minimum duration if proper servicing is maintained at least twice a year.",
      },
      {
        q: "Will a new AC system save me money?",
        a: "Replacing a full AC system is costly, yet selecting the right quality units and installation practices will save you money in the long run. Many Dubai residents are currently opting to replace their old AC units in favour of energy saving inverter units that are proven to minimise DEWA bills.",
      },
    ],
  },
  {
    title: "Duct Cleaning",
    items: [
      {
        q: "Why do ducts need cleaning?",
        a: "Air ducts are responsible for pushing air into each of your rooms. Over time, dust particles, dirt and even harmful microorganisms start to build up on their surfaces. When your AC is running it pushes this dirt and dust around, blowing it back into your rooms. If you can see dust or mould then that is a key indicator that your ducts need cleaning! If your ducts have not been cleaned for over a year then you can safely assume that dust and dirt will be starting to settle. If you are noticing an increase in the suffering of allergies from family members this may also indicate that your ducts need cleaning.",
      },
      {
        q: "What type of duct cleaning is best?",
        a: "For professional duct cleaning We Will Fix It uses Rotobrush equipment operated by specially trained technicians. This method loosens up more dirt and debris than many alternatives due to its accelerated spin cycle. In addition, it enables packed dirt and mould removal using a high-powered industrial vacuum at source, preventing contamination. Antibacterial fogging is one of the final steps in our duct cleaning process to kill any remaining bacteria within the ducts.",
      },
      {
        q: "When should I get my AC ducts cleaned?",
        a: "Your AC ducts should be professionally cleaned every 1 to 2 years dependent on usage. If doors are regularly left open, sand and other airborne particles will find their way into the AC system, requiring duct cleaning more frequently. Be cautious of providers offering duct cleaning bundled with your AC service — duct cleaning is not required as frequently as AC servicing.",
      },
      {
        q: "How long does duct cleaning take?",
        a: "Professional duct cleaning should take approximately 1.5 hrs per AC unit, depending on the length of the duct. We Will Fix It uses Rotobrush equipment with powerful suction, meaning less mess and less disruption for your family. Cleaning of the area and any paint retouches are provided free of charge by We Will Fix It.",
      },
    ],
  },
  {
    title: "Coil Cleaning",
    items: [
      {
        q: "What are AC Coils and why do they need cleaning?",
        a: "Your AC unit houses a coil that is responsible for cooling the air being pushed through the AC system. The coil is housed in your indoor system and is wet, which means it is susceptible to gathering dirt and mould. Any dirt and mould collecting on your coil will eventually start to seep into your system and impact the quality of your air. A thorough clean of your coils should be carried out at least once per year.",
      },
      {
        q: "How much does it cost to clean AC coils?",
        a: "The cost of your AC coil cleaning depends on the number of AC units you have in your home, and the ease of accessing your AC coils. Many coils in the UAE are located inside the ceiling with limited access. We Will Fix It coil cleaning ranges between AED 850 and AED 1,450 per unit and ceiling repair work is additionally AED 225 per hour + materials (all charges + 5% VAT). If a ceiling cut is necessary to ensure AC effectiveness, we provide seamless repair as standard.",
      },
      {
        q: "How often should you clean coils on an AC unit?",
        a: "AC coil cleaning should be carried out every 18 months to 2 years. Coils accumulating dirt are forced to work harder to cool your home sufficiently. This additional strain on your AC can lead to water leaks, increased DEWA bills and additional breakdowns.",
      },
    ],
  },
  {
    title: "Electrical Services",
    items: [
      {
        q: "What electrical services do you offer?",
        a: "WWFI provides all standard electrical services associated with home maintenance. These include electrical fault finding, installation of garden lights, socket & light switch replacements and replacing ceiling lights. These services are especially beneficial for customers moving home or looking to upgrade older fixtures & fittings. Our qualified electrical technicians will ensure all work is safe and compliant.",
      },
      {
        q: "How do I contact electrical service providers in an emergency?",
        a: "Electrical services are in high demand, so while We Will Fix It will do its best to fit in emergencies, the best way to guarantee emergency response is to take an annual contract where the 90-minute emergency response is guaranteed at any time of day or night.",
      },
      {
        q: "Are your electricians licensed and insured?",
        a: "Yes, all our electricians are fully licensed and insured, ensuring that all work complies with local regulations and safety standards.",
      },
      {
        q: "Can you help with energy-efficient solutions?",
        a: "Yes, we offer a range of energy-efficient options, including LED & smart-thermostat installations, to help reduce energy consumption and lower DEWA bills.",
      },
    ],
  },
  {
    title: "Plumbing Services",
    items: [
      {
        q: "What services do most plumbers offer?",
        a: "Our most popular plumbing services include correcting low water pressure, replacing pumps & pressure kits, replacing taps, fixing leaks and water tank cleaning. Contact our expert staff to assist you with these or any other plumbing requirements.",
      },
      {
        q: "What are the different types of water heaters in Dubai?",
        a: "Some newer developments have one single large solar water heater on the roof; many apartments and older villas have multiple heaters, while some shared developments operate from just one larger heater that serves the community. If a water heater leaks it can ruin your ceiling and lead to further damage to your property, so always inspect for signs of rust and contact a professional at the first sign of trouble.",
      },
      {
        q: "Does We Will Fix It offer any warranties on its plumbing services?",
        a: "We Will Fix It has a 12-month warranty on parts provided and installed by us.",
      },
      {
        q: "What are the signs of a hidden water leak?",
        a: "Unexplained increases in water on your DEWA bills, damp spots on walls or ceilings, musty odours, pumps continuing to run, or the sound of running water when taps are off can indicate hidden leaks. If you notice these signs, it's crucial to have a professional inspection promptly.",
      },
    ],
  },
  {
    title: "Painting Services",
    items: [
      {
        q: "Why do most painters charge hourly?",
        a: "WWFI charge both hourly & daily rates for painting services depending on the size of the job. With 15+ years' experience measuring and painting Dubai homes we can often provide accurate price estimations without having to visit your property.",
      },
      {
        q: "Do I need to provide the paint for the painting services?",
        a: "Painting service providers should give you the option to either request particular paint colours and grades, or to opt to provide it yourself. WWFI can match up or provide paint codes for standard colours used by large-scale developers such as Emaar & Nakheel.",
      },
      {
        q: "What does We Will Fix It's painting service cover?",
        a: "We take care of all the preparation you need. Our technicians will take down your curtains, blinds & pictures, lay painter's tape and protect your furniture & floors with professional-grade protective materials. Everything will be cleaned up and returned to its rightful place.",
      },
    ],
  },
  {
    title: "Water Tank Cleaning",
    items: [
      {
        q: "How long does water tank cleaning take?",
        a: "Professional cleaning of a standard sized water tank takes approximately four hours. Remember to turn off your water supply 24 to 48 hours before receiving the service to optimise water in the tank and minimise wastage.",
      },
      {
        q: "How often should I clean my water tank?",
        a: "Dubai Municipality recommends carrying out water tank cleaning every 6 months. The pump and tank system in Dubai naturally builds deposits that must be removed, so never leave it longer than 12 months to have yours cleaned.",
      },
    ],
  },
];