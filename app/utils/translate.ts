export type LanguageCode = 'uk' | 'it';

//////Homepage
export type HeaderSection = {
  home: string;
  services: string;
  market: string;
  support: string;
  aboutUs: string;
  requestQuote: string;
  contact: string;
};

export type SliderSection = {
  slider1MainTxt: string;
  slider1SubMainTxt: string;
  slider2MainTxt: string;
  slider2SubMainTxt: string;
  slider3MainTxt: string;
  slider3SubMainTxt: string;
};

export type ProductionSection = {
  sportTxt: string;
  promoTxt: string;
  beachTxt: string;
  underwearTxt: string;
  btnTxt: string;
  bottomTxt: string;
  bottomSubTxt: string;
};

export type ImageCardsSection = {
  header1Txt: string;
  subTxt1: string;
  header2Txt: string;
  subTxt2: string;
  header3Txt: string;
  subTxt3: string;
  header4Txt: string;
  subTxt4: string;
};

export type CertificateSection = {
  header: string;
};

export type CustomerSection = {
  text: string;
  subText: string;
};

export type FooterSection = {
  text: string;
};

export type PopUpSection = {
  header: string;
  text1: string;
  list1: string;
  list2: string;
  list3: string;
  text2: string;
  text3: string;
};

export type CookieSection = {
  text: string;
  btnText: string;
};

export type HomepageTranslate = {
  headerSection: Record<LanguageCode, HeaderSection>;
  sliderSection: Record<LanguageCode, SliderSection>;
  productionSection: Record<LanguageCode, ProductionSection>;
  imageCardsSection: Record<LanguageCode, ImageCardsSection>;
  certificateSection: Record<LanguageCode, CertificateSection>;
  customerSection: Record<LanguageCode, CustomerSection>;
  footerSection: Record<LanguageCode, FooterSection>;
  popUpSection: Record<LanguageCode, PopUpSection>;
  cookieSection: Record<LanguageCode, CookieSection>;
};

