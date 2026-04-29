// NXT Move Partnership Prospectus — content
// Sourced from "NXT Move Initiatives" PDF, Apr 2026

// IIFE-wrapped so the top-level const declarations stay local to this script.
// They previously leaked into the page-wide global lexical scope as classic-
// script "const"s; only window.NXT_DATA needs to escape.
(function () {
const REGIONS = [
  {
    id: 'africa',
    num: '01',
    name: 'Africa',
    logo: 'assets/logos/africa.png',
    accent: 'linear-gradient(135deg, #FFC60B 0%, #FF6B1A 50%, #E11D0F 100%)',
    accentSolid: '#F5C518',
    pdfPage: 5,
    leaders: [
      { name: 'Joe Gachira', role: 'Africa Strategist' },
      { name: 'John & Christy Page', role: 'Word of Life — Africa' },
    ],
    vision:
      'A multi-generational community of biblical servant leaders whose authentic, accountable relationships are worked out in holistic synergy and collaboration.',
    stats: [
      { value: '1.4B', label: 'Total population' },
      { value: '70%', label: 'Under age 30' },
      { value: '19', label: 'Median age — youngest continent on earth' },
    ],
    pull:
      'NXT Move is not just facilitating conversations — we are building a movement. One where collaboration replaces division.',
    catalyze:
      'Africa is home to nearly 1 billion people under the age of 30 — the most youthful demographic on the planet. In Nairobi, NXT Move is doing something unprecedented: for the first time in Kenya\'s history, Presbyterian, Anglican, Pentecostal, and Evangelical bishops are sitting in the same room with next-gen and marketplace leaders, united around a common mission for the next generation. This is not just conversation. It is movement-building at the city level.',
    collaborate:
      'The Nairobi Model City initiative is the flagship expression of collaborative leadership in Africa — a community of intentional prayer, a hub of resource and knowledge sharing, and a platform for leadership development built on social justice and servant leadership principles. NXT Move convenes the multi-generational community, facilitating the strategic processes that make city-wide transformation possible.',
    champion:
      'NXT Move champions Africa\'s leaders by amplifying indigenous solutions — models created by African leaders, for African contexts. Joe Gachira now leads a strategic group of bishops, teenagers, marketplace leaders, and youth movement leaders dreaming together of a shared preferred future for Nairobi — and beyond.',
    interests: ['mercy', 'global-south'],
  },
  {
    id: 'brazil',
    num: '02',
    name: 'Brazil',
    logo: 'assets/logos/brazil.png',
    accent: 'linear-gradient(135deg, #FF8A1A 0%, #E11D0F 50%, #6B1B7A 100%)',
    accentSolid: '#D81B7A',
    pdfPage: 6,
    leaders: [
      { name: 'Samuel de Lima', role: 'Regional Lead' },
      { name: 'Hudson Parente', role: 'Steiger Brazil' },
      { name: 'Anna Querioz', role: 'Vocare | YLT 27' },
      { name: 'Gabriel Neres', role: 'Mackenzie University, São Paulo' },
      { name: 'Mariana Rubinec', role: 'GLS Next Gen' },
    ],
    vision:
      'A vibrant, intergenerational community united by a passion to raise up a resilient generation — young people who stand firm in their identity in Christ, no matter what challenges they face.',
    stats: [
      { value: '34M', label: 'Identify as Evangelical' },
      { value: '23%', label: 'Next gen individuals' },
      { value: '23%', label: 'of Brazil\'s workforce is next gen' },
    ],
    catalyze:
      'Brazil is a nation of extraordinary Christian energy and equally extraordinary fragmentation. NXT Move catalyzes what Anna and Samuel are building: an intergenerational community that connects those working on the margins alongside those in large, successful churches — uniting every expression of next-gen passion under a shared vision for a resilient generation.',
    collaborate:
      'NXT Move facilitates alignment between diverse leaders, ministries, and networks through roundtables and collaborative gatherings. The São Paulo City Project is developing a city-wide strategy that cultivates collaboration, deepens intergenerational relationships, and lays the foundation for long-term transformation.',
    champion:
      'NXT Move champions Brazil\'s leaders by connecting them to a global community, giving younger leaders access to mentors, training, and resources that have historically been out of reach. When leaders like Anna and Samuel are connected globally, their local dreams gain global momentum.',
    interests: ['global-south'],
  },
  {
    id: 'central-asia',
    num: '03',
    name: 'Central Asia',
    logo: 'assets/logos/central-asia.png',
    accent: 'linear-gradient(135deg, #2D8A2F 0%, #E1BB1A 50%, #E11D0F 100%)',
    accentSolid: '#2E8B3D',
    pdfPage: 7,
    leaders: [{ name: 'Ruslan Zagidulin', role: 'Regional Lead | 2CA' }],
    vision:
      'A Christ-transformed next generation across Central Asia. Within 10 years, 2% of the young generation — approximately 800,000 individuals — will become followers of Christ.',
    stats: [
      { value: '77M', label: 'Total population' },
      { value: '<5%', label: 'Christian — one of the world\'s least-evangelized regions' },
      { value: '800K', label: '2% of young generation by 2034' },
    ],
    pull:
      'NXT Move is a community of crazy people passionate about the gospel. When I lost my son, they grieved with me. It was like a family.',
    pullAttrib: 'Ruslan Zagidulin',
    catalyze:
      'Kyrgyzstan. Kazakhstan. Uzbekistan. The Church operates in restricted environments where public evangelism is limited by law — and yet Ruslan Zagidulin is already in the field. The 2CA movement carries one of the most audacious goals in the NXT Move network: 2% of Central Asia\'s young generation following Christ within a decade, implying 8 million gospel presentations. Young City Innovators Hubs in Almaty, Bishkek, and Tashkent equip young leaders to multiply toward that specific, measurable, prayerful goal.',
    collaborate:
      'NXT Move recognizes the 2CA movement as a strategic expression of its regional vision — connecting Ruslan\'s community to global relationships and resources no regional movement could access alone. A Digital Ministry Hub creates a network of digital youth ministers for mutual support across difficult cross-border contexts. NXT Move connected Dare2Share with Ruslan\'s community, enabling resources empowering young evangelists who face opposition because of their faith.',
    champion:
      'When Ruslan lost his son, the NXT Move community grieved with him. Prayer came from across the world. NXT Move champions this vision by refusing to let Konstantine, Ruslan, and their teams carry it in isolation — building the relational community and accountability infrastructure that keeps leaders growing and multiplying long after any single gathering. They go further, faster, and are never alone.',
    interests: ['unlikely-soil', '10-40'],
  },
  {
    id: 'east-asia',
    num: '04',
    name: 'East Asia',
    logo: 'assets/logos/east-asia.png',
    accent: 'linear-gradient(135deg, #E11D0F 0%, #FF8A1A 50%, #8FBF2C 100%)',
    accentSolid: '#A8D124',
    pdfPage: 8,
    leaders: [{ name: 'Jiyoung Yoo', role: 'Regional Leader' }],
    vision:
      'To build a strong, connected community across East Asia made up of leaders passionate about reaching and mobilizing the next generation to live on mission for Jesus.',
    stats: [
      { value: '1.7B', label: 'Total population' },
      { value: '350–400M', label: 'Under age 30' },
      { value: '6–8%', label: 'Christian — vast unreached majority' },
    ],
    pull:
      'NXT Move creates opportunities for like-minded leaders to connect and build relationships that inspire, activate, and mobilize a next generation on mission for Jesus.',
    catalyze:
      'East Asia is home to 1.7 billion people with 350–400 million under age 30 — and Christians representing only 6–8% of that vast population. NXT Move catalyzes the foundational work: identifying and connecting key leaders, establishing relational infrastructure, and beginning the map-drawing process across an enormously diverse cultural landscape.',
    collaborate:
      'NXT Move builds authentic relationships between leaders in ministry, business, and para-church sectors — all aimed at the next generation. Healthy mentoring relationships between young and experienced leaders are the connective tissue. Every gathering is an investment in the trust that makes deeper collaboration possible.',
    champion:
      'NXT Move champions East Asian leaders by giving them access to a global community that believes in them and sees what God is doing through them. In a region where pressure to perform is immense, NXT Move brings something rare: space for formation, not just function.',
    interests: ['10-40'],
  },
  {
    id: 'europe',
    num: '05',
    name: 'Europe',
    logo: 'assets/logos/europe.png',
    accent: 'linear-gradient(135deg, #E66B1A 0%, #6B2E5C 50%, #1F5FA8 100%)',
    accentSolid: '#1F5FA8',
    pdfPage: 9,
    leaders: [{ name: 'Dan & Marina Randall', role: 'Regional Co-Leaders' }],
    vision:
      'Cultivating a collaborative leadership community across Europe to advance the Gospel through strategic dialogue, innovative thinking, and intentional development of next-generation ministry.',
    stats: [
      { value: '10.3%', label: 'EU population ages 15–24' },
      { value: '1,200', label: 'Gospel Advancing Leaders being recruited in 2026' },
      { value: '6', label: 'Collaborative tables active in 2026' },
    ],
    pull:
      'When leaders come together, that\'s when the gospel is truly accelerated. The answer for each nation can be found in other nations.',
    catalyze:
      'Dan and Marina don\'t see Europe as post-Christian. They see it as pre-revival. The Amplify Programme invests in 200 young people in the 2026–27 cohort. The Gospel Advancing Roundtable is mobilizing leaders across Europe and resourcing them with Dare2Share materials. The Leadership Cultivation Roundtable creates space to innovate and develop the next generation together.',
    collaborate:
      'Europe is NXT Move\'s most operationally mature region. NOW Conversations are happening across Spain, Kosovo, France, and other nations — gatherings where leaders discover that the answer to their context can be found in another region\'s story. Key partnerships with E21, Dare2Share, Biblica, Christian Vision, One Hope, and EEA are creating a pan-European collaborative ecosystem.',
    champion:
      'Six years ago, a young teenager named Gloria walked into Dan and Marina\'s Young Evangelists Academy. Today she\'s at university — leading the very program she came through and raising up hundreds of evangelists every year. NXT Move invested in Dan and Marina, Dan and Marina invested in Gloria, and Gloria is now investing in hundreds more. That is not addition. That is multiplication — and it is exactly what NXT Move was built to champion. One leader, developed well, changes the trajectory of an entire generation.',
    interests: ['europe'],
  },
  {
    id: 'latin-america',
    num: '06',
    name: 'Latin America & Caribbean',
    logo: 'assets/logos/latin-america.png',
    accent: 'linear-gradient(135deg, #2A6F4D 0%, #E66B1A 50%, #E1BB1A 100%)',
    accentSolid: '#1A8F7A',
    pdfPage: 10,
    leaders: [{ name: 'Hansel & Mackenzie Castillo', role: 'Regional Co-Leaders' }],
    vision:
      'Empowering leaders and organizations through connection, collaboration, and strategic support to accelerate their impact in reaching the next generation for Jesus.',
    stats: [
      { value: '25–30%', label: 'Catholic (declining)' },
      { value: '54%', label: 'Under age 15 — one of the largest youth populations globally' },
      { value: '19%', label: 'Evangelical — a growing movement' },
    ],
    pull:
      'NXT Move embraces who we are and allows us to have a voice — to discover the best way to do things that work in our context.',
    catalyze:
      'Latin America carries one of the world\'s largest youth populations — and a faith landscape in transition, with Catholic identification declining and Evangelical communities growing. NXT Move catalyzes Hansel\'s vision of a transformed Latin America led by its own people. His story began in Puerto Rico renovating neglected housing and building community — a local vision now grown into a regional mandate across the Caribbean and beyond.',
    collaborate:
      'NXT Move connects and convenes next-generation-focused organizations — facilitating strategic conversations and roundtables that move the region from fragmentation toward synergy. A Regional Asset Map identifies opportunities for collaboration across organizations. When leaders here discover how to resource each other, energy previously spent on survival gets redirected toward reaching more young people with the gospel.',
    champion:
      'NXT Move champions Latin America\'s leaders with dignified, relational support that honors the leader\'s humanity — not just their productivity. Hansel and his fiancée, who he met through the NXT Move community, are moving to the Dominican Republic to model a holistic Next Gen strategy for the Caribbean islands.',
    interests: [],
  },
  {
    id: 'middle-east',
    num: '07',
    name: 'Middle East & North Africa',
    logo: 'assets/logos/middle-east.png',
    accent: 'linear-gradient(135deg, #E66B1A 0%, #C42710 50%, #6B1B0A 100%)',
    accentSolid: '#8B4513',
    pdfPage: 11,
    leaders: [{ name: 'MENA Regional Voice', role: 'Names withheld for safety' }],
    vision:
      'Fostering collaboration in one of the world\'s most challenging ministry contexts — and equipping underground leaders in six unreached North African nations to multiply disciples at extraordinary personal risk.',
    stats: [
      { value: '60%', label: 'MENA population under age 30' },
      { value: '6', label: 'Unreached North African nations: Libya, Algeria, Morocco, Mauritania, Somalia, Sudan' },
      { value: '25–30', label: 'Underground leaders trained per cohort' },
    ],
    pull: 'One trained leader in Libya does not reach one person. He reaches a generation.',
    catalyze:
      'The MENA region is predominantly Muslim, with Christianity facing significant cultural or legal pressure across the region. In six North African nations — Libya, Algeria, Morocco, Mauritania, Somalia, Sudan — visible Christianity barely registers. And yet leaders are already in the field, quietly planting house churches and making disciples at extraordinary personal risk. NXT Move\'s catalytic role is to find what God is already doing and accelerate it: gather underground leaders, train them, connect them as a community, and send them back equipped.',
    collaborate:
      'The Bishops of Cairo and Tunis provide safe operational infrastructure — a rare partnership giving NXT Move the credibility and cover to operate where few others can. Bi-annual cohort intensives bring 25–30 underground leaders together from six nations. A secure digital platform tracks fruit in real time. Across the broader MENA region, culturally contextualized resources are held in common by the community — not owned by a single entity. Leader names and photos are omitted for safety.',
    champion:
      'NXT Move champions these leaders by showing up pastorally — not just programmatically. Every leader at personal risk is sustained, not just trained and deployed. The funding reserved for the Middle East is held faithfully — waiting for the right moment, the right leader, and the right plan. These leaders are unnamed by necessity — and championed with full commitment.',
    interests: ['unreached', '10-40'],
  },
  {
    id: 'north-america',
    num: '08',
    name: 'North America',
    logo: 'assets/logos/north-america.png',
    accent: 'linear-gradient(135deg, #E66B1A 0%, #C42A4D 50%, #5C2A8A 100%)',
    accentSolid: '#5B3FB8',
    pdfPage: 12,
    leaders: [
      { name: 'Randy Davis', role: 'Regional Leader' },
      { name: 'Miguel Faundez', role: 'NXT Move DFW' },
      { name: 'Vince Parker', role: 'Life.Church' },
    ],
    vision:
      'Co-creating a network of innovative young leaders pioneering a new paradigm of next-gen ministry — rooted in biblical foundations and fueled by learning, collaboration, and creativity.',
    stats: [
      { value: '617M', label: 'Total North America population' },
      { value: '169M', label: 'Ages 0–30' },
      { value: '<40%', label: 'Millennials & Gen Z identify as Christian' },
    ],
    catalyze:
      'North America faces a defining generational challenge: fewer than 40% of Millennials and Gen Z identify as Christian — and many are disengaging from the Church entirely. NXT Move\'s DFW Model City initiative is the most advanced expression of the Catalytic Communities model anywhere in the network, building deep collaboration across churches, ministries, and Christian business leaders. Regional Innovation Hubs are forming cohorts of young leaders to develop fresh expressions of next-gen ministry.',
    collaborate:
      'NXT Move convenes and connects younger ministry leaders through roundtable conversations that foster collaboration, mutual learning, and shared vision. A research partnership with Dallas Theological Seminary is developing a longitudinal study of Christian practices and faith maturity. Partnerships with Dare2Share, Life.Church, East West Ministries, and NNYM are building a nationwide collaborative ecosystem.',
    champion:
      'NXT Move champions North American leaders by connecting them to the global community — expanding their vision beyond their own city and denomination, and as a result, US resources are equipping young European evangelists. That is the multiplier effect of being championed into a global community.',
    interests: [],
  },
  {
    id: 'south-asia',
    num: '09',
    name: 'South Asia',
    logo: 'assets/logos/south-asia.png',
    accent: 'linear-gradient(135deg, #E11D8F 0%, #E66B1A 50%, #FFC60B 100%)',
    accentSolid: '#FF1493',
    pdfPage: 13,
    leaders: [{ name: 'Dr. Joyson Cherian', role: 'Regional Leader' }],
    vision:
      'Cultivating a community united by the goal of advancing theological education — and equipping 300+ church planters with indigenous training that combines theological depth with practical ministry application.',
    stats: [
      { value: '~1B', label: 'Young people in South Asia' },
      { value: '110', label: 'Church planters in 2026 pilot — India, Bhutan, Bangladesh' },
      { value: '$209', label: 'Cost per trained leader — extraordinary Kingdom value' },
    ],
    pull:
      'This is not simply a training program. It is a strategic investment in the long-term sustainability of Christianity across the world\'s most populous region.',
    catalyze:
      'South Asia is home to nearly 1 billion young people, with Christianity growing rapidly — but without trained leaders, the growth is fragile. Joyson began as a young man training Indians to share the gospel. One hundred youth camps later, tens of thousands have been trained and reached hundreds of thousands. The 2026 pilot delivers a 20-month hybrid diploma to 110 church planters across three nations, with curriculum developed indigenously by 12 South Asian next-generation leaders — covering Gospel Advancing, Jesus-Focused Youth Ministry, and Soul Care.',
    collaborate:
      'Through NXT Move, Joyson connected with key funders, academics, and publishers to write an indigenous Next Gen curriculum becoming the set text in seminaries across South Asia. The 2027–2030 expansion scales to five nations — India, Bhutan, Bangladesh, Myanmar, Nepal — building institutional partnerships to embed youth ministry as a permanent discipline in South Asian theological education. NXT Move provides strategic guidance and connects the team to resource partners globally.',
    champion:
      'In July 2026, Dr. Joyson\'s team will graduate 250 women who came out of prostitution near Vijaywada — trained, commissioned, and deployed as ministers of the gospel. That is what championing looks like: leaders formed at the intersection of personal redemption and missional calling. NXT Move champions South Asian church planters by ensuring their training is theologically deep, culturally grounded, and practically equipping.',
    interests: ['multiplier', 'global-south'],
  },
  {
    id: 'southeast-asia',
    num: '10',
    name: 'Southeast Asia',
    logo: 'assets/logos/southeast-asia.png',
    accent: 'linear-gradient(135deg, #E11D0F 0%, #E66B1A 50%, #2EC4B6 100%)',
    accentSolid: '#1AC8E0',
    pdfPage: 14,
    leaders: [
      { name: 'Herman Dionson', role: 'Regional Leader' },
      { name: 'Alvin Tau', role: 'Regional Co-Leader' },
    ],
    vision:
      'Equipping and sustaining a thriving community through intentional care, leadership cultivation, and regional collaboration — empowering the next generation with spiritual and relational resilience.',
    stats: [
      { value: '680M', label: 'Total population' },
      { value: '340M+', label: 'Youth under age 30' },
      { value: '18–20%', label: 'Christian — significant and growing' },
    ],
    pull:
      'Things are happening because NXT Move is listening. They stand alongside us and support us.',
    catalyze:
      'Southeast Asia has over 340 million youth — a staggering opportunity for next-gen discipleship. Herman Dionson is drawing the map across this vast region — identifying key leaders, creating invitational spaces where they belong, and accelerating youth-focused initiatives across digital, missional, and justice spaces. The Philippines serves as the scalable model: what is proven through roundtables in Pangasinan, Bohol, Iloilo, and Davao can be replicated across the wider region.',
    collaborate:
      'A Soul Care Hub is launching as a safe space for leaders to process, discern, and receive care. Strategic Regional Mapping creates a database of key leaders and locations to facilitate connectivity across nations. Alvin Tau\'s co-lead role bridges Northern and Southern regional opportunities, ensuring next-gen professionals can integrate faith and work across the breadth of Southeast Asia.',
    champion:
      'Herman describes NXT Move as a community of servants — people who wash feet. With NXT Move, leaders feel heard and seen. Jaira, a young student who came through NXT Move\'s investment, is now leading Youth Alive and impacting hundreds of lives. NXT Move championed her potential before she could fully see it herself.',
    interests: ['mercy'],
  },
  {
    id: 'south-pacific',
    num: '11',
    name: 'South Pacific',
    logo: 'assets/logos/south-pacific.png',
    accent: 'linear-gradient(135deg, #2EC4B6 0%, #E66B1A 50%, #1F5FA8 100%)',
    accentSolid: '#00B7D4',
    pdfPage: 15,
    leaders: [
      { name: 'Amit Khaira', role: 'NXT Move Plus 8 Entity Lead' },
      { name: 'Steve Scrimgeour', role: 'Regional Co-Lead' },
      { name: 'A.J. Heijns', role: 'Regional Co-Lead' },
    ],
    vision:
      'Igniting a movement of student-led prayer and storytelling that unites, equips, and transforms communities for God\'s glory — raising young leaders who lead with faith, authenticity, and purpose.',
    stats: [
      { value: 'Dominant', label: 'Christianity — but requires fresh mobilization' },
      { value: '50–60%', label: 'Population under age 30' },
      { value: '3', label: 'Co-leads driving distinct ministry streams' },
    ],
    catalyze:
      'Christianity is the dominant religion in the South Pacific — but the young population must be equipped and mobilized to carry the region\'s faith forward. Amit\'s philosophy is deep, long-term brotherhood-building over rapid expansion. The Student Prayer Movement (studentnet.me), the Gospel Advancing Movement pilot, and the Redeem Art initiative in schools are environments where the next generation encounters God and discovers their calling.',
    collaborate:
      'NXT Move facilitates the transformative conversations that empower South Pacific leaders to embrace their role in God\'s story. Cities of Hope content captures stories of revival and city-wide transformation, ensuring that what unlocks breakthrough in Perth can inspire breakthrough in Auckland. Stephen Scrimgeour, AJ Heijns, and Amit bring distinctive strengths to pioneering student-led, prayer-driven community transformation.',
    champion:
      'Amit\'s dream is that resources would flow where they are needed — that everyone would understand the Kingdom is worth living and dying for. NXT Move champions this vision by connecting the South Pacific team to a global community where there are no logos and no egos, only the name of Jesus lifted up.',
    interests: [],
  },
];

const INITIATIVES = [
  {
    id: 'init-10-40',
    num: '01',
    name: '10/40 Window Strategic Gathering & Network',
    tagline: 'Connecting the world\'s most fruitful unreached-context leaders',
    pdfPage: 16,
    pull:
      'The world\'s most unreached young people are not waiting for a better strategy. They are waiting to be activated.',
    stats: [
      { value: '20+', label: 'Leaders from across the 10/40 Window' },
      { value: '5+', label: 'Regions: N. Africa, Levant, Central Asia, S. Asia, Asia-Pacific' },
      { value: 'Sept 2026', label: '4-day intensive gathering' },
    ],
    catalyze:
      'The 10/40 Window — stretching from North Africa through Central Asia to the Asia-Pacific — is home to the world\'s largest concentration of unreached people. NXT Move has something extraordinary: a community of young, courageous, contextually-rooted leaders already producing real fruit in these spaces. What they lack is connection to one another and a shared strategy for multiplying what God is already doing. A focused four-day gathering in September 2026 brings 20+ leaders together for intensive prayer, discernment, and strategic planning.',
    collaborate:
      'Leaders spanning North Africa, the Levant, Central Asia, the Indian subcontinent, and the Asia-Pacific are brought into the same room, under the same Spirit, with the same mandate. Strategic Research and Mapping identifies what is already producing the most fruit and where collaboration can scale it. A digital network maintains these connections long after the gathering — building accountability structures that give global partners visibility into compounding Kingdom return.',
    champion:
      'NXT Move champions the 10/40 Window\'s most fruitful leaders by giving them something they have rarely experienced: a global community that sees them, celebrates what God is doing through them, and invests in their continued growth. Leaders who have labored in isolation discover they are part of something far larger than their own region — and that discovery changes what becomes possible.',
    interests: ['unreached', '10-40'],
  },
  {
    id: 'init-soul-care',
    num: '02',
    name: 'Soul Care for\nLeaders',
    tagline: 'The heartbeat of everything NXT Move does',
    pdfPage: 17,
    stats: [
      { value: '11', label: 'Care streams: Crisis, Retreats, Peer Networks, Emergency Support, Listening Labs' },
      { value: '5', label: 'Regions served with soul care infrastructure' },
      { value: 'Global', label: 'Deployment wherever leaders need presence' },
    ],
    catalyze:
      'Every leader in the NXT Move community carries enormous responsibility — often in isolation, in restricted environments, under persecution, or in personal crisis. Research is consistent: there is a universal hunger for a community that values emotional and spiritual well-being over organizational output. Soul Care catalyzes a countercultural reality — a global community where leaders can be honest, be heard, and be restored before they break. Crisis Response, Soul Care Retreats, and Listening Labs create the conditions for this.',
    collaborate:
      'Peer Care Networks connect leaders to trusted peers and mentors for ongoing encouragement across the global community — recognizing that soul care is a relational practice sustained over a lifetime. The Emergency Leader Support Fund provides dignified, relationship-based financial provision for leaders in acute need, reflecting the whole community\'s commitment to one another. Every regional community contributes to and benefits from this network: the leader in Southeast Asia who is struggling has access to a peer in Europe who has walked the same road.',
    champion:
      'NXT Move champions leaders by showing up for them when it matters most — not with a program, but with presence. Ruslan\'s story illustrates this most powerfully: when he lost his son, the NXT Move community grieved with him. That is what soul care looks like in practice — not a service, but a family. Soul Care is the investment that makes every other investment sustainable.',
    interests: ['healthy-leaders'],
  },
  {
    id: 'init-women',
    num: '03',
    name: 'Women\'s Leadership Initiative',
    tagline: 'Elevating the leaders already shaping the next generation',
    pdfPage: 18,
    stats: [
      { value: '11', label: 'Program streams: Convening, Activation, Mentorship, Voice, Soul Care' },
      { value: '5', label: 'Regions with dedicated women\'s activation funding' },
      { value: 'Global', label: 'Annual women\'s leadership convening across all 11 regions' },
    ],
    catalyze:
      'Women are among the most effective leaders shaping the next generation across every region NXT Move serves. They carry the relational infrastructure that makes regional communities function, lead community transformation in Africa and Latin America, and work faithfully in some of the world\'s most restricted and high-pressure ministry contexts — often without a platform, a voice, or a partner who champions them. Too often, the weight they carry goes unseen and unacknowledged. This initiative catalyzes what is already present — creating environments, resources, and platforms where women leaders can step fully into the impact they are already making.',
    collaborate:
      'The Global Women\'s Leadership Convening brings women influencers from all regions together for peer learning, vision alignment, and collective strategy. The Regional Activation Fund equips each regional community to identify, invest in, and platform women leaders within their own cultural context. Mentorship and Sponsorship Pathways connect emerging women leaders to senior mentors, and Voice & Visibility investments amplify women\'s contributions through NXTPub, podcasting, and global platforms.',
    champion:
      'Marina Randall\'s story captures what this initiative scales: as a woman in ministry who didn\'t always feel heard or valued, she found in NXT Move a community that gave her space to lead and empowered her to do what God called her to do. That experience is what this initiative replicates across every region. Stronger women leaders mean stronger churches, stronger communities, and a stronger future for the next generation.',
    interests: ['women'],
  },
  {
    id: 'init-collab',
    num: '04',
    name: 'Next Gen Global Collab',
    tagline: 'Global networks working together so the next generation might follow Jesus',
    pdfPage: 19,
    stats: [
      { value: '30+', label: 'Member organizations from 20+ nations' },
      { value: '2033', label: 'Common Goal: every person in next gen with opportunity to follow Jesus' },
      { value: '2024', label: 'NXT Move appointed official Backbone Organization' },
    ],
    catalyze:
      'The Next Gen Global Collab began in 2012 when Colin Piper (Converge) started gathering Leaders of Global Youth Movements to birth the concept. By January 2024, 27 members from 20 organizations officially constituted the Collab, and NXT Move was appointed Backbone Organization. Annual all-member gatherings followed: Cairo 2024, Dominican Republic 2025, Oklahoma City 2026. The Collab\'s Common Goal is electrifyingly specific: everyone in the next generation having an opportunity to follow Jesus by 2033. A 2027 \'Everyone Next Gen\' event is being planned.',
    collaborate:
      'The Collab\'s mutual activities include Annual Research, Collaboration Labs, and collective strategy built on the Stanford Social Innovation Review\'s Five Conditions of Collective Impact. Members include: OneHope, Lausanne, East West, Dare2Share, GKPN, ICETE, GLN, Word of Life, Children\'s Forum, Scripture Union, Life.Church, Finishing the Task, Empower 21, Alpha Youth, Christian Vision, YFCI, Sports Movement, WEA, CRU, Convoy of Hope, Steiger, Palau, BCM International, and more. Leadership Team chaired by Jurie Kriel (NXT Move).',
    champion:
      'NXT Move champions the Collab\'s member organizations by building backbone infrastructure — systems, relationships, and shared research that makes every network better and more effective. The Collab\'s values: Global Influence for Grassroots Impact, Working With/From/For the Next Generation, Holistic Kingdom Transformation, Unity in Diversity, Courageous Humility, and Amplifying the Local Church. The greatest success is what others accomplish through the collaboration NXT Move makes possible.',
    interests: ['unity'],
  },
  {
    id: 'init-mercy',
    num: '05',
    name: 'Mercy Ministry',
    tagline: 'From charity to transformation — From dependency to dignity — From programs to lifestyle',
    pdfPage: 20,
    stats: [
      { value: '3', label: 'Active regions: South Africa, Nairobi, Philippines' },
      { value: '30–50', label: 'Mercy Ambassadors launching Q4 2026 (ages 18–30)' },
      { value: 'Micah 6:8', label: 'Act justly. Love mercy. Walk humbly.' },
    ],
    catalyze:
      'The Church has been good at Gospel proclamation. A generation is now watching to see if we will also do Gospel demonstration. NXT Move believes mercy ministry is not a department — it is a lifestyle. In partnership with Convoy of Hope, NXT Move is co-creating a Christ-centered, intergenerational movement where young leaders are trusted, not managed; dignity is restored, not dependency created; and churches are hubs, not distribution centers. Active mercy labs are running in South Africa, Nairobi, and the Philippines.',
    collaborate:
      'The 2026 Strategic Rhythm moves from South Africa Learning Labs (Q1) through Nairobi Mercy Labs Integration (Q2), Dignity-Focused Initiatives (Q3), and the launch of Mercy Ambassadors — 30–50 young leaders ages 18–30 — as researchers, co-designers, storytellers, and peer trainers (Q4). Young people have full ownership from design to delivery to presentation. NXT Move\'s principle: influence over implementation. The goal is not more people working with Convoy of Hope — it is more people engaging in mercy ministry in their own communities.',
    champion:
      'NXT Move champions young mercy leaders by trusting them with real responsibility — not just participation. In Nairobi, young people are running literacy centers, scholarship funds tied to discipleship, justice conferences that bring churches and NGOs to the same table, and food ministries led by young cooks. NXT Move champions the vision that the church\'s response to suffering can restore dignity, not create dependency — and that the next generation is uniquely positioned to lead it.',
    interests: ['mercy'],
  },
  {
    id: 'init-leadership',
    num: '06',
    name: 'Leadership Cultivation',
    tagline: 'In a world of skills-based programs and performance metrics, NXT Move brings something rare: depth',
    pdfPage: 21,
    stats: [
      { value: '11', label: 'Regions served through leadership cultivation pathways' },
      { value: '4', label: 'Cultivation pathways: peer coaching, 1:1 mentoring, peer learning school, grassroots tables' },
      { value: 'Global', label: 'Tailored to each leader\'s developmental stage' },
    ],
    catalyze:
      'The global Church is full of leaders who know how to perform but are running on empty. Skills-based programs and performance metrics produce output — but not formation. NXT Move catalyzes something countercultural: safe relational spaces for reflection and peer accountability, rooted in soul care, spiritual formation, resilience, and legacy thinking. This is especially critical for leaders under high pressure or moral exhaustion — and it is the foundation on which every other NXT Move initiative is built.',
    collaborate:
      'Leadership Cultivation operates through four pathways tailored to each leader\'s stage: peer coaching within a cohort process; 1:1 coaching with a trusted leader; a peer learning community and leadership school; and grassroots-focused tables built around specific topics. These pathways are woven across all 11 regional communities — ensuring that the leader in Central Asia navigating persecution and the leader in North America navigating cultural pressure both have access to formation, not just information.',
    champion:
      'NXT Move champions leaders by believing that a spiritually grounded, relationally healthy leader will outlast, outpace, and outmultiply a high-performing but hollow one every time. The vision: a global community of leaders who are resilient, spiritually grounded, and committed to lasting impact — producing sustainable legacy and spiritual integrity that transcends traditional success metrics. This is what makes the movement sustainable for generations.',
    interests: ['healthy-leaders'],
  },
  {
    id: 'init-church-planter',
    num: '07',
    name: 'South Asia Church Planter Training',
    tagline: 'Multiplication you can trace, measure, and watch compound for decades',
    pdfPage: 19,
    stats: [
      { value: '$209', label: 'Per trained leader — extraordinary Kingdom value' },
      { value: '110', label: 'Church planters in 2026 pilot — 3 nations' },
      { value: 'July 2026', label: '250 women graduating as ministers of the gospel' },
    ],
    pull:
      'A church planter in India doesn\'t just lead one congregation. He disciples young people who disciple others, who plant churches, who raise up the next generation of leaders.',
    catalyze:
      'At approximately $209 per trained leader, a church planter in India doesn\'t just lead one congregation. He disciples young people who disciple others, who plant churches, who raise up the next generation of leaders. The 2026 pilot delivers a 20-month hybrid diploma to 110 church planters across India, Bhutan, and Bangladesh — curriculum developed indigenously by 12 South Asian next-generation leaders.',
    collaborate:
      'The 2027–2030 expansion scales to five nations — India, Bhutan, Bangladesh, Myanmar, Nepal — building institutional partnerships to embed youth ministry as a permanent discipline in South Asian theological education. NXT Move connects the team to global resource partners, funders, and academics.',
    champion:
      'In July 2026, Dr. Joyson\'s team will graduate 250 women who came out of exploitation — now commissioned as ministers of the gospel. This is multiplication you can trace, measure, and watch compound for decades.',
    interests: ['multiplier', 'global-south'],
  },
];

const FILTERS = [
  { id: 'multiplier', label: 'One leader multiplies thousands', desc: 'Investments where a single trained leader compounds into churches, generations, and movements.' },
  { id: 'unreached', label: 'Least-reached places on earth', desc: 'Investments where a single trained leader compounds into churches, generations, and movements.' },
  { id: 'healthy-leaders', label: 'Healthy leaders change everything', desc: 'Investments where a single trained leader compounds into churches, generations, and movements.' },
  { id: 'unity', label: 'The Church moving as\none', desc: 'Networks, alliances, and collaborative tables that align scattered effort into shared mission.' },
  { id: 'women', label: 'Women rising into their calling', desc: 'Elevating the women who already carry entire communities — across all 11 regions.' },
  { id: 'mercy', label: 'Mercy ministry as a\nlifestyle', desc: 'Investments where a single trained leader compounds into churches, generations, and movements.' },
  { id: 'global-south', label: 'The Church in the Global South', desc: 'Indigenous leaders writing their own curriculum and the next chapter of Church history.' },
  { id: 'unlikely-soil', label: 'God in unlikely\nsoil', desc: 'Central Asia, the underground Church, and the audacious goals that sound like prayer.' },
  { id: 'europe', label: 'Pre-revival Europe', desc: 'Investments where a single trained leader compounds into churches, generations, and movements.' },
  { id: '10-40', label: 'The 10/40 Window', desc: 'A connected community of leaders across the world\'s most unreached corridor.' },
];

const PARTNER_TIERS = [
  {
    name: 'Catalyst',
    range: '$209 — $5,000',
    flavor: 'Train a leader. Sponsor a cohort seat. Fuel a single, traceable multiplication.',
    examples: ['1 South Asia church planter ($209)', '1 cohort intensive seat ($1,200)', 'Soul Care retreat scholarship ($3,500)'],
  },
  {
    name: 'Champion',
    range: '$5,000 — $50,000',
    flavor: 'Champion a regional community for a year. Invest in the infrastructure that keeps leaders multiplying.',
    examples: ['Regional roundtable cycle ($12K)', 'Women\'s Activation Fund chapter ($25K)', 'City Project quarterly funding ($40K)'],
  },
  {
    name: 'Backbone',
    range: '$50,000+',
    flavor: 'Underwrite the unseen connective tissue. The relational infrastructure that makes 11 regions work as one.',
    examples: ['10/40 Window Gathering ($75K)', 'Annual Collab convening ($150K)', 'Founding Backbone Partner ($250K+)'],
  },
];

// ─── DFW Model City — local expression of the global vision ───
const DFW_MODEL = {
  id: 'dfw',
  name: 'DFW Model City',
  region: 'North America',
  tagline: 'A local expression of what NXT Move is doing globally — and a working model for the world.',
  position: 'If 11 regions describe the breadth of NXT Move, Dallas–Fort Worth describes the depth. It is the most operationally mature Catalytic Communities deployment anywhere in the network — the place where the global blueprint becomes a working reality.',
  research: [
    { value: '75%', label: 'of young people in DFW feel church teachings are outdated or irrelevant.' },
    { value: '50%', label: 'reported feeling the church is inauthentic, contributing to their decision to leave.' },
    { value: '70%', label: 'of those who left the church still see themselves as Christians — disengaged from institutions, not from faith.' },
  ],
  researchAttrib: 'NXT Move | Arbor Research Project in DFW',
  pillars: [
    {
      num: '01',
      name: 'Catalytic Communities',
      body: 'Cohorts of pastors, marketplace leaders, and next-gen ministers collaborating, sharing insight, and growing together — the same model NXT Move is exporting to Nairobi, São Paulo, and Almaty.',
    },
    {
      num: '02',
      name: 'Collective Research',
      body: 'A research partnership with Dallas Theological Seminary developing a longitudinal study of Christian practices and faith maturity in the next generation. Findings shape strategy here — and inform every other region.',
    },
    {
      num: '03',
      name: 'Collaborative Gatherings',
      body: 'The DFW Next-Gen Leaders Forum equips local leaders with tools, language, and relational depth — and convenes the influencers shaping faith for an entire metroplex.',
    },
    {
      num: '04',
      name: 'Church Engagement',
      body: 'United influencers across DFW championing a shared vision for the next generation — across denominations, ethnicities, and ministry contexts, in one of America\'s most strategically diverse cities.',
    },
  ],
  bridge: 'What is proven here is replicable everywhere. The DFW Model City is not the destination of NXT Move — it is the working prototype that proves the global thesis can land in a single city, in a single block, with a single trained leader, and reshape the trajectory of a generation.',
  cta: 'A gift to NXT Move from DFW does two things at once: it deepens the work happening in your own backyard, and it underwrites the model the rest of the world is watching.',
};

window.NXT_DATA = { REGIONS, INITIATIVES, FILTERS, PARTNER_TIERS, DFW_MODEL };
})();
