// Real Google reviews pulled verbatim from wewillfixit.com (June 2026 snapshot).
export type Review = {
  name: string;
  date: string;
  text: string;
  service?: string;
};

export const reviews: Review[] = [
  {
    name: "Saleh",
    date: "June 27, 2026",
    text: "We Will Fix It is a professional house maintenance company with skilled technicians and highly recommended",
  },
  {
    name: "Eduardo Rodriguez Sanchez",
    date: "June 26, 2026",
    text: "I called WeWillFixIt for a quick check and fix on electrical issues and Meliton and Louis came (on time as usual) and delivered an outstanding job. Super efficient and clean work delivered. We will keep booking services with them. Today one AC unit stopped working and within 2-3 hours Andrew and Reymon came and fix it in less than 30 mins. Honestly, I cannot recommend better company to work with. Once again super professional and extremely efficient.",
  },
  {
    name: "Aibel Gutierrez",
    date: "June 26, 2026",
    text: "We would like to thank Joven, Vernie, Julius, and Ryan DJ and the whole WWFI team for the excellent service they provided. We had been experiencing ongoing AC problems for the past few months, and they were able to thoroughly diagnose and finally resolve the issue. They were professional, knowledgeable, efficient, and kept us informed throughout the process. They also provided alternative solutions and explained what we could do if the issue happens again, giving us confidence and peace of mind. Their teamwork, attention to detail, and commitment to delivering a lasting solution were outstanding. Our AC is now working. Highly recommended—thank you all for your exceptional service!",
  },
  {
    name: "Orla Chohan",
    date: "June 24, 2026",
    text: "Great service from the team fixing my AC! Reynold and Lemuel were very professional, polite and efficient",
  },
  {
    name: "Eileen",
    date: "June 24, 2026",
    text: "Another great job by WeWillFixIt. Happy with the service and quality by Marlin and Ryan.",
  },
  {
    name: "Mashael Alshammari",
    date: "June 22, 2026",
    text: "Alex and Permian were so knowledgable and were able to fix an issue 4 other companies were unable to fix",
  },
  {
    name: "Marriz Ann Lopez",
    date: "June 20, 2026",
    service: "Duct Cleaning",
    text: "The two technicians you sent were extremely efficient. The teamwork and synergy between them were impressive—they communicated well and worked together seamlessly to complete the job quickly and effectively. Marlon and Ryan Paul did an excellent job cleaning our AC ducts. They clearly explained the entire process and showed us before-and-after photos, which gave us confidence in the quality of their work. They were very careful when moving items around our home, respectful of our property, and courteous throughout the service. Their professionalism and attention to detail left us as very satisfied customers. Keep up the great work, boys! Highly recommended",
  },
  {
    name: "Peter Cherry",
    date: "June 20, 2026",
    text: "We've just had the team from We Will Fix It – Ryan, Paul and Marlon – complete the second stage of our apartment's AC cleaning, and they were fantastic from start to finish. They arrived right on time, carefully protected the apartment with plastic coverings, and then got straight to work cleaning the AC ducts. They also took before-and-after photos, and the difference was genuinely impressive. The whole team was professional, friendly and took great pride in their work. We'll definitely be calling them again for future servicing. If you're looking for reliable home maintenance services in Dubai, make We Will Fix It your go-to team. You won't be disappointed.",
  },
  {
    name: "John Stewart",
    date: "June 19, 2026",
    text: "RJ and Cipprez provided an excellent service from start to finish. They arrived on time, were smartly dressed, and communicated clearly throughout. The issue was diagnosed quickly, repaired efficiently, and they also took the time to explain how to prevent future AC problems. Highly professional and reliable service—would strongly recommend.",
  },
  {
    name: "Kelly Burt",
    date: "June 18, 2026",
    text: "Ryan Paul and Marlon came and serviced our ACs today and did a great job, they were very thorough and explained everything they did to us at the end. They also showed us before and after photos and wow what a difference - thank you very much",
  },
  {
    name: "B. H.",
    date: "June 18, 2026",
    text: "We've just had another repair appointment, this time with Rod & John Mark, and once again the standard of work was excellent. They were punctual, highly professional, technically precise, and extremely thorough. What matters most to me is standards — not just showing up, but doing the job properly. They took the time to explain everything clearly before starting, carried out a detailed and methodical repair, and then walked me through exactly what had been fixed and why. They worked neatly, left everything spotless, and were also great with my dog, which I always appreciate. If you value proper workmanship, professionalism, and attention to detail, I would absolutely recommend them.",
  },
  {
    name: "Agustina Wu",
    date: "June 17, 2026",
    text: "100% recommended. Alexander and Permin are very knowledgeable and helpful, they not only fixed your AC but explains what is the problem. They will cover your furniture and appliances with plastic before working and left my apartment spotless after. Thank you so much!",
  },
  {
    name: "Linda Kjær Hansen",
    date: "Featured customer story",
    text: "By far the most reliable maintenance company we have come across in Dubai to date… And we have been through a few! We Will Fix It tell it like it is and work in long term solutions with original parts – not dumping costs by using cheaper materials, repairing with duct tape or cutting corners. Compared with other companies some of their prices are higher, true. But what you get are trained specialists in their field, well worth the money spent. On top of everything, the teams we have encountered via telephone and in our home are polite, competent and professional. I highly recommend \"We Will Fix It\" to anyone struggling to find a good house maintenance company. In fact; I can't recommend them enough.",
  },
  {
    name: "Sebastian Le",
    date: "Featured customer story",
    text: "Well I think I found my new contractor! WWFI were able to quickly confirm they had the same water heater in stock and came today at 8:30 AM – literally less than 12h later. They got it changed in no time and protected the work site very well which is the first time I've seen this in Dubai. After trying so many big names here, I've always been disappointed by their services. But I was really impressed with WWFI's super-fast response time and their staff friendliness. You guys made a customer very happy today.",
  },
  {
    name: "Barry Lake",
    date: "Annual contract renewal",
    text: "We chose to renew our Maintenance contract with WWFI due to the teams on site. They are always friendly, professional and prepared with the correct tools. We have had several larger issues in the past and the team have stayed on site as long as it takes to resolve the issue – rather than just saying we need to replace expensive items. This gives us the impression that they are genuinely trying to resolve the issue for us and not just making money by suggesting replacements when not needed.",
  },
  {
    name: "Christopher Batson",
    date: "Electrical",
    text: "This time I used the electrical department, and I was not disappointed. They did a superb job and cleaned everything up afterwards. I have been living in Arabian Ranches for 17 years and this is the best company I have found by far.",
  },
  {
    name: "Elena Chistotkina",
    date: "Plumbing",
    text: "I can't express enough how happy I am with WWFI, it was like a breeze. Having had a painful experience with another provider, I was bracing myself for more trauma, but the team arrived quickly at night to isolate the leaking water tank and quickly provided a quote with all material available and were scheduled to complete the very next day. I can't appreciate enough how the technicians are always on time, polite and smiley.",
  },
  {
    name: "Kasia B",
    date: "Handyman",
    text: "We were left with a chandelier that no one wanted to install because it came without instructions. WWFI did not waste a single minute, immediately started working and didn't stop until they were done. I was very impressed at how fast and efficient they were. I would highly recommend them to anyone.",
  },
  {
    name: "Rose Marie",
    date: "Painting",
    text: "To be sat in a beautifully painted living room on the same day it was done is first class. The previous company left the walls imperfect. WWFI have come in, patched up the imperfections, painted every part perfectly and put the fittings back neatly. They even did a duct clean at the same time, changed the plug sockets and trunked in some unsightly cables. It has changed my whole room.",
  },
];