export const homepageTranslate: HomepageTranslate = {
  headerSection: {
    uk: {
      home: 'Home',
      services: 'Services',
      market: 'Market',
      support: 'Support',
      aboutUs: 'About Us',
      requestQuote: 'Request Quote',
      contact: 'Contact',
    },
    it: {
      home: 'Home',
      services: 'Servizi',
      market: 'Mercati',
      support: 'Supporto',
      aboutUs: 'Chi siamo',
      requestQuote: 'Richiedi un preventivo',
      contact: 'Contatti',
    },
  },
  sliderSection: {
    uk: {
      slider1MainTxt:
        'Production Finance Logistics everything you need to make grow your business.',
      slider1SubMainTxt: `Let's get your your international ambitions!`,
      slider2MainTxt: 'Fashion Industry Production',
      slider2SubMainTxt: 'Where collaborations become results.',
      slider3MainTxt: '  Worker Industry Production',
      slider3SubMainTxt: ' Where networking fuels your business.',
    },
    it: {
      slider1MainTxt:
        'Produzione Finanza Logistica tutto ciò che serve per far crescere la vostra attività.',
      slider1SubMainTxt: 'Diamo voce alle vostre ambizioni internazionali!',
      slider2MainTxt: `Produzione per l’industria della moda`,
      slider2SubMainTxt: `Dove la collaborazione diventa risultato.`,
      slider3MainTxt: `Produzione per l’industria del abbigliamneto da lavoro.`,
      slider3SubMainTxt: `Dove il networking alimenta il vostro business.`,
    },
  },
  productionSection: {
    uk: {
      sportTxt: 'Sportwear Production',
      promoTxt: 'Promotional Wear Production',
      beachTxt: 'Beachwear Production',
      underwearTxt: 'Underwear Production',
      btnTxt: 'More',
      bottomTxt: 'IN OUR WORLD',
      bottomSubTxt: 'every connection is an opportunity',
    },
    it: {
      sportTxt: `Produzione per l’industria dell’abbigliamneto Sportivo.`,
      promoTxt: `Produzione per   l’industria dell’abbigliamento Promozionale.`,
      beachTxt: `Produzione Beachwear`,
      underwearTxt: `Produzione Underwear`,
      btnTxt: 'Scopri',
      bottomTxt: `NEL NOSTRO MONDO`,
      bottomSubTxt: `ogni connessione è un'opportunità`,
    },
  },
  imageCardsSection: {
    uk: {
      header1Txt: 'Established experience',
      subTxt1:
        'Nova Garments Group, based in Amsterdam, is your trusted partner for international production garment management  with more than 20 years of expertise in Asia Market.',
      header2Txt: 'Integrated management',
      subTxt2:
        'From sampling to delivery, we monitor every step to ensure quality and on-time delivery.',
      header3Txt: 'Exclusive supplier Network',
      subTxt3:
        'We work only with certified manufacturers, ensuring high standards',
      header4Txt: 'Direct responsibility',
      subTxt4:
        'We are not intermediaries. We are your single point of contact, ready to solve any problem with quick and reliable solutions.',
    },
    it: {
      header1Txt: `Esperienza consolidata`,
      subTxt1: `Nova Garments Group, con sede ad Amsterdam, è il vostro partner di fiducia per la gestione della produzione internazionale di capi d'abbigliamento, con oltre 20 anni di esperienza nel subcontinente indiano.
`,
      header2Txt: `Gestione integrata`,
      subTxt2: `Dalla campionatura alla consegna della produzione, monitoriamo ogni fase per garantire la qualità e la puntualità delle consegne.
`,
      header3Txt: `Rete di fornitori esclusivi`,
      subTxt3: `Lavoriamo solo con produttori certificati, per garantire standard elevati.`,
      header4Txt: `Responsabilità diretta`,
      subTxt4: `Non siamo intermediari. Siamo il vostro unico interlocutore, pronto a risolvere qualsiasi problema con soluzioni rapide e affidabili.`,
    },
  },
  certificateSection: {
    uk: {
      header: 'Certificates',
    },
    it: {
      header: `Certificazioni`,
    },
  },
  customerSection: {
    uk: {
      text: 'Customer-first',
      subText: 'Your satisfaction is our primary goal.',
    },
    it: {
      text: 'Customer-first',
      subText: `La vostra soddisfazione è il nostro obiettivo primario.`,
    },
  },
  footerSection: {
    uk: {
      text: 'PRODUCE SAFELY AND GROW YOUR BUSINESS.',
    },
    it: {
      text: 'PRODURRE IN MODO SICURO PER FAR CRESCERE IL  VOSTRO BUSINESS',
    },
  },
  popUpSection: {
    uk: {
      header: `We dress up your ideas, in record time! Do you have a customization project for garments?`,
      text1: `We are the ideal partner to make it a reality:`,
      list1: `Low order minimums: Perfect for custom needs.`,
      list2: `Guaranteed speed: Quick production and delivery.`,
      list3: `Uniqueness assured: Customizations that reflect your vision.`,
      text2: `Don't wait, your project is just a step away from becoming a reality.`,
      text3: `Contact us today for a custom quote and bring your project to life!`,
    },
    it: {
      header: `Vestiamo le tue idee, in tempo record! Hai un progetto di customizzazione per capi d’abbigliamento?`,
      text1: `Noi siamo il partner ideale per realizzarlo:`,
      list1: `Minimi d’ordine ridotti: Perfetto per esigenze su misura.`,
      list2: `Rapidità garantita: Produzione e consegna in tempi brevi.`,
      list3: `Unicità assicurata: Personalizzazioni che rispecchiano la tua visione.`,
      text2: `Non aspettare, il tuo progetto è a un passo dal diventare realtà`,
      text3: `Contattaci oggi stesso per un preventivo su misura e dai vita al tuo progetto!`,
    },
  },
  cookieSection: {
    uk: {
      text: ` We use cookies to improve your experience. By using our site, you accept our use of cookies.`,
      btnText: `Accept`,
    },
    it: {
      text: `Utilizziamo i cookie per migliorare la tua esperienza. Utilizzando il nostro sito, accetti il ​​nostro utilizzo dei cookie.`,
      btnText: `Accettare`,
    },
  },
};

//////service page
export type ServiceHeroSection = {
  text: string;
};

export type ServiceSection = {
  title: string;
  subTitle: string;
  title2: string;
  subTitle2: string;
  title3: string;
  subTitle3: string;
  title4: string;
  subTitle4: string;
  title5: string;
  subTitle5: string;
  title6: string;
  subTitle6: string;
};

export type ServicePageTranslate = {
  serviceHeroSection: Record<LanguageCode, ServiceHeroSection>;
  serviceSection: Record<LanguageCode, ServiceSection>;
};

export const servicePageTranslate: ServicePageTranslate = {
  serviceHeroSection: {
    uk: {
      text: 'Finance, Production, Logistic and Delivery Seamless.',
    },
    it: {
      text: 'Finanza Produzione Logistica Spedizini.',
    },
  },
  serviceSection: {
    uk: {
      title: 'COLLECTION AND PRODUCTION.',
      subTitle:
        'You will be able to create customized collections and request tailor-made productions, staying connected to the processes at every stage. Thanks to our integrated platform, you will have full control and visibility over every detail, from design to production.',
      title2: 'ACHIEVE YOUR TARGET PRICE',
      subTitle2:
        'Access selected suppliers and take advantage of economies of scale to get the best value for money. With us, you save money without sacrificing quality.',
      title3: 'QUALITY GUARANTEED WITH AQL',
      subTitle3:
        'Our quality control service based on AQL (Acceptance Quality Limit) is designed to ensure that your products meet the highest standards of quality and compliance. We work to guarantee maximum customer satisfaction, minimize defects, and optimize production processes.',
      title4: 'INTERNATIONAL FREIGHTS',
      subTitle4:
        'By sea, air or SEA/AIR, choose the best solution for your time and budget. Customs and tax warehousing: Eliminate upfront costs on VAT with our tax-authorized warehouse in the Netherlands.',
      title5: 'YOUR DELIVERY DATE',
      subTitle5:
        'We offer a distribution service across Europe, ensuring delivery within 48 hours. We can handle shipments of all sizes, from single parcels to full loads, ensuring optimal efficiency and punctuality. Trust us for a secure and professional service.',
      title6: 'CUSTOMIZED SERVICE',
      subTitle6:
        "Our service simplifies your company's financial management, ensuring that your orders are initiated quickly and without banking obstacles. We provide support to streamline payment flows, overcome bureaucratic complexities, and ensure operational continuity with flexible financial solutions.",
    },
    it: {
      title: `COLLEZIONE E PRODUZIONI`,
      subTitle: `Potrete creare collezioni personalizzate e richiedere produzioni su misura, rimanendo connessi ai processi in ogni fase. Grazie alla nostra piattaforma integrata, avrete pieno controllo e visibilità su ogni dettaglio, dalla progettazione alla produzione`,
      title2: ` I VOSTRI TARGET IL NOSTRO OBIETTIVO`,
      subTitle2: `Accedete a fornitori selezionati e sfruttate le economie di scala per ottenere il miglior rapporto qualità-prezzo. Con noi risparmiate senza rinunciare alla qualità.`,
      title3: `QUALITA’ GARANTITA CON AQL CONTROL`,
      subTitle3: `Il nostro servizio di controllo qualità basato su AQL (Acceptance Quality Limit) è progettato per garantire che i vostri prodotti soddisfino i più elevati standard di qualità e conformità. Lavoriamo per garantire la massima soddisfazione del cliente, ridurre al minimo i difetti e ottimizzare i processi produttivi.`,
      title4: `SPEDIZIONI INTERNAZIONALI`,
      subTitle4: `Via mare, via aerea o SEA/AIR, scegliete la soluzione migliore per i vostri tempi e il vostro budget. Deposito doganale e fiscale: Eliminate i costi iniziali dell'IVA con il nostro magazzino autorizzato nei Paesi Bassi.
`,
      title5: `SERVIZI DI LOGISTICA`,
      subTitle5: `Offriamo un servizio di distribuzione in tutta Europa, garantendo la consegna entro 48 ore. Siamo in grado di gestire spedizioni di tutte le dimensioni, dai singoli pacchi ai carichi completi, garantendo efficienza e puntualità ottimali. Affidatevi a noi per un servizio sicuro e professionale.
`,
      title6: `SERVIZI CUSTOMIZZATI`,
      subTitle6: `Il nostro servizio semplifica la gestione finanziaria della vostra azienda, garantendo che i vostri ordini vengano avviati rapidamente e senza ostacoli bancari. Forniamo supporto per snellire i flussi di pagamento, superare le complessità burocratiche e garantire la continuità operativa con soluzioni finanziarie flessibili`,
    },
  },
};

//////market page
export type WhyChooseUsSection = {
  header: string;
  text: string;
  text2: string;
  boldTxt: string;
};

export type FashionSection = {
  header: string;
  text: string;
};

export type UnderwearSection = {
  text: string;
  text1: string;
  text2: string;
};

export type WorkerSection = {
  header: string;
  list1: string;
  list2: string;
  list3: string;
  list4: string;
};

export type PromowearSection = {
  header: string;
  text: string;
};

export type SportwearSection = {
  header: string;
  text: string;
};

export type ContactUsSection = {
  title: string;
  text: string;
  boldText: string;
  buttonText: string;
};

export type MarketPageTranslate = {
  whyChooseUsSection: Record<LanguageCode, WhyChooseUsSection>;
  fashionSection: Record<LanguageCode, FashionSection>;
  underwearSection: Record<LanguageCode, UnderwearSection>;
  workerSection: Record<LanguageCode, WorkerSection>;
  promowearSection: Record<LanguageCode, PromowearSection>;
  sportwearSection: Record<LanguageCode, SportwearSection>;
  contactUsSection: Record<LanguageCode, ContactUsSection>;
};

export const marketPageTranslate: MarketPageTranslate = {
  whyChooseUsSection: {
    uk: {
      header: 'Who Chooses Us',
      text: ' Manufacturers and importers of work and promotional apparel, who seek efficient and customized solutions.',
      text2:
        'Growing demand for flexibility for seasonal and capsule collections',
      boldTxt:
        '  Increasing need for integrated management to optimize profit margins.',
    },
    it: {
      header: `Chi ci sceglie`,
      text: `Produttori e importatori di abbigliamento di moda da lavoro e promozionale, che cercano soluzioni efficienti e personalizzate.`,
      text2: `Per una crescente richiesta di flessibilità per collezioni stagionali e capsule.`,
      boldTxt: `E per crescente necessità di una gestione integrata per ottimizzare i margini di profitto.`,
    },
  },
  fashionSection: {
    uk: {
      header: 'Fashion',
      text: `Brands in men's, women's, and children's fashion, underwear, textiles, and household sponges, from importer to large retailers, seeking efficient and customized solutions.`,
    },
    it: {
      header: `Fashion`,
      text: `Collaboriamo con  marchi della moda uomo, donna ,bambino, dell'intimo, del tessile e delle spugne per la casa, dall'importatore alla grande distribuzione, cercano soluzioni efficienti e personalizzate.
`,
    },
  },
  underwearSection: {
    uk: {
      text: `  We are a company specializing in the production of high-quality underwear and Beachwear, designed to meet the specific needs of our clients. Each piece is the result of a meticulous and collaborative process, where the customer takes center stage: we listen to your requests and transform them into unique products that combine comfort, style, and excellence.`,
      text1: `High-quality, tailored to`,
      text2: `your needs.`,
    },
    it: {
      text: `Collaboriamo con  marchi della moda uomo, donna ,bambino, dell'intimo, del tessile e delle spugne per la casa, dall'importatore alla grande distribuzione, cercano soluzioni efficienti e personalizzate.`,
      text1: `Qualita su misura per le`,
      text2: `vostre esigenze.`,
    },
  },
  workerSection: {
    uk: {
      header: `Worker Industry Production`,
      list1: `Consulting and analysis: From managing business specifications to tender to customizing production processes.`,
      list2: `Increasing needs for integrated management to optimize profit margins.`,
      list3: `Study and Creation of Custom Uniforms.`,
      list4: `High Visibility Products, Fire Retardant, Clothing Antistatic Clothing`,
    },
    it: {
      header: `Worker Industry Production`,
      list1: `Consulenza e analisi: Dalla gestione delle specifiche aziendali alle gare d'appalto, fino alla personalizzazione dei processi produttivi.
`,
      list2: `Crescenti esigenze di gestione integrata per ottimizzare i margini di profitto.`,
      list3: `Studio e creazione di uniformi personalizzate.`,
      list4: `Prodotti ad alta visibilità, ignifughi, abbigliamento abbigliamento antistatico.`,
    },
  },
  promowearSection: {
    uk: {
      header: 'Promotional Wear Production',
      text: ` With years of experience in the industry, we specialize in the production of promotional wear that blends style, comfort, and functionality. Whether for events, corporate branding, or promotional campaigns, our garments are designed to represent your brand with distinction and quality.`,
    },
    it: {
      header: `Promozionale`,
      text: `Con anni di esperienza nel settore, siamo specializzati nella produzione di abbigliamento promozionale che unisce stile, comfort e funzionalità. Che si tratti di eventi, branding aziendale o campagne promozionali, i nostri capi sono progettati per rappresentare il vostro marchio con distinzione e qualità.`,
    },
  },
  sportwearSection: {
    uk: {
      header: 'Sportswear Production',
      text: `   We are leaders in creating sportswear that combines performance, comfort, and cutting-edge design. From running to fitness, from soccer to outdoor sports, our sportswear productions are made to support every movement and inspire every athlete`,
    },
    it: {
      header: `Sportswear`,
      text: `Siamo leader nella creazione di abbigliamento sportivo che unisce prestazioni, comfort e qualita’. Dalla corsa al fitness, dal calcio agli sport all'aria aperta, le nostre produzioni di abbigliamento sportivo sono realizzate per supportare ogni movimento e ispirare ogni atleta`,
    },
  },
  contactUsSection: {
    uk: {
      title: `We are the ideal partner for your international productions`,
      text: `Choose to cooperate with us, you will have at your side a unique interlocutor, experienced and reliable, who supports you at every stage of the production process and helps you overcome the challenges of global markets.`,
      boldText: `Produce safely and grow your business.`,
      buttonText: `Contact Us`,
    },
    it: {
      title: `Siamo il partner ideale per le vostre produzioni internazionali`,
      text: `Scegliere di collaborare con Noi, significa avere al vostro fianco un interlocutore unico, esperto e affidabile, che vi affianca in ogni fase del processo produttivo e vi aiuta a superare le sfide dei mercati globali.`,
      boldText: `Produrre in sicurezza per far crescere il vostro business.`,
      buttonText: `Contattaci`,
    },
  },
};

//////support page
export type SupportHeroSection = {
  header: string;
  text?: string;
};

export type LogisticsSection = {
  title: string;
  header1: string;
  subheader1: string;
  header2: string;
  subheader2: string;
  header3: string;
  subheader3: string;
  header4: string;
  subheader4: string;
};

export type SupportPageTranslate = {
  supportHeroSection: Record<LanguageCode, SupportHeroSection>;
  logisticsSection: Record<LanguageCode, LogisticsSection>;
};

export const supportPageTranslate: SupportPageTranslate = {
  supportHeroSection: {
    uk: {
      header: 'Integrated Logistics and dedicated Deliveries',
      text: '',
    },
    it: {
      header: `Logistica integrata e consegne dedicate`,
      text: '',
    },
  },
  logisticsSection: {
    uk: {
      title: 'Integrated Logistics and Dedicated Deliveries.',
      header1: 'Europe-wide FCL/LCL delivery within 48 hours: ',
      subheader1:
        'We offer fast transit times for full shipments (Full Container Load or Groupage).',
      header2: 'Organized Widespread Distribution: ',
      subheader2:
        ' We can handle deliveries from single packages to large-scale distributions.',
      header3: 'Direct shipments to your customers: ',
      subheader3:
        ' Upon request, we also handle delivery directly to the final recipients.',
      header4: 'Traceability and transparency: ',
      subheader4: 'We ensure total control along the entire supply chain.',
    },
    it: {
      title: `Logistica integrata e consegne dedicate.`,
      header1: `Consegna FCL/LCL in tutta Europa entro 48 ore: `,
      subheader1: `Offriamo tempi di transito rapidi per le spedizioni complete (Full Container Load o Groupage).`,
      header2: `Distribuzione capillare organizzata: `,
      subheader2: `Possiamo gestire consegne da singoli colli a distribuzioni su larga scala.`,
      header3: `Spedizioni dirette ai vostri clienti: `,
      subheader3: `Su richiesta, gestiamo anche la consegna diretta ai destinatari finali.`,
      header4: `Tracciabilità e trasparenza: `,
      subheader4: `Assicuriamo un controllo totale lungo l'intera catena di fornitura.`,
    },
  },
};

//////about us
export type AboutHeroSection = {
  boldtxt1: string;
  text1: string;
  boldtxt2: string;
  text2: string;
  text3: string;
};

export type AboutPageTranslate = {
  aboutHeroSection: Record<LanguageCode, AboutHeroSection>;
};

export const aboutPageTranslate: AboutPageTranslate = {
  aboutHeroSection: {
    uk: {
      boldtxt1: ` Nova Garments Group`,
      text1: `, based in Amsterdam, is your trusted partner for international production management. Strategically located near the port of Rotterdam and Schiphol International Airport, we offer innovative solutions for companies that want to expand globally without complications.`,
      text2: `With an established network of strategic partners in`,
      boldtxt2: `Bangladesh and Pakistan`,
      text3: `, we simplify every aspect of the production process-from financial management to logistics to customs clearance. Thanks to our local agents and our widespread presence throughout Europe, we guarantee constant personalized and reliable support.`,
    },
    it: {
      boldtxt1: ` Nova Garments Group`,
      text1: `, con sede ad Amsterdam, è il vostro partner di fiducia per la gestione della produzione internazionale. Situati in posizione strategica vicino al porto di Rotterdam e all'aeroporto internazionale di Schiphol, offriamo soluzioni innovative per le aziende che vogliono espandersi a livello globale senza complicazioni.`,
      text2: `Con una rete consolidata di partner strategici in `,
      boldtxt2: `Bangladesh e Pakistan`,
      text3: `, semplifichiamo ogni aspetto del processo produttivo, dalla gestione finanziaria alla logistica, fino allo sdoganamento. Grazie ai nostri agenti locali e alla nostra presenza capillare in tutta Europa, garantiamo un supporto costante, personalizzato e affidabile.`,
    },
  },
};

//////contact us
export type ContactFormSection = {
  contactName: string;
  companyName: string;
  country: string;
  text: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
  option6: string;
  address: string;
  phone: string;
  email: string;
  message: string;
  btnText: string;
};

export type ContactUsTranslate = {
  contactUsSection: Record<LanguageCode, ContactFormSection>;
};

export const contactUsTranslate: ContactUsTranslate = {
  contactUsSection: {
    uk: {
      contactName: `Contact Name`,
      companyName: `Company Name`,
      country: `Country`,
      text: `What garment sector are you interested in?`,
      option1: `Fashion`,
      option2: `Underwear`,
      option3: `Beachwear`,
      option4: `Sportswear`,
      option5: `Promo Wear`,
      option6: `Workwear`,
      address: `Address`,
      phone: `Phone`,
      email: `Email`,
      message: `Message`,
      btnText: `Send Request`,
    },
    it: {
      contactName: `Nome del contatto`,
      companyName: `Nome dell'azienda`,
      country: `Paese`,
      text: `A quale settore dell'abbigliamento sei interessato?`,
      option1: `abbigliamento alla moda`,
      option2: `Biancheria intima`,
      option3: `Abbigliamento da spiaggia`,
      option4: `Abbigliamento promozionale`,
      option5: `Abbigliamento sportivo`,
      option6: `Abbigliamento da lavoro`,
      address: `Indirizzo`,
      phone: `Telefono`,
      email: `Email`,
      message: `Messaggio`,
      btnText: `Invia Richiesta`,
    },
  },
};